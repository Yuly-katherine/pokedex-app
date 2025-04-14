import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import PokemonDetail from '@/components/PokemonDetail.vue'
import ElementPlus from 'element-plus'

const mockPokemon = {
  name: 'pikachu',
  weight: 60,
  height: 4,
  types: [
    { slot: 1, type: { name: 'electric' } }
  ],
  sprites: {
    front_default: 'https://example.com/pikachu.png'
  }
}

const mockSelected = {
  name: 'pikachu',
  url: '',
  favorite: true,
}

describe('PokemonDetail.vue', () => {
  it('Shows the correct Pokemon data received by props', async() => {
    const wrapper = mount(PokemonDetail, {
      props: {
        modalVisible: true,
        pokemonAttributes: mockPokemon,
        pokemonSelected: mockSelected,
      },
      global: {
        plugins: [ElementPlus],
      },
    })

    await flushPromises()
    const text = wrapper.text()
    expect(text).toContain('Name:')
    expect(text).toContain('pikachu')
    expect(text).toContain('Weight:')
    expect(text).toContain('60')
    expect(text).toContain('Height:')
    expect(text).toContain('4')
    expect(text).toContain('electric')

    const image = wrapper.find('img[alt="pokemon"]')
    expect(image.exists()).toBe(true)
    expect(image.attributes('src')).toBe(mockPokemon.sprites.front_default)
  })


  it('Emit selectFavorite when the favorite button is clicked.', async () => {
    const wrapper = mount(PokemonDetail, {
      props: {
        pokemonAttributes: mockPokemon,
        pokemonSelected: mockSelected,
        modalVisible: true,
      },
      global: {
        plugins: [ElementPlus],
      },
    })
    await flushPromises()
    const favButton = wrapper.find('.dialog-footer__fav')
    await favButton.trigger('click')

    expect(wrapper.emitted().selectFavorite).toBeTruthy()
  })


  it('Emit closeModal when the close button is clicked.', async () => {
    const wrapper = mount(PokemonDetail, {
      props: {
        pokemonAttributes: mockPokemon,
        pokemonSelected: mockSelected,
        modalVisible: true,
      },
      global: {
        plugins: [ElementPlus],
      },
    })
    wrapper.vm.$emit('closeModal')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().closeModal).toBeTruthy()
  })
})
