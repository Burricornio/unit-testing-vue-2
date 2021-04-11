<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <RandomNumber />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RandomNumber from '@/components/RandomNumber.vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    RandomNumber,
  },
})
export default class Home extends Vue {}
</script>
