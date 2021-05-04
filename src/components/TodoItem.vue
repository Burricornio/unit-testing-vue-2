<template>
  <div class="todo-item">
    <span :class="{ completed: isCompleted }">{{ title }}</span>
    <button @click="onClick(id)" :disabled="isCompleted">
      {{ buttonText }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TodoItem extends Vue {
  @Prop({
    type: Number,
    required: true,
  })
  id!: number

  @Prop({
    type: String,
    required: true,
  })
  title!: string

  @Prop({
    type: Boolean,
    required: true,
  })
  isCompleted!: boolean

  @Prop({
    type: Function,
    required: true,
  })
  onClick!: unknown

  get buttonText(): string {
    return this.isCompleted ? 'completed' : 'complete'
  }
}
</script>
