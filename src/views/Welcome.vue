<template>
    <div 
    class="container" 
    >
      <img
        class="container__img"
        src="../assets/scss/icons/pikachu.svg"
        alt="pikachú"
      />
      <section class="container__main">
        <span class="container__main-title">Welcome to Pokédex</span>
        <p class="container__main-text">
          The digital encyclopedia created by Professor Oak is an invaluable tool
          <br />
          to Trainers in the Pokémon world.
        </p>
      </section>
      <RedirectButton
       @LoadingData="LoadingData"
      />
    </div>
  </template>
  
  <script setup>
  // ----------- IMPORT -----------
  import RedirectButton from '../components/RedirectButton.vue'; 
  import pokebola from '../assets/scss/icons/pokeBola.svg?raw'; 
  import { ElLoading } from "element-plus";
  
  
  // ----------- METHODS -----------
  const LoadingData = () => {
    const loading = ElLoading.service({
      fullscreen: true,
      lock: true,
      svg: pokebola,
    });
    setTimeout(() => {
      loading.close();
    }, 2000);
  };
  
  
  </script>
  
  <style  lang="scss" scoped>
  .container {
    margin: 0 auto;
    &__img {
      background-color: $color-app-primary;
      border-radius: 50%;
      border: 2px solid;
      border-color: $color-black;
      margin: 50px 0;
    }
    &__main {
      margin: 20px;
    }
    &__main-title {
      color: $color-tittle;
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