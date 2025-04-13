<template>
  <div class="pokemons-list">
    <section class="container-list" v-if="props.pokemonsFiltered.length">
      <ul class="container-list__main">
        <li
          class="container-list__main-item"
          @click="emit('openModal', pokemon.name)"
          v-for="pokemon in props.pokemonsFiltered"
          :key="pokemon.name"
        >
          <div class="item">{{ pokemon.name }}</div>
          <img class="item" :src="pokemon.favorite ? favorite : notFavorite" />
        </li>
      </ul>
    </section>
    <section class="container-list" v-else>
      <span class="container-list__title">Uh-oh!</span>
      <p class="container-list__text">You look lost on your journey!</p>
    </section>
  </div>
</template>
  
  <script setup>
// ----------- IMPORTS-----------
import favorite from "@/assets/scss/icons/favorite.svg";
import notFavorite from "@/assets/scss/icons/notFavorite.svg";

// ----------- DEFINE PROPS -----------
const props = defineProps({
  pokemonsFiltered: {
    type: Array,
  },
});

// ----------- DEFINE EMITS -----------
const emit = defineEmits(["openModal"]);
</script>
  
  <style  lang="scss" scoped>
.container-list {
  margin: 50px 0;
  &__title {
    color: $color-tittle;
    font-weight: 700;
    font-size: 26px;
  }
  &__main-text {
    margin: 20px;
    line-height: 1.6;
  }
  &__main {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  &__main-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    background-color: $color-white;
    border-radius: 10px;
    margin: 20px;
    color: $color-black;
    cursor: pointer;
    &:hover {
      box-shadow: $box-shadow-hoover;
    }
  }
}

.item {
  padding: 30px;
  font-weight: 600;
}
</style>