import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import { getModule } from 'vuex-module-decorators'
import TodosStore from '../todos'
import { ITodo } from '../types/types'
import { provideVuex } from 'provide-consume-decorator'
import apiMock from '../todos.api.mock'

const Vue = createLocalVue()
Vue.use(Vuex)

/**
 * Factory function returns a new store instance
 */
const factory = () => {
  @provideVuex({
    axios: () => apiMock,
  })
  class TodosStoreMock extends TodosStore {}

  const store = new Vuex.Store({
    modules: {
      todos: TodosStoreMock,
    },
  })
  return getModule(TodosStoreMock, store)
}

/**
 * The test case
 */
describe('TodosStore suite', () => {
  it('has to get a store instance', async (done) => {
    const service = factory()
    expect(service).toBeInstanceOf(Object)
    done()
  })

  it('setTodos', () => {
    const service = factory()
    const todo: ITodo = {
      id: '2',
      text: 'test',
      timeCreated: new Date(),
      isComplete: false,
    }
    service.pushTodo(todo)
    expect(service.todos[0]).toBe(todo)
  })

  it('createTodo/getTodos', async (done) => {
    const service = factory()
    await service.createTodo({
      id: '3',
      text: 'test1',
      timeCreated: new Date(),
    })
    const todos = await service.getTodos()
    const todo = todos.find((e: ITodo) => e.text === 'test1')
    expect(todo).toBeInstanceOf(Object)
    expect(todo?.text).toEqual('test1')
    // getTodos should also save todos locally
    const localTodo = service.todos.find((e) => e.text === 'test1')
    expect(localTodo).toBeInstanceOf(Object)
    expect(localTodo?.text).toEqual('test1')
    done()
  })
})
