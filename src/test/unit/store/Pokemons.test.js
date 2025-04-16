import { setActivePinia, createPinia } from 'pinia'
import { usePokemonStore } from '@/store/modules/pokemons'
import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('Pokemon Store', () => {
  
  let store;
  beforeEach(() => {
    setActivePinia(createPinia())
    store = usePokemonStore()
  })
 
  it('getPokemonList correctly updates the store', async () => {
    const mockResponse = {
      results: [{ name: 'pikachu', url: '' }]
    }
      
    //-----vi.fn creates a fetch mock function (mock)-----
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    )  

    await store.getPokemonList()
    expect(store.pokemonList).toEqual([
      { name: 'pikachu', url: '', favorite: false }
    ])
    expect(fetch).toHaveBeenCalledTimes(1)

    afterEach(() => {
      vi.restoreAllMocks()
    })
  })
  it('getPokemonByName returns correct data', async () => {
    const mockResponse = {
      name: 'pikachu',
      height: 6,
      weight: 85, 
      types: [{ slot: 0, type: { name: 'fire' } }] 
    }
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    )  

    const pokemonAttributes = await store.getPokemonByName('pikachu')
    expect(pokemonAttributes).toStrictEqual(mockResponse)
    expect(fetch).toHaveBeenCalledTimes(1)

    afterEach(() => {
      vi.restoreAllMocks()
    })
  })
  it('setFavorite correctly updates the status', () => {
    const store = usePokemonStore()
    store.pokemonList = [{ name: 'pikachu', url: '', favorite: false }]
    store.setFavorite('pikachu', true)
    expect(store.pokemonList[0].favorite).toBe(true)
  })
})

