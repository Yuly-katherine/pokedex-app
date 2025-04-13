<template>
  <div class="container">
    <section class="container__main">
      <span class="container__main-title">Oops!!, You are lost</span>
      <p class="container__main-text">Comes back again</p>
    </section>
    <RedirectButton />
  </div>
</template>

<script setup>
// ----------- IMPORT -----------
import RedirectButton from "../components/RedirectButton.vue";
</script>

<style  lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  &__main-title {
    color: $color-title;
    font-weight: 700;
    font-size: 26px;
  }
  &__main-text {
    margin: 20px;
    line-height: 1.6;
    color: $text-primary;
  }
}
</style>