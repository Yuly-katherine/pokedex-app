const LayoutRoute = [
    {
      path: '/',
      name: 'Welcome',
      component: () => import('../../views/Welcome.vue'),
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../../views/Home.vue'),
    },
    // {
    //   path: '/reset-password/:token',
    //   name: 'ResetPassword',
    //   component: () => import('../../views/Login/Index.vue'),
    // },
  ];
  
  export default LayoutRoute;