<template>
  <div class="home">
    <Search @filterOptions = "filterOptions" 
    />
    <PokemonsList
    :pokemonsFiltered = "pokemonsFiltered" 
    @openModal = "openModal"
    />
    <RedirectButton 
    v-if= "showRedirect"
    />
    <ButtonsFilter
    @showAll = "filterOptions"
    @showFavorites = "showFavorites"
    />

    <!-- ----------- MODAL ----------- -->
    <PokemonDetail
    :pokemonData="pokemonData"
    :modalVisible = modalVisible
    @closeModal = "closeModal"
    />
  </div>
</template>

<script setup>
//----------- IMPORTS -----------
import Search from "../components/Search.vue";
import PokemonsList from "../components/PokemonsList.vue";
import ButtonsFilter from "../components/ButtonsFilter.vue";
import RedirectButton from "../components/RedirectButton.vue";
import pokebola from "../assets/scss/icons/pokeBola.svg?raw";
import PokemonDetail from "../components/PokemonDetail.vue"
import { ElLoading } from "element-plus";
import { ref } from "vue";
import { onBeforeMount } from 'vue'
import { usePokemonStore } from '../store/modules/pokemons'
import { storeToRefs } from 'pinia'

// ----------- STORE SETUP -----------
const store = usePokemonStore()
const { pokemonList } = storeToRefs(store)
const pokemonsFiltered = ref([...pokemonList.value]);
const showRedirect = ref(false)
const modalVisible = ref(false)
const pokemonData = ref({})


// ----------- METHODS -----------
const openModal= async (name) => {
  pokemonData.value = await store.getPokemonByName(name)
  modalVisible.value = true
}

const closeModal= async () => {
  modalVisible.value = false
}

const showFavorites = () => {
  pokemonsFiltered.value = pokemonList.value.filter(pokemon =>
  pokemon.favorite === true)
}

const filterOptions = (name) => {
  if(name) {
    const normalized = name.toLowerCase()
    pokemonsFiltered.value = pokemonList.value.filter(pokemon =>
    pokemon.name.toLowerCase().includes(normalized))
  } else {
    pokemonsFiltered.value = [...pokemonList.value]
  }
  showRedirect.value = pokemonsFiltered.value.length === 0
}

// ----------- LIFECYCLE -----------
onBeforeMount(async () => {
  const loading = ElLoading.service({
    fullscreen: true,
    lock: true,
    svg: pokebola,
  });
  await store.getPokemonList()
  pokemonsFiltered.value = [...pokemonList.value];
  setTimeout(() => {
    loading.close()
  }, 2000)
})

</script>

<style  lang="scss" scoped>
.home{
  width: 60%;
  margin: 30px auto;
  text-align: center;
}

</style>