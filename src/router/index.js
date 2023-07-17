import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountCreationPage from '@/views/account/AccountCreationPage.vue'
import AccountLoginPage from '@/views/account/AccountLoginPage.vue'
import BoardListPage from '@/views/board/BoardListPage.vue'
import BoardRegisterPage from '@/views/board/BoardRegisterPage.vue'
import BoardReadPage from '@/views/board/BoardReadPage.vue'
import GoogleMapPage from '@/views/map/GoogleMapPage.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/account-creation-page',
    name: 'AccountCreationPage',
    component: AccountCreationPage
  },
  {
    path: '/account-login-page',
    name: 'AccountLoginPage',
    component: AccountLoginPage
  },
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
