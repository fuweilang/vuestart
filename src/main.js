import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Element from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Element)

import firstcomponent from './component/first.vue'
import secondcomponent from './component/second.vue'

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: firstcomponent
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})

new Vue({
	router: router,
  el: '#app',
  render: h => h(App)
})
