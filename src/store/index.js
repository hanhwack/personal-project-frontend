import Vue from 'vue'
import Vuex from 'vuex'

import accountModule from '@/store/account/AccountModule'
import boardModule from '@/store/board/BoardModule'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    accountModule: accountModule,
    boardModule: boardModule,

    
  },
})

export default store