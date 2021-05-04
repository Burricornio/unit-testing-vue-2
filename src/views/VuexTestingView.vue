<template>
  <div>
    <h1>VUEX</h1>
    <div>
      <input type="text" @input="actionInputIfTrue" />
      <button @click="actionClick()">Click</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapActions } from 'vuex'

@Component({
  computed: {
    ...mapActions(['actionClick']),
  },
})
export default class VuexTestingView extends Vue {
  actionInputIfTrue(event: Event): void {
    const inputValue = event.target.value
    if (inputValue === 'input') {
      this.$store.dispatch('actionInput', { inputValue })
    }
  }
}
</script>
