<template>
  <footer class="buttons-footer">
    <el-button
      :icon="Tickets"
      class="buttons-footer__showAll"
      @click="emit('showAll')"
      >All</el-button
    >
    <el-button
      :icon="StarFilled"
      class="buttons-footer__showFav"
      @click="emit('showFavorites')"
      >Favorites</el-button
    >
  </footer>
</template>

<script setup>
// ----------- IMPORTS -----------
import { Tickets, StarFilled } from "@element-plus/icons-vue";

// ----------- DEFINE EMITS -----------
const emit = defineEmits(["showAll", "showFavorites"]);

</script >

<style lang="scss" scoped>
.buttons-footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 80px;
  background-color: $color-white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  box-shadow: $box-shadow-general;
  &__showAll {
    @include redirect-button($color-app-primary);
    padding: 1.2em 4em;
    margin: 0 20px;
  }
  &__showFav {
    @include redirect-button($color-app-gray);
    padding: 1.2em 4em;
    margin: 0 20px;
  }
  @media (max-width: 500px) {
    .buttons-footer__showFav,
    .buttons-footer__showAll {
      padding: 1.2em 2.5em;
    }
  }
  @media (max-width: 350px) {
    .buttons-footer__showFav,
    .buttons-footer__showAll {
      padding: 1.2em 1.5em;
    }
  }
}

:deep .el-icon {
  font-size: 20px;
}
</style>