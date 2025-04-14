import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Search from '@/components/Search.vue'
import ElementPlus from 'element-plus'

describe('Search.vue', () => {
  it('emits "filterOptions" event with input value when typing', async () => {
    const wrapper = mount(Search, {
        global: {
          plugins: [ElementPlus]
        }
      })

    const input = wrapper.find('input')
    await input.setValue('pikachu')

    expect(wrapper.emitted().filterOptions).toBeTruthy()
  })
})