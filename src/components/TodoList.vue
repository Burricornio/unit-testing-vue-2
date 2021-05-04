<template>
  <div class="todo-list">
    <p>Numéro de tareas = {{ numberOfTodos }}</p>
    <input type="text" placeholder="New task..." v-model="newTodo" />
    <button @click="addNewTodo" :disabled="!isButtonEnabled">
      Añadir tarea
    </button>
    <TodoItem
      v-for="(todo, index) in todos"
      :id="index"
      :key="index"
      :title="todo.title"
      :isCompleted="todo.isCompleted"
      :onClick="setTodoCompleted"
    >
    </TodoItem>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import TodoItem from '@/components/TodoItem.vue'

interface ITodo {
  title: string
  isCompleted: boolean
}

@Component({
  components: {
    TodoItem,
  },
})
export default class TodoList extends Vue {
  newTodo = ''

  numberOfTodos = 0

  todos: ITodo[] = []

  @Watch('todos')
  changeNumberOfTodos(): void {
    this.numberOfTodos += 1
  }

  get isButtonEnabled(): boolean {
    return this.newTodo !== ''
  }

  addNewTodo(): void {
    this.todos.push({ title: this.newTodo, isCompleted: false })
    this.newTodo = ''
  }

  setTodoCompleted(index: number): void {
    this.todos[index].isCompleted = true
  }
}
</script>

<style scoped></style>
