import { mount } from '@vue/test-utils'
import ButtonsFilter from '@/components/ButtonsFilter.vue'
import ElementPlus from 'element-plus'
import { describe, it, expect } from 'vitest'

describe('ButtonsFilter.vue', () => {
  it('emits "showAll" and "showFavorites" when buttons are clicked', async () => {
    const wrapper = mount(ButtonsFilter, {
      global: {
        plugins: [ElementPlus],
      },
    })

    const allButton = wrapper.find('.buttons-footer__showAll')
    const favButton = wrapper.find('.buttons-footer__showFav')

    await allButton.trigger('click')
    expect(wrapper.emitted().showAll).toBeTruthy()

    await favButton.trigger('click')
    expect(wrapper.emitted().showFavorites).toBeTruthy()
  })
})
