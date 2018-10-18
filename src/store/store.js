import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions' // 所有的方法属性都引进来
// import * as getters from './getters' // 所有的方法属性都引进来
// import * as mutations from './mutations' // 所有的方法属性都引进来
import menu from './module/menu';
import users from './module/users';
import status from './module/status';
Vue.use(Vuex)

//实例化Vuex对象
export const store = new Vuex.Store({
  modules:{
    menu,users,status
  }
})
