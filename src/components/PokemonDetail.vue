<template>
  <el-dialog
    :model-value="props.modalVisible"
    width="400"
    center
    :before-close="handleClose"
  >
    <template #header>
      <div class="dialog-header">
        <img
          :src="props.pokemonAttributes?.sprites.front_default"
          alt="pokemon"
          class="dialog-header__img"
        />
      </div>
    </template>
    <main class="dialog-content">
      <p class="capitalized"><b>Name: </b>{{ props.pokemonAttributes.name }}</p>
      <el-divider border-style="dashed" />
      <span class="capitalized"> <b>Weight: </b>{{ props.pokemonAttributes.weight }}</span>
      <el-divider border-style="dashed" />
      <span class="capitalized"> <b>Height: </b>{{ props.pokemonAttributes.height }}</span>
      <el-divider border-style="dashed" />
      <span class="capitalized"><b>Types: </b> {{
            pokemonAttributes.types.map((el) => el.type.name).join(", ")
          }}</span>
      <el-divider border-style="dashed" />
    </main>
    <template #footer>
      <div class="dialog-footer">
        <el-button class="dialog-footer__btn" @click="copyToClipboard"
          >Share To my friend</el-button
        >
        <el-button class="dialog-footer__fav" @click="favoritesHandler">
          <img
            :src="props.pokemonSelected.favorite ? favorite : notFavorite"
            alt="favorite icon"
          />
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
  
  <script setup>
// ----------- IMPORTS -----------
import favorite from "@/assets/scss/icons/favorite.svg?row";
import notFavorite from "../assets/scss/icons/notFavorite.svg?row";
import { ElMessage } from "element-plus";

// ----------- DEFINE PROPS -----------
const props = defineProps({
  pokemonAttributes: {
    type: Object,
  },
  modalVisible: {
    type: Boolean,
  },
  pokemonSelected: {
    type: Object,
  },
});
// ----------- DEFINE EMITS -----------
const emit = defineEmits(["closeModal", "selectFavorite"]);

// ----------- METHODS -----------
const handleClose = () => {
  emit("closeModal");
};

const favoritesHandler = () => {
  emit(
    "selectFavorite",
    props.pokemonSelected.name,
    !props.pokemonSelected.favorite
  );
};

const copyToClipboard = async () => {
  const pokemonAtributes = `
      Name: ${props.pokemonAttributes.name}
      Weight: ${props.pokemonAttributes.weight}
      Height: ${props.pokemonAttributes.height}
      Types: ${props.pokemonAttributes.types
        .map((el) => el.type.name)
        .join(", ")}
    `;
  await navigator.clipboard.writeText(pokemonAtributes);
  ElMessage("Pokemon Atributes Copied");
};
</script>

<style  lang="scss" scoped>
.dialog-header {
  background-image: url("../assets/scss/icons/landScape.png");
  background-size: cover;
  background-position: center center;
  width: 310px;
  margin: 0 auto;
  border-radius: 10px;
  &__img {
    height: 220px;
    width: 220px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    align-content: center;
  }
}
.dialog-content {
  margin-top: 20px;
  font-size: 16px
}

.dialog-footer {
  display: flex;
  align-items: center;
  justify-content: space-around;

  &__fav {
    border: none;
    &:hover {
      background-color: $color-white;
    }
  }

  &__btn {
    @include redirect-button($color-app-primary);
    padding: 1.2em 1.4em;
    
    @media (max-width: 500px) {
      padding: 0.8em 1em;
    }
  }
}
.capitalized {
  text-transform: capitalize;
}

:deep .el-divider--horizontal {
  margin: 10px 0;
}

</style>