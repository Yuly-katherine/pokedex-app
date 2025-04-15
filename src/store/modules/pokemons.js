import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemonList: [],
  }),
  actions: {
    async getPokemonList() {

      if (this.pokemonList.length) {
        return this.pokemonList
      }
    
      try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const { results } = await response.json()
        this.pokemonList = results.map(pokemon => ({
        ...pokemon,
          favorite: false
        }))

        return this.pokemonList
      } catch (error) {
        console.error('Error fetching Pokémon list:', error)
        return []
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