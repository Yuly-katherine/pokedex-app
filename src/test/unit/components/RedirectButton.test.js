import { mount } from '@vue/test-utils'
import RedirectButton from '@/components/RedirectButton.vue'
import { describe, it, expect, vi } from 'vitest'


  //-----DEFINE MOCKS-----
let mockRouteName = 'Home'
const mockPush = vi.fn()
vi.mock('vue-router', () => ({
   //----Simulate being on the Home route-----  
  useRoute: () => ({
    name: mockRouteName,
  }),

  //-----Simulates route redirection-----
  useRouter: () => ({
    push: mockPush,
  }),
}))

describe('RedirectButton.vue', () => {

    beforeEach(() => {
        mockPush.mockClear() 
    })

    it('shows the correct text if route.name === "Home"', () => {
        mockRouteName = 'Home'
        const wrapper = mount(RedirectButton)
        expect(wrapper.text()).toContain('Get Started')
    })

    it('shows the correct text if route.name !== "Home"', () => {
        mockRouteName = 'Pokemons'
        const wrapper = mount(RedirectButton)
        expect(wrapper.text()).toContain('Go Back Home')
    })

    it('redirect to the “Pokemons” path when in “Home"', async () => {
        mockRouteName = 'Home'
        const wrapper = mount(RedirectButton)
        await wrapper.find('.redirect-button').trigger('click')
        expect(mockPush).toHaveBeenCalledWith({ name: 'Pokemons' })
    })

    it('redirects to the “Home” path when we are NOT in “Home', async () => {
        mockRouteName = 'Pokemons'
        const wrapper = mount(RedirectButton)
        await wrapper.find('.redirect-button').trigger('click')
        expect(mockPush).toHaveBeenCalledWith({ name: 'Home' })
    })
})
