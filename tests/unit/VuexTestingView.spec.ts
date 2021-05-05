import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VuexTestingView from '@/views/VuexTestingView.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('VuexTestingView suite', () => {
  let actions: any
  let store: any

  beforeEach(() => {
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  // Debemos testar que se ejecuta la acción al pulsar el botón.
  it('calls store action "actionClick" when button is clicked', () => {
    const wrapper = shallowMount(VuexTestingView, { store, localVue })
    wrapper.find('button').trigger('click')
    expect(actions.actionClick).toHaveBeenCalled()
  })

})
