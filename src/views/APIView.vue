<template>
  <div>
    <h1>API</h1>
    <RandomUserList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RandomUserList from '@/components/RandomUserList.vue'

@Component({
  components: {
    RandomUserList,
  },
})
export default class VuexTestingView extends Vue {}
</script>
