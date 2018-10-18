const state = {
  isLogin: false
}
const getters = {
  isLogin: state => state.isLogin
}
const mutations = {
// 更改用户的状态信息
  isLogin(state, isLogin) {
    // debugger
    state.isLogin = isLogin;
  }
}
const actions = {
//应用mutations
  setLogin({commit}, isLogin) {
    commit("isLogin", isLogin); // 同步方法调用
  }
}
export default {
  state,
  getters,
  mutations,
  actions,
}
