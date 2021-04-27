import { shallowMount, Wrapper } from '@vue/test-utils'
import TodoItem from '@/components/TodoItem.vue'

describe('TodoItem suite', () => {
  let id: number
  let title: string
  let isCompleted: boolean
  let onClick: () => void
  let wrapper: Wrapper<TodoItem>

  // Montamos el componente con las props necesarias antes de cada test
  beforeEach(() => {
    id = 1
    title = 'Test title'
    isCompleted = false
    onClick = () => false

    wrapper = shallowMount(TodoItem, {
      propsData: {
        id,
        title,
        isCompleted,
        onClick,
      },
    })
  })

  // Nos aseguramos de quew nadie ha modificado el componente sin modificsar los tests
  it('Should match snapshots', () => {
    expect(wrapper).toMatchSnapshot()
  })

  // Tiene un prop llamado 'id' que lo identifica.
  it("should have a prop named 'id' that idenfifies the component", () => {
    // Nos aseguramos que el prop 'id' es el mismo que hemos pasado al crear el componente.
    expect(wrapper.props('id')).toBe(id)
  })

  // Tiene un prop llamado 'title' que siempre se renderiza correctamente.
  it("should have a prop named 'title' that always renders", () => {
    // Nos aseguramos que el prop 'title' es el mismo que hemos pasado al crear el componente.
    expect(wrapper.props('title')).toBe(title)
    // Nos aseguramos que el título se está renderizando.
    expect(wrapper.text()).toMatch(title)
  })

  // Si isCompleted es 'false', el texto del botón es 'complete'.
  it('Should change button text to "complete" when isCompleted es "false"', async () => {
    // Cuando isCompleted es false
    await wrapper.setProps({ isCompleted: false })

    // Nos aseguramos de que el texto del botón cambia a 'complete'.
    const button = wrapper.find('button')
    expect(button.text()).toBe('complete')
  })

  // Si 'isCompleted' es 'true', el texto del botón es 'completed'.
  it('Should change button text to "completed" when isCompleted es true', async () => {
    // Cuando isCompleted es true
    await wrapper.setProps({ isCompleted: true })

    // Nos aseguramos de que el texto del botón cambia a 'complete'.
    const button = wrapper.find('button')
    expect(button.text()).toBe('completed')
  })

  // Si 'isCompleted' es 'true', el botón debería deshabilitarse.
  it('Should disable button when isCompleted is true', async () => {
    // Cuando 'isCompleted' es verdadero.
    await wrapper.setProps({ isCompleted: true })

    // Nos aseguramos de que el botón está deshabilitado
    const button = wrapper.find('button')
    expect(button.attributes('disabled')).toMatch('disabled')
  })
})
