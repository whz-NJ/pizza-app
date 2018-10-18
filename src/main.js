import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import axios from 'axios';

// 如果是index.js, 使用import {store}  from './store'
import {store} from './store/store.js'

Vue.use(VueRouter);
/*配置默认的根路径*/
axios.defaults.baseURL = 'https://wd7814173785erjpna.wilddogio.com/';
// // 配置Vue原型（在任何组件中使用axios，使用方法，this.$axios.get/post）
// Vue.prototype.$axios = axios;
// 配置Vue原型（在任何组件中使用axios，使用方法，this.http.get/post）
Vue.prototype.http = axios;

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to, from,savedPosition) {
    /*点击新页面时，垂直方向向下滚动100px*/
    // return {x:0, y:100}
    // return {selector: '.btn'} 滚动到按钮所在位置
    //滚动一个页面，然后在浏览器里输入另外一个url，展示新页面，再点击浏览器的回退按钮时，回退到上次页面滚动位置
    if(savedPosition) {
      return savedPosition;
    }
    else {
      return {x:0, y:0};
    }
  }
})

// //全局守卫
// router.beforeEach((to, from, next) => {
//   // next();
//   // 判断store.getters.isLogin === false
//   if(to.path == '/login' || to.path == '/register')
//   next();
//   else {
//   alert('还没有登录，请先登录');
//   next('/login');
//   }
// })
// 后置钩子
// router.afterEach((to, from) => {
//   //不能使用next方法控制，因为该钩子方法是在进入指定组件之后调用的
//   alert("after each.");
// })
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
