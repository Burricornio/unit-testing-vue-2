<template>
  <div>
    <button v-show="loggedIn">Logout</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AppHeader extends Vue {
  loggedIn = false
}
</script>

<style scoped></style>
