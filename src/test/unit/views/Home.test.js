import { mount } from '@vue/test-utils'
import Home from '../../../views/Home.vue'

describe('Home', () => {
  it('renders the correct text', () => {
    const wrapper = mount(Home, {
        global: {
            stubs: {
                RedirectButton: true
            }
        }
    })
    expect(wrapper.text()).toContain('Welcome to Pokédex')
  })
})