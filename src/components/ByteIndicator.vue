<template>
  <div class="indicator">
    <p style="font-size: 1.5em">Your bytes in storage:</p>
    <p style="margin: 30px">
      <animated-number
          class="byte-counter"
          :value="currentBytesForDisplay"
          :formatValue="currentBytesFormat"
          :duration="1000"
      /></p>
    <p>
      <font-awesome-icon class="byte-rate-indicator" :icon="['fas', 'caret-up']" v-if="increasingRate!==0" />
      <animated-number
          class="byte-rate"
          :value="currentRateForDisplay"
          :formatValue="currentRateFormat"
          :duration="1000"
      /></p>
  </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
import {getValueAndUnit} from "@/helper";
export default {
  name: 'ByteIndicator',
  components: {
    AnimatedNumber
  },
  props: {
    currentBytes: BigInt,
    increasingRate: BigInt,
  },
  computed: {
    currentBytesForDisplay() {
      // there is a bug in AnimatedNumber (and anime.js) that prevents
      // large numbers (>=2^21) from being displayed properly
      // this workaround is to separate the number and the unit part
      return getValueAndUnit(this.currentBytes)[0]
    },
    currentRateForDisplay() {
      return getValueAndUnit(this.increasingRate)[0]
    }
  },
  methods: {
    currentBytesFormat (value) { return `${value.toFixed(2)} ${getValueAndUnit(this.currentBytes)[1]}` },
    currentRateFormat (value) { return `${value.toFixed(2)} ${getValueAndUnit(this.increasingRate)[1]}/s` },
  }
}
</script>

<style scoped>
.byte-counter {
  font-size: 3.5em;
  font-weight: bold;
}
.byte-rate {
  font-size: 1.5em;
}
.byte-rate-indicator {
  color: green;
  margin-right: 2px;
}
.indicator {
  font-family: 'Ubuntu Mono', 'Fira Code', 'consolas', monospace;
}
</style>
