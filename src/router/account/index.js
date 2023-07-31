import Vue from "vue";
import VueRouter from 'vue-router'

import AccountCreationPage from '@/views/account/AccountCreationPage.vue'
import AccountLoginPage from '@/views/account/AccountLoginPage.vue'

Vue.use(VueRouter)

const accountRoutes = [
    
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
]

export default accountRoutes