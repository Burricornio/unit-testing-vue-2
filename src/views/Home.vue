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
    <!-- <p>MessageDisplay component example (testing API calls)</p>
    <p>json-server --watch db.json</p>
    <MessageDisplay />
    <br />
    <hr />
    <p>MessageContainer component example (testing stubs)</p>
    <MessageContainer />
    <br />
    <hr /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RandomNumber from '@/components/RandomNumber.vue'
import LoginForm from '@/components/LoginForm.vue'
import MessageDisplay from '@/components/MessageDisplay.vue'
import MessageContainer from '@/components/MessageContainer.vue'

@Component({
  components: {
    RandomNumber,
    LoginForm,
    MessageDisplay,
    MessageContainer,
  },
})
export default class Home extends Vue {}
</script>
