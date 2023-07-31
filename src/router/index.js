import Vue from 'vue'
import VueRouter from 'vue-router'


import BoardListPage from '@/views/board/BoardListPage.vue'
import BoardRegisterPage from '@/views/board/BoardRegisterPage.vue'
import BoardReadPage from '@/views/board/BoardReadPage.vue'
import GoogleMapPage from '@/views/map/GoogleMapPage.vue'

import accountRoutes from "./account";
import defaultSetRoutes from "./defaultRouterSet";





Vue.use(VueRouter)

const routes = [
  ...defaultSetRoutes,
  ...accountRoutes,  
  
  {
    path: '/board-list-page',
    name: 'BoardListPage',
    component: BoardListPage
  },
  {
    path: '/board-register-page',
    name: 'BoardRegisterPage',
    component: BoardRegisterPage
  },
  {
    path: '/board-read-page',
    name: 'BoardReadPage',
    component: BoardReadPage
  },
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
