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
    <p>MessageDisplay component example (testing API calls)</p>
    <p>json-server --watch db.json</p>
    <MessageDisplay />
    <br />
    <hr />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RandomNumber from '@/components/RandomNumber.vue'
import LoginForm from '@/components/LoginForm.vue'
import MessageDisplay from '@/components/MessageDisplay.vue'

@Component({
  components: {
    RandomNumber,
    LoginForm,
    MessageDisplay,
  },
})
export default class Home extends Vue {}
</script>
