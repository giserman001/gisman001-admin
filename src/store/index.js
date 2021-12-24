import { createStore } from 'vuex'
// 所有模块状态
import getters from './getters'
import app from './app.js'
import user from './modules/user.js'

export default createStore({
  state: {},
  getters,
  mutations: {},
  actions: {},
  modules: {
    user,
    app
  }
})
