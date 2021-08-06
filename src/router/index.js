import { createRouter, createWebHashHistory } from 'vue-router'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import Home from '../pages/Home.vue'
import HouseDetailsPage from '../pages/HouseDetailsPage.vue'
import JobDetailsPage from '../pages/JobDetailsPage.vue'
import CarsHome from '../pages/CarsHome.vue'
import HousesHome from '../pages/HousesHome.vue'
import JobsHome from '../pages/JobsHome.vue'

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
  },{
    // required param ':id'
    path: '/job-details/:id',
    name: 'JobDetails',
    component: JobDetailsPage
  },{
    // required param ':id'
    path: '/cars-home/',
    name: 'CarsHome',
    component: CarsHome
  },{
    // required param ':id'
    path: '/houses-home/',
    name: 'HousesHome',
    component: HousesHome
  },{
    // required param ':id'
    path: '/jobs-home/',
    name: 'JobsHome',
    component: JobsHome
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
