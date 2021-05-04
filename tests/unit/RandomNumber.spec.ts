import { shallowMount } from '@vue/test-utils'
import RandomNumber from '@/components/RandomNumber.vue'

describe('RandomNumnber suite', () => {
  it('By default, random number data value should be 0', () => {
    const wrapper = shallowMount(RandomNumber)

    expect(wrapper.html()).toContain('<span>0</span')
  })

  it('If button is clicked, random number should be between 0 and 10', async () => {
    const wrapper = shallowMount(RandomNumber)

    await wrapper.find('button').trigger('click')
    const randomNumber = Number(wrapper.find('span').element.textContent)

    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })

  it('If button is clicked, random number should be between 200 and 300', async () => {
    const wrapper = shallowMount(RandomNumber, {
      propsData: {
        min: 200,
        max: 300,
      },
    })

    await wrapper.find('button').trigger('click')
    const randomNumber = Number(wrapper.find('span').element.textContent)

    expect(randomNumber).toBeGreaterThanOrEqual(200)
    expect(randomNumber).toBeLessThanOrEqual(300)
  })
})
