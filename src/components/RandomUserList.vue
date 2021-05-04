<template>
  <div>
    <div v-for="(person, key) in people" :key="key">
      <div class="person">
        <div class="person__header">
          <img
            v-bind:src="person.picture.large"
            v-bind:alt="person"
            class="rounded img-thumbnail"
          />
          <div class="person__name">
            {{ person.name.first }} {{ person.name.last }}
          </div>
        </div>
        <div class="person__email">
          <a v-bind:href="'mailto:' + person.email">{{ person.email }}</a>
        </div>
        <div class="person__address">
          <address>
            {{ person.location.street.number }}
            {{ person.location.city }}
            {{ person.location.state }}
          </address>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class RandomUserList extends Vue {
  people = []

  async created(): void {
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=6`)
      this.people = response.data.results
      console.log(response.data)
      // eslint-disable-next-line no-empty
    } catch (error) {}
  }
}
</script>

<style scoped></style>
