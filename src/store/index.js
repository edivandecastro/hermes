import Vue from 'vue'
import Vuex from 'vuex'

import User from './modules/user.module'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    User
  }
})
