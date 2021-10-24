<template>
  <div id="app">
    <portal-target name="semantic-ui-vue"/>
    <ByteIndicator :current-bytes="currentBytes" :increasing-rate="increasingRate" />
    <sui-button class="manual-input" size="big" primary animated="vertical" @click="addManualType">
      <sui-button-content visible>Click Me</sui-button-content>
      <sui-button-content hidden>{{ manualTypeCounter % 2 ? 'CTRL V' : 'CTRL C' }}</sui-button-content>
    </sui-button>
    <div class="byte-shop">
      <header>研究 / Developments</header>
      <div class="development-grid">
        <sui-popup basic
                   v-for="dev in developments"
                   :key="dev.name">
          <sui-popup-header>{{dev.name}} ({{dev.owned?'Unlocked':formatBytes(dev.cost)}})</sui-popup-header>
          <sui-popup-content style="text-align: left">
            <p v-html="dev.description" />
            <p><span style="font-weight: bold">效果：</span><span v-html="dev.effect"></span></p>
            <p v-if="dev.unlockDescription"><span style="font-weight: bold">解锁要求：</span>{{dev.unlockDescription}}</p>
          </sui-popup-content>
          <sui-button
              slot="trigger"
              style="cursor: pointer"
              :icon="dev.icon"
              :inverted="!dev.owned&&devUnlockable(dev)"
              :color="dev.owned||devUnlockable(dev)?dev.color:null"
              @click="purchaseDev(dev)"
          />
        </sui-popup>
      </div>
    </div>
    <div class="byte-shop">
      <header>资产商店 / Byte Shop</header>
      <ByteStore :game-components="gameComponents"
                 :price-modifier-slow-down="priceModifierSlowDown"
                 :current-bytes="currentBytes"
                 :global-modifier="globalModifier"
                 :increasing-rate="increasingRate"
                 @purchase="purchase"
      />
    </div>
    <div class="footer">
      <p style="color: gray">
        Stats: global {{globalModifier.toFixed(2)}}x /
        click  {{formatBytes(manualTypeModifier*globalModifier)}} + {{manualTypeMultiplier}}x /
        price modifier {{priceModifierSlowDown}} /
        interest {{dataInterest}}
        <a @click="restart" style="color: orange">RESET GAME</a>
      </p>
      <p>
      Developed by <a href="https://harrynull.tech">@harrynull</a> for EMagic Jam
      </p>
    </div>
  </div>
</template>

<script>
import ByteIndicator from "@/components/ByteIndicator";
import {formatBytes} from "@/helper";
import {COMPONENTS, DEVELOPMENTS} from "@/GameConfig";
import ByteStore from "@/components/ByteStore";

export default {
  components: {
    ByteIndicator,
    ByteStore,
  },
  data() {
    return {
      currentBytes: 0,
      increasingRate: 0,
      globalModifier: 1,
      manualTypeModifier: 1,
      priceModifierSlowDown: 0,
      manualTypeMultiplier: 0,
      manualTypeCounter: 0,
      dataInterest: 0,
      gameComponents: COMPONENTS,
      developments: DEVELOPMENTS
    };
  },
  methods: {
    addManualType(){
      if(this.manualTypeCounter % 2) {
        this.currentBytes += Math.round(this.globalModifier * this.manualTypeModifier + this.increasingRate * this.manualTypeMultiplier) * 2
      }
      this.manualTypeCounter += 1
    },
    calculateEarns(){
      let inc = 0
      for (const component of this.gameComponents) {
        inc += component.owned * component.baseValue
      }
      for (const dev of this.developments) {
        if(dev.owned) inc = dev.modifier(inc)
      }
      inc *= this.globalModifier
      inc += this.currentBytes * this.dataInterest
      return inc
    },
    updateGame() {
      this.increasingRate = this.calculateEarns()
      this.currentBytes += this.increasingRate
      this.saveGameData()
    },
    elapsed(timePassed, accuracy) {
      let i = Math.round(timePassed / accuracy);
      while(i){
        i-=1
        this.currentBytes += this.calculateEarns() * accuracy
      }
    },
    devUnlockable(dev) {
      return dev.cost <= this.currentBytes && (!dev.unlockable || dev.unlockable.bind(this)())
    },
    purchaseDev(dev){
      if (dev.owned) return
      if (dev.cost > this.currentBytes){
        this.$toasted.show(`需要 ${formatBytes(dev.cost)}，余额不足`);
        return
      }
      if (dev.unlockable && !dev.unlockable.bind(this)()) {
        this.$toasted.show(dev.unlockDescription);
        return
      }
      this.currentBytes -= dev.cost
      dev.initModifier.bind(this)()
      dev.owned = true
    },
    purchase(component, price, n){
      this.currentBytes -= price
      component.owned += n
    },
    saveGameData() {
      let quantities = {}
      for (const component of this.gameComponents)
        quantities[component.name] = component.owned
      for (const dev of this.developments)
        quantities[dev.name] = dev.owned

      const currentTime = new Date().getTime() / 1000
      const timeDiff = localStorage.time ? currentTime - (+localStorage.time) : 1
      if (timeDiff > 6) {
        this.elapsed(timeDiff, Math.max(Math.round(timeDiff / 10000), 1))
      }
      localStorage.currentBytes = this.currentBytes
      localStorage.components = JSON.stringify(quantities)
      localStorage.time = currentTime
    },
    loadGameData() {
      if(localStorage.currentBytes) this.currentBytes = +localStorage.currentBytes
      if(localStorage.components) {
        this.loading = true
        const components = JSON.parse(localStorage.components)
        for (let component of this.gameComponents) {
          if (components[component.name]) component.owned = components[component.name]
        }
        for (let dev of this.developments) {
          if (components[dev.name]) {
            dev.owned = components[dev.name]
            dev.initModifier.bind(this)()
          }
        }
        this.loading = false
      }

      if(localStorage.time) {
        const oldTime = +localStorage.time
        const currentTime = new Date().getTime() / 1000
        const elapsedTime = currentTime-oldTime
        localStorage.time = currentTime
        this.elapsed(elapsedTime, Math.max(Math.round(elapsedTime / 10000), 1))
      }

      this.increasingRate = this.calculateEarns()
    },
    restart() {
      for (let component of this.gameComponents) component.owned = 0
      for (let dev of this.developments) dev.owned = 0
      this.currentBytes = 0
      this.saveGameData()
      location.reload()
    },
    formatBytes
  },
  mounted() {
    this.loadGameData()
    setInterval(this.updateGame, 1000)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');
body {
  margin: 0;
}
#app {
  font-family: 'Ubuntu Mono', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
.manual-input {
  margin: 20px !important;
}
.byte-shop header {
  background-color: #28496c;
  color: #fefefe;
  font-size: 1.5em;
  padding: 15px;
  margin: 15px 0;
}
.development-grid {
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  max-width: 600px;
  width: 80%;
  margin: auto;
}
.development-grid button {
  margin: 5px !important;
}
.footer {
  padding: 20px 0 30px 0;
  color: #2c3e50;
}
</style>
