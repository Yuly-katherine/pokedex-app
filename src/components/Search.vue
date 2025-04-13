<template>
  <header class="header-search">
    <el-input
      v-model="name"
      size="large"
      placeholder="Search"
      :prefix-icon="Search"
      class="header-search__input"
      @input="searchByName"
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
const name = ref("");

// ----------- METHODS -----------
const searchByName = () => {
  emit("filterOptions", name.value);
};
</script>
  
<style  lang="scss" scoped>
.header-search {
  padding-top: 30px;
  @include list-elements();
  &__input {
    height: 50px;
    border-radius: 10px;
  }
}

:deep .el-input__wrapper {
  border-radius: 10px;
  background-color: $color-white;
  box-shadow: $box-shadow-input;
  &:hover {
    box-shadow: $box-shadow-hoover;
  }
}
</style>