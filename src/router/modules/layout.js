const LayoutRoute = [
    {
      path: '/',
      name: 'Home',
      component: () => import('../../views/Home.vue'),
    },
    {
      path: '/pokemons/:name?',
      name: 'Pokemons',
      component: () => import('../../views/PokemonsView.vue'),
    },
  ];
  
  export default LayoutRoute;