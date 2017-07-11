import Vue from 'vue'
import App from './App.vue'
import routes from './router.config.js'
import VueRouter from 'vue-router'
import store from './store'

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);

const router = new VueRouter({
	routes
});

new Vue({
  el: '#app',
  router,
  store,
	render: h => h(App)
})
