import { shallowMount } from '@vue/test-utils'
import PageNotFound from '../../../views/PageNotFound.vue'

describe('PageNotFound', () => {
  it('renders the correct text', () => {
    const wrapper = shallowMount(PageNotFound, {
    })
    expect(wrapper.text()).toContain('Oops!!, You are lost')
  })
})