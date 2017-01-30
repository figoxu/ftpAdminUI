import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import MngDashboard from './cmp/Mng-Dashboard'
import MngFtp from './cmp/Mng-Ftp'
import MngPwd from './cmp/Mng-pwd'


Vue.use(VueRouter);

const routes = [
  {name:'MngFtp',path:'/',component:MngDashboard},
  {name:'MngAccount' ,path:'/dashboard',component:MngDashboard},
  {name:'MngFtp',path:'/ftp',component:MngFtp},
  {name:'MngPwd',path:'/pwd',component:MngPwd}
]


const router = new VueRouter({
  routes,
  mode:'history'
})


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
