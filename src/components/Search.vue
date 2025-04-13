<template>
  <header>
    <el-input
      v-model="pokemonName"
      size="large"
      placeholder="Search"
      :prefix-icon="Search"
      class="search"
      @input="searchPokemon"
    />
  </header>
</template>
  
  <script setup>
// ----------- IMPORT -----------
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

// ----------- DEFINE EMITS -----------
const emit = defineEmits(["filterOptions"]);

// ----------- VARIABLE -----------
const pokemonName = ref("");

// ----------- METHODS -----------
const searchPokemon = () => {
  emit("filterOptions", pokemonName.value);
};
</script>
  
  <style  lang="scss" scoped>
.search {
  height: 50px;
  border-radius: 10px;
}
::v-deep .el-input__wrapper {
  border-radius: 10px;
  background-color: $color-white;
  box-shadow: $box-shadow-input;
  &:hover {
    box-shadow: $box-shadow-hoover;
  }
}
</style>