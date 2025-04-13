<template>
  <el-dialog
    v-model="props.modalVisible"
    width="400"
    center
    :before-close="handleClose"
  >
    <template #header>
      <div class="dialog-header">
        <img
          :src="props.pokemonData?.sprites.front_default"
          alt="pokemon"
          class="dialog-header__img"
        />
      </div>
    </template>
    <main class="dialog-content">
      <span> <strong>Name: </strong>{{ props.pokemonData.name }}</span>
      <el-divider border-style="dashed" />
      <span> <strong>Weight: </strong>{{ props.pokemonData.weight }}</span>
      <el-divider border-style="dashed" />
      <span> <strong>Height: </strong>{{ props.pokemonData.height }}</span>
      <el-divider border-style="dashed" />
      <div>
        <span><strong>Types: </strong></span>
        <span> {{ pokemonData.types.map(el => el.type.name).join(', ') }}</span>
      </div>
    </main>
    <template #footer>
      <div class="dialog-footer">
        <el-button class="dialog-footer__btn"
        @click="copyToClipboard"
        >Share To my friend</el-button>
        <el-button class="dialog-footer__fav">
          <img :src="favorite" alt="favorite">
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
  
  <script setup>
// ----------- IMPORTS -----------
import favorite from "@/assets/scss/icons/favorite.svg?row";

// ----------- DEFINE PROPS -----------
const props = defineProps({
  pokemonData: {
    type: Object,
  },
  modalVisible: {
    type: Boolean,
  },
});


// ----------- DEFINE EMITS -----------
const emit = defineEmits(["closeModal"]);

// ----------- METHODS -----------
const handleClose = () => {
  emit("closeModal");
};

const copyToClipboard = async () => {
  const pokemonAtributes = `
      Name: ${props.pokemonData.name}
      Weight: ${props.pokemonData.weight}
      Height: ${props.pokemonData.height}
      Types: ${props.pokemonData.types.map(el => el.type.name).join(', ')}
    `
  await navigator.clipboard.writeText(pokemonAtributes)
}
</script>

<style  lang="scss" scoped>
.dialog-header {
  background-image: url("../assets/scss/icons/landScape.png");

  background-size: cover;
  height: 300px;
  &__img {
    height: 200px;
    width: 200px;
    text-align: center;
    padding-top: 60px;
  }
}
.dialog-content {
  margin-top: 20px;
}

.dialog-footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
  &__btn{
    @include redirect-button($color-app-primary);
    padding: 0.8em 1.4em;
  }
  &__fav{
    border: none;
    &:hover {
      background-color: $color-white;
    }
  }
}

::v-deep .el-divider--horizontal {
  margin: 10px 0;
}
::v-deep.el-dialog__header {
  padding-right: 0px !important;
}
::v-deep .el-dialog__header.show-close {
  padding-right: 0 !important;
}
::v-deep .el-dialog__headerbtn {
  background-color: $color-white;
  border-radius: 50%;
  font-size: 20px;
  height: 25px;
  width: 25px;
  margin-right: 25px;
  margin-top: 20px;
}
</style>