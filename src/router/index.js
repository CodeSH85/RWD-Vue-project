import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsListView from '../views/ProductsListView.vue'
import ProductView from '../views/ProductView.vue'
import FavView from '../views/FavView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsListView
  },
  {
    path: '/fav',
    name: 'Fav',
    component: FavView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/products/:productId',
    name: 'Product',
    component: ProductView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
