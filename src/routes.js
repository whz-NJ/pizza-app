import Home from './components/Home';
import Menu from './components/Menu';
import Admin from './components/Admin';
import About from './components/about/About';
import Login from './components/Login';
import Register from './components/Register';
// 二级路由
import Contact from './components/about/Contact';
import Delivery from './components/about/Delivery';
import History from './components/about/History';
import OrderingGuide from './components/about/OrderingGuide';
// 三级路由
import Phone from './components/about/contact/Phone';
import PersonName from './components/about/contact/PersonName';

export const routes = [
  // {path: '/', name:'homeLink', component: Home},
  {path: '/', name:'homeLink', components:{
    default: Home,
      'orderingGuide': OrderingGuide,
      'delivery': Delivery,
      'history': History
    } },
  {path: '/menu', name:'menuLink', component: Menu},
  {path: '/admin', name:'adminLink', component: Admin,
    // beforeEnter: (to, from, next) => {
    // 路由独享的守卫
    // }
  },
  // redirect设置默认展示的二级页面
  {path: '/about', name:'aboutLink', redirect:'/about/contact', component: About, children: [
      // path可以带父级path，也可以不带
      // redirect设置默认展示的三级页面
      {path:'/about/contact', name:"contactLink", redirect: '/history', component: Contact, children: [
          {path: '/phone', name: 'phoneNumber', component:Phone},
          {path: '/personname', name: 'personName', component:PersonName},
        ]},
      {path:'/history', name:"historyLink", component: History},
      {path:'/delivery', name:"deliveryLink", component: Delivery},
      {path:'/orderingGuide', name:"orderingGuideLink", component: OrderingGuide}
    ]},
  {path: '/login', name:'loginLink', component: Login},
  {path: '/register', name:'registerLink', component: Register},
  {path: '/*', redirect:'/'}
]
