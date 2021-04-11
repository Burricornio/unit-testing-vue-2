<template>
  <div class="home">
    <h1>Examples</h1>
    <hr />
    <p>RandomNumber component (testing props and user interaction)</p>
    <RandomNumber />
    <br />
    <hr />
    <p>LoginForm component example (testing emitted events)</p>
    <LoginForm />
    <br />
    <hr />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RandomNumber from '@/components/RandomNumber.vue'
import LoginForm from '@/components/LoginForm.vue'

@Component({
  components: {
    RandomNumber,
    LoginForm,
  },
})
export default class Home extends Vue {}
</script>
