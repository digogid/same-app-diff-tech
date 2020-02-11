import Vue from 'vue'
import App from './App.vue'
import List from './components/List.vue'
import Details from './components/Details.vue'
import VueRouter from 'vue-router'

const routes = [
  { name: 'home', path: '/', component: App },
  { name: 'list', path: '/list', component: List },
  { name: 'details', path: '/details/:id', component: Details }
]

const router = new VueRouter({
  routes
});

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
