<template>
  <div>
    <button @click="getRandomNumber">Generate random number</button>
    <span>{{ randomNumber }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class RandomNumber extends Vue {
  @Prop({ type: Number, default: 1 }) min!: number
  @Prop({ type: Number, default: 10 }) max!: number

  randomNumber = 0

  getRandomNumber(): void {
    this.randomNumber =
      Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
  }
}
</script>
