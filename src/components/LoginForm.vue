<template>
  <form @submit.prevent="onSubmit">
    <input data-testid="name-input" type="text" v-model="name" />
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LoginForm extends Vue {
  name = ''

  onSubmit(): void {
    this.$emit('formSubmitted', { name: this.name })
  }
}
</script>
