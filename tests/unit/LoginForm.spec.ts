import LoginForm from '@/components/LoginForm.vue'
import { shallowMount } from '@vue/test-utils'

describe('LoginForm suite', () => {
  it('emits an event with a user data payload', () => {
    const wrapper = shallowMount(LoginForm)

    // 1. Find text input
    // Se puede utilizar un atributo en vez de un selector por si en el futuro se cambia el nombre de la clase
    const input = wrapper.find('input[data-testid="name-input"]')

    // 2. Set value for text input
    input.setValue('Chiquito de la calzada')

    // 3. Simulate form submission
    // Podría simularse el evento haciendo click en el botón, pero en este caso han preferido
    // abstraerlo por si en el futuro el evento se desencadena al pulsar, una tecla por ejemplo
    wrapper.trigger('submit')

    // 4. Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)

    // 5. Assert payload is correct
    const expectedPayload = { name: 'Chiquito de la calzada' }
    expect((wrapper as any).emitted('formSubmitted')[0][0]).toMatchObject(
      expectedPayload
    )
  })
})
