<template>
  <p v-if="error" data-testid="message-error">{{ error }}</p>
  <p v-else data-testid="message">{{ message.text }}</p>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getMessage } from '@/services/axios'

@Component
export default class MessageDisplay extends Vue {
  message = {}
  error: string | null = null

  async created(): Promise<void> {
    try {
      this.message = await getMessage()
    } catch (err) {
      this.error = 'Oops! Something went wrong.'
    }
  }
}
</script>
