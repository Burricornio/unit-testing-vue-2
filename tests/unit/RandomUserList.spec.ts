import { shallowMount, Wrapper } from '@vue/test-utils'
import RandomUserList from '@/components/RandomUserList.vue'
import flushPromises from 'flush-promises'

jest.mock('axios', () => ({
  get: () =>
    Promise.resolve({
      data: {
        results: [
          {
            picture: {
              large: '',
            },
            name: {
              first: '',
            },
            location: {
              street: {
                number: '',
              },
            },
          },
        ],
      },
    }),
}))

describe('RandomUserList suite', () => {
  let wrapper: Wrapper<RandomUserList>

  beforeEach(() => {
    wrapper = shallowMount(RandomUserList)
  })
  // Nos aseguramos de quew nadie ha modificado el componente sin modificsar los tests
  it('Should match snapshots', () => {
    expect(wrapper).toMatchSnapshot()
  })

  // Hacemos un mock de la petición
  it('mocking the axios call to get posts should work', async () => {
    await flushPromises()
    expect(wrapper.vm.$data.people.length).toBe(1)
  })
})
