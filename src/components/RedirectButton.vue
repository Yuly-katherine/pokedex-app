<template>
  <el-button class="redirect-button" @click="changeRoute"> {{ buttonLabel }} </el-button>
</template>

<script setup>
// ----------- IMPORTS -----------
import { computed } from 'vue'
import { useRoute, useRouter } from "vue-router";

// ----------- ROUTER -----------
const router = useRouter();
const route = useRoute();

// ----------- COMPUTED -----------
const buttonLabel = computed(() => {
  return route.name === 'Home' ? 'Get Started' : 'Go Back Home'
})

const redirectTo = computed(() => {
  return route.name === 'Home' ? 'Pokemons' : 'Home'
})

// ----------- METHODS -----------
const changeRoute = () => {
  router.push({ name: `${redirectTo.value}`});
};

</script>

<style lang="scss" scoped>

.redirect-button {
  @include redirect-button($color-app-primary);
}
</style>