import axios, { AxiosInstance } from 'axios'
import { provideVuex, consume } from 'provide-consume-decorator'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { ITodosStore, ITodo } from './types/types'

@Module({
  name: 'todos',
  namespaced: true,
  // Sin esto a mi me funciona
  stateFactory: true,
})
@provideVuex({
  axios: () => axios.create(),
})
export default class extends VuexModule implements ITodosStore {
  @consume('axios') api!: AxiosInstance

  /**
   * Todos state
   */
  todos: ITodo[] = []

  /**
   * Todos mutation
   * @param todos: ITodo[]
   */
  @Mutation
  setTodos(todos: ITodo[]): void {
    this.todos = todos
  }

  /**
   * pushTodo
   * @param todo: ITodo
   */
  @Mutation
  pushTodo(todo: ITodo): void {
    this.todos.push(todo)
  }

  /**
   * getTodos
   * @returns Promise<ITodo[]>
   */
  @Action
  async getTodos(): Promise<ITodo[]> {
    return this.api?.get('/todos').then((res) => {
      this.setTodos(res.data)
      return res.data
    })
  }

  /**
   * createTodo
   */
  @Action
  async createTodo(todo: ITodo): Promise<ITodo> {
    return this.api?.post('/todos', todo).then((res) => {
      return res.data
    })
  }

  /**
   * deleteTodo
   */
  // @Action
  @Action
  async deleteTodo(todo: ITodo): Promise<unknown> {
    return this.api?.delete(`/todos/${todo.id}`)
  }

  /**
   * setTodoComplete
   */
  @Action
  async setTodoComplete(opts: { id: string; data: unknown }): Promise<unknown> {
    return this.api?.put(`/todos/${opts.id}`, { ...opts })
  }
}
