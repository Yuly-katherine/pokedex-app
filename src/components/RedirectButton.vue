<template>
  <el-button class="redirect-button" @click="changeRoute"> {{ buttonLabel }} </el-button>
</template>

<script setup>
// ----------- IMPORTS -----------
import { computed } from 'vue'
import { useRoute, useRouter } from "vue-router";


const router = useRouter();
const route = useRoute();

// ----------- COMPUTED -----------
const buttonLabel = computed(() => {
  return route.name === 'Welcome' ? 'Get Started' : 'Go Back Home'
})

const redirectTo = computed(() => {
  return route.name === 'Welcome' ? 'Home' : 'Welcome'
})

// ----------- METHODS -----------
const changeRoute = () => {
  router.push({ name: `${redirectTo.value}`});
};

</script>

<style lang="scss" scoped>

.redirect-button {
  margin-top: 30px;
  @include redirect-button($color-app-primary);
}
</style>