import { createRouter, createWebHistory } from 'vue-router'
import LayoutRoute from './modules/layout'

const AppRoute = [
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () => import('../views/PageNotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...AppRoute,
    ...LayoutRoute,
  ],
})

export default router
