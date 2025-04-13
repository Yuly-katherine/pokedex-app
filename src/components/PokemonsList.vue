<template>
  <main class="container">
    <section class="container-list" v-if="hasResults">
      <ul class="container-list__main">
        <li
          class="container-list__main-item"
          @click="emit('openModal', pokemon)"
          v-for="pokemon in props.pokemonsFiltered"
          :key="pokemon.name"
        >
          <div class="item-name">{{ pokemon.name }}</div>
          <img
            class="item-favorite"
            :src="pokemon.favorite ? favorite : notFavorite"
          />
        </li>
      </ul>
    </section>
    <section class="empty-list" v-else>
      <span class="empty-list__title">Uh-oh!</span>
      <p class="empty-list__text">You look lost on your journey!</p>
    </section>
  </main>
</template>
  
  <script setup>
// ----------- IMPORTS-----------
import favorite from "@/assets/scss/icons/favorite.svg?row";
import notFavorite from "@/assets/scss/icons/notFavorite.svg?row";
import { computed } from 'vue'

// ----------- DEFINE PROPS -----------
const props = defineProps({
  pokemonsFiltered: {
    type: Array,
  },
});

// ----------- DEFINE EMITS -----------
const emit = defineEmits(["openModal"]);


// ----------- COMPUTED -----------
const hasResults = computed(() => props.pokemonsFiltered.length > 0)

</script>
  
  <style  lang="scss" scoped>
  .container{
    @include list-elements();
  }
.container-list {
  padding-bottom: 100px;
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
.empty-list{
  &__title {
    color: $color-title;
    font-weight: 700;
    font-size: 26px;
  }
  &__main-text {
    margin: 20px;
    line-height: 1.6;
    font-size: $font-general;
  }

}
.item-name {
  text-transform: capitalize;
  font-weight: 700;
  font-size: $font-general;
  margin-left: 20px;
}

.item-favorite {
  margin-right: 20px;
}
</style>