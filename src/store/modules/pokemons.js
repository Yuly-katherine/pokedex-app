import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemonList: [],
  }),
  actions: {
    async getPokemonList() {
      try {
        const url = 'https://pokeapi.co/api/v2/pokemon'
        const response = await fetch(url)
        const json = await response.json()
        this.pokemonList = json.results.map(pokemon => ({
          ...pokemon,
          favorite: false
        }))
        return this.pokemonList
      } catch (err) {
        console.error('Error when obtaining pokemons', err)
      }
    },
    async getPokemonByName(name) {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`
        const response = await fetch(url)
        const pokemon = await response.json()
        return pokemon
      } catch (err) {
        console.error(`Error when obtaining pokemon "${name}":`, err)
      }
    },
    setFavorite(name, value) {
      const pokemon = this.pokemonList.find(el => el.name === name)
      if (pokemon) {
        pokemon.favorite = value
      }
    }
  }
})

export default usePokemonStore;