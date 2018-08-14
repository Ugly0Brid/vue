import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import resource from './modules/resource'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    login,
    resource
  }
})
