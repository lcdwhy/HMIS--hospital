import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

//全局守卫，判断是否登录
router.beforeEach((to, form, next) => {
  store.state.token = sessionStorage.getItem("token");
  store.state.UserName = sessionStorage.getItem("UserName");
  store.state.UserImage = sessionStorage.getItem("UserImage");
  if(to.matched[0].meta.requireAuth === true){
    if(store.state.token !== null){
      next()
    }else{
      // next({
      //   path: '/login',
      //   query:{
      //     redirect: to.fullPath
      //   }
      // })
      alert("未登录");
      next('/login');
    }
  }else{
    next()
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


