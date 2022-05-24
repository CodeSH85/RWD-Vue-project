import { createRouter, createWebHistory } from 'vue-router'

//=============================================================

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import ( '../views/HomeView.vue' )
  },
  {
    path: '/fav',
    name: 'Fav',
    component: () => import ('../views/FavView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import ('../views/LoginView.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import ('../views/ProductsListView.vue')
  },
  {
    path: '/products/:productId',
    name: 'Product',
    component: () => import ('../views/ProductView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
