import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import PokemonsView from '@/views/PokemonsView.vue'
import { createTestingPinia } from '@pinia/testing'
import ElementPlus from 'element-plus'
import { setActivePinia, createPinia } from 'pinia'
import { usePokemonStore } from "../../../store/modules/pokemons";

vi.mock('vue-router', () => ({
  useRoute: () => ({ name: 'Pokemons' }),
  useRouter: () => ({ push: vi.fn() })
}))

  //-----DEFINE MOCKS-----
const mockPokemons = [
  { name: 'pikachu', url: '', favorite: true },
  { name: 'bulbasaur', url: '', favorite: false }
]

describe('PokemonsView.vue', async() => {

  let wrapper

  beforeEach(async () => {
    const pinia = createTestingPinia({ stubActions: false })
    setActivePinia(pinia)

    const store = usePokemonStore()
    store.pokemonList = mockPokemons

    wrapper = mount(PokemonsView, {
      global: {
        plugins: [pinia, ElementPlus]
      }
    })

    wrapper.vm.pokemonsFiltered = [...mockPokemons]
    await flushPromises()
  })

  
  it('correctly renders the pokemon list', () => {
    expect(wrapper.text()).toContain('pikachu')
    expect(wrapper.text()).toContain('bulbasaur')
  })

  it('correctly filter by name', async () => {
    wrapper.vm.filterPokemons('pikachu')
    await flushPromises()

    expect(wrapper.text()).toContain('pikachu')
    expect(wrapper.text()).not.toContain('bulbasaur')
  })

  it('shows only favorites when clicking on “showFavorites”', async () => {
    const buttonsFilter = wrapper.findComponent({ name: 'ButtonsFilter' })
    await buttonsFilter.vm.$emit('showFavorites')
    await flushPromises()

    const text = wrapper.text()
    expect(text).toContain('pikachu')
    expect(text).not.toContain('bulbasaur')
  })

  it('opens the modal when selecting a Pokemon', async () => {

  const store = usePokemonStore()
  store.getPokemonByName = vi.fn(() => Promise.resolve({
    name: 'pikachu',
    height: 4,
    weight: 60,
    types: [],
    sprites: { front_default: 'https://example.com/pikachu.png' }
  }))

  const listComponent = wrapper.findComponent({ name: 'PokemonsList' })
  await listComponent.vm.$emit('openModal', mockPokemons[0])

  await flushPromises()
  const detail = wrapper.findComponent({ name: 'PokemonDetail' })

  expect(detail.exists()).toBe(true)
  expect(detail.props('modalVisible')).toBe(true)
  })

  it('shows message when pokemonsFiltered is empty', async()=> {

    const pinia = createTestingPinia({
      stubActions: false,
      initialState: {
        pokemons: {
          pokemonList: []
        }
      },
      createSpy: vi.fn
    })

    const customWrapper = mount(PokemonsView, {
      global: {
        plugins: [pinia, ElementPlus]
      }
    })

    customWrapper.vm.pokemonsFiltered = []
    await flushPromises()

    expect(customWrapper.text()).toContain('You look lost on your journey!')
  })
})