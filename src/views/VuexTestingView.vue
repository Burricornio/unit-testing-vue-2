<template>
  <div>
    <h1>VUEX</h1>
    <div>
      <button @click="actionClick()">Click</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapActions } from 'vuex'

@Component({
  methods: {
    ...mapActions(['actionClick']),
  },
})
export default class VuexTestingView extends Vue {}
</script>
