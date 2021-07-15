import { mount } from '@vue/test-utils'
import LoginCard from '@/components/LoginCard.vue'

describe('LoginCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LoginCard)
    expect(wrapper.vm).toBeTruthy()
  })
})
