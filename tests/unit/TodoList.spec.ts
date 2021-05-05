import { Wrapper, mount } from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'

describe('TodoItem.vue', () => {
  let wrapper: Wrapper<TodoList>

  beforeEach(() => {
    wrapper = mount(TodoList)
  })

  // Deberá mostrar una lista de componentes TodoItem, llamada 'todos'. Vacía por defecto.
  it("should have a TodoItem array named 'todos' empty by default", () => {
    expect(wrapper.vm.$data.todos).toEqual([])
  })

  // Deberá tener un campo de entrada de texto.
  it('should have an input text', () => {
    expect(wrapper.find('input').exists()).toBeTruthy()
  })

  // Deberá tener un botón.
  it('should have a button', () => {
    expect(wrapper.find('button').exists()).toBeTruthy()
  })

  // Si la entrada de texto está vacía, el botón debe estar deshabilitado.
  it('should disable the button if input text is empty', () => {
    // Cuando el input text esté vacío.
    wrapper.vm.$data.newTodo = ''
    // Aseguramos que el botón está deshabilitado.
    expect(wrapper.find('button').attributes('disabled')).toBeTruthy()
  })

  // Clicar el botón añadirá un nuevo TodoItem a la lista, con el título adecuado.
  it('should add a new todo to the array and update the view when the button is clicked and the text input is not empty', async () => {
    wrapper.vm.$data.newTodo = 'new todo title test'
    await wrapper.vm.$nextTick()
    await wrapper.find('button').trigger('click')
    expect(
      wrapper.vm.$data.todos[wrapper.vm.$data.todos.length - 1].title
    ).toBe('new todo title test')
    expect(wrapper.find('.todo-item').text()).toMatch('new todo title test')
  })

  // Clicar el botón vaciará el campo de texto si la entrada de texto no está vacía.
  it('should empty the text input when the button is clicked and the text input is not empty', async () => {
    wrapper.vm.$data.newTodo = 'new todo title test'
    await wrapper.vm.$nextTick()
    await wrapper.find('button').trigger('click')
    expect(wrapper.vm.$data.newTodo).toBe('')
  })

  // Al clicar sobre el botón de completado de una tarea este debe deshabilitarse
  it('Should disabled completed button', async () => {
    wrapper.vm.$data.newTodo = 'new todo title test'
    await wrapper.vm.$nextTick()
    await wrapper.find('button').trigger('click')
    const newTodo = wrapper.find('.todo-item')
    const completeButton = newTodo.find('button')
    await completeButton.trigger('click')
    const todoItem = wrapper.vm.$data.todos[wrapper.vm.$data.todos.length - 1]
    expect(todoItem.isCompleted).toBeTruthy()
  })

  // Aumenta el número de todos indicado al añadir no mediante el watcher
  it('Should increase de number of todos indicated', async () => {
    wrapper.vm.$data.newTodo = 'new todo title test'
    await wrapper.vm.$nextTick()
    await wrapper.find('button').trigger('click')

    expect(wrapper.vm.$data.numberOfTodos).toBe(1)
  })
})
