import { createRouter, createWebHistory } from 'vue-router'
import LayoutRoute from './modules/layout'

const AppRoute = [
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () => import(/* webpackChunkName: "pagenotfound" */ '../views/PageNotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...AppRoute,
    ...LayoutRoute,
  ],
})

export default router
