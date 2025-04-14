import { mount } from '@vue/test-utils'
import PokemonsList from '@/components/PokemonsList.vue'
import { describe, it, expect, vi } from 'vitest'

describe('PokemonsList.vue', () => {
  const mockPokemons = [
    { name: 'pikachu', url:'', favorite: false },
    { name: 'bulbasaur', url:'' , favorite: true }
  ]

  it('correctly renders the pokemonsFiltered passed as props', () => {
    const wrapper = mount(PokemonsList, {
      props: {
        pokemonsFiltered: mockPokemons
      }
    })

    const items = wrapper.findAll('li')
    expect(items.length).toBe(2)
    expect(items[0].text()).toContain('pikachu')
    expect(items[1].text()).toContain('bulbasaur')
  })

  it('emits “openModal” when clicking on a Pokemon', async () => {
    const wrapper = mount(PokemonsList, {
      props: {
        pokemonsFiltered: mockPokemons
      }
    })

    await wrapper.findAll('li')[0].trigger('click')
    expect(wrapper.emitted().openModal).toBeTruthy()
  })
})