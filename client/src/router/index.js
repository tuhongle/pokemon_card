import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/add-card',
      name: 'addCard',
      component: () => import('../views/AddCardView.vue')
    },
    {
      path: '/card/:id',
      name: 'CardDetail',
      component: () => import('../views/CardDetailView.vue'),
      props: true
    },
    {
      path: '/edit-card/:id',
      name: 'EditCard',
      component: () => import('../views/EditCardView.vue'),
      props: true
    }
  ]
})

export default router
