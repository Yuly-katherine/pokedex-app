<template>
  <div class="main-content">
    <Search @filterOptions="filterPokemons" />

    <PokemonsList :pokemonsFiltered="pokemonsFiltered" @openModal="openModal" />

    <RedirectButton v-if="showRedirect" />

    <ButtonsFilter
      v-if="!showRedirect"
      @showAll="showAll"
      @showFavorites="showFavorites"
    />

    <PokemonDetail
      :pokemonAttributes="pokemonAttributes"
      :pokemonSelected="pokemonSelected"
      :modalVisible="modalVisible"
      @closeModal="closeModal"
      @selectFavorite="selectFavorite"
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
import PokemonDetail from "../components/PokemonDetail.vue";
import { ElLoading } from "element-plus";
import { ref } from "vue";
import { onBeforeMount } from "vue";
import { usePokemonStore } from "../store/modules/pokemons";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

// ----------- STORE SETUP -----------
const store = usePokemonStore();
const { pokemonList } = storeToRefs(store);
const pokemonsFiltered = ref([...pokemonList.value]);
const showRedirect = ref(false);
const modalVisible = ref(false);
const pokemonAttributes = ref({});
const pokemonSelected = ref({});

// ----------- ROUTER -----------
const router = useRouter();

// ----------- METHODS -----------
const openModal = async (pokemon) => {
  pokemonAttributes.value = await store.getPokemonByName(pokemon.name);
  pokemonSelected.value = { ...pokemon };
  router.push({ name: "Pokemons", params: { name: pokemon.name } });
  modalVisible.value = true;
};

const closeModal = async () => {
  router.push({ name: "Pokemons" });
  modalVisible.value = false;
};

const showFavorites = () => {
  pokemonsFiltered.value = pokemonList.value.filter(
    (pokemon) => pokemon.favorite === true
  );
};

const selectFavorite = async (name, value) => {
  store.setFavorite(name, value);
  pokemonSelected.value.favorite = value;
};

const filterPokemons = (name) => {
  if (name) {
    const normalized = name.toLowerCase();
    pokemonsFiltered.value = pokemonList.value.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(normalized)
    );
  } else {
    showAll();
  }
  showRedirect.value = pokemonsFiltered.value.length === 0;
};

const showAll = () => {
  pokemonsFiltered.value = [...pokemonList.value];
};

// ----------- LIFECYCLE -----------
onBeforeMount(async () => {
  const loading = ElLoading.service({
    fullscreen: true,
    lock: true,
    svg: pokebola,
  });
  await store.getPokemonList();
  pokemonsFiltered.value = [...pokemonList.value];
  setTimeout(() => {
    loading.close();
  }, 2000);
});
</script>

<style  lang="scss" scoped>
.main-content {
  width: 100%;
}
</style>