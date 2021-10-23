<template>
  <div class="byte-shop-list">
    <sui-card v-for="component in gameComponents" :key="component.name">
      <sui-card-content>
        <sui-card-header style="float:left">{{component.name}}</sui-card-header>
        <sui-card-description style="float:left">
          <sui-card-meta>拥有 {{component.owned}}。贡献 {{(component.baseValue*component.owned*globalModifier/increasingRate*100).toFixed(2)}}% 的生产量</sui-card-meta>
          <p>{{component.description}}</p>
        </sui-card-description>
        <sui-button-group vertical labeled icons style="float: right">
          <sui-button
              compact
              icon="shopping cart"
              label-position="left"
              v-for="n in [1, 10, Math.max(getMaxPurchaseCnt(component), 1)]"
              :key="n"
              :positive="getPurchasePrice(component, n, false) <= currentBytes"
              :content="getPurchasePrice(component, n, true) + ' for ' + n"
              :disabled="getPurchasePrice(component, n, false) > currentBytes"
              @click="purchase(component, n)"
          />
        </sui-button-group>
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
import {formatBytes} from "@/helper";

export default {
  name: "ByteStore",
  props: {
    gameComponents: Array,
    currentBytes: Number,
    priceModifierSlowDown: Number,
    globalModifier: Number,
    increasingRate: Number,
  },
  methods: {
    getAdjustedCostModifier(component) {
      return (component.costModifier - 1) * (1-this.priceModifierSlowDown) + 1
    },
    getPurchasePrice(component, n, asString) {
      let totalPrice = 0
      let currentCost = component.cost * Math.pow(this.getAdjustedCostModifier(component), component.owned)
      while(n){
        n--
        totalPrice += currentCost
        currentCost *= this.getAdjustedCostModifier(component)
      }
      if (!asString) return Math.round(totalPrice)
      return formatBytes(totalPrice)
    },
    getMaxPurchaseCnt(component) {
      let totalPrice = 0
      let currentCost = component.cost * Math.pow(this.getAdjustedCostModifier(component), component.owned)
      let n = 0
      while(totalPrice <= this.currentBytes){
        n += 1
        totalPrice += currentCost
        currentCost *= this.getAdjustedCostModifier(component)
      }
      return n-1
    },
    purchase(component, n){
      this.$emit('purchase', component, this.getPurchasePrice(component, n, false), n)
    },
  }
}
</script>

<style scoped>

.byte-shop-list {
  display: flex;
  justify-content: center;
  text-align: left;
  flex-flow: row wrap;
}
.byte-shop-list .card {
  max-width: 600px !important;
  width: 80% !important;
  margin: 20px !important;
}
</style>