import Vue from 'vue'
import VueRouter from 'vue-router'



import GoogleMapPage from '@/views/map/GoogleMapPage.vue'

import accountRoutes from "./account";
import defaultSetRoutes from "./defaultRouterSet";
import boardRoutes from "./board";





Vue.use(VueRouter)

const routes = [
  ...defaultSetRoutes,
  ...accountRoutes, 
  ...boardRoutes, 
  
  
  {
    path: '/google-map-page',
    name: 'GoogleMapPage',
    component: GoogleMapPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
