const state = {
  currentUser: null, // 存储用户邮箱信息
}
const getters = {
  currentUser: state => state.currentUser
}
const mutations = {
// 更改用户的状态信息
  userStatus(state, user) {
    // debugger
    if (user) {
      state.currentUser = user;
      // state.isLogin = true;
    } else {
      state.currentUser = null;
      // state.isLogin = false;
    }
    console.log("finished.")
  }
}
const actions = {
//应用mutations
//导出箭头方法，供外界使用
  setUser({commit}, user) {
    // debugger
    commit("userStatus", user); // 同步方法调用
    if(user) {
      commit("isLogin", true);  //commit同步方法调用(mutations里定义的方法)，也可以调用异步方法dispatch('setLogin', true); actions里定义的方法
    } else {
      commit("isLogin", false);  //commit同步方法调用(mutations里定义的方法)，也可以调用异步方法dispatch('setLogin', false); actions里定义的方法
    }
  }
}
export default {
  state,
  getters,
  mutations,
  actions,
}
