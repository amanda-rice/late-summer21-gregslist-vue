import { createRouter, createWebHashHistory } from 'vue-router'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import Home from '../pages/Home.vue'
import HouseDetailsPage from '../pages/HouseDetailsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    // required param ':id'
    path: '/car-details/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  },{
    // required param ':id'
    path: '/house-details/:id',
    name: 'HouseDetails',
    component: HouseDetailsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
