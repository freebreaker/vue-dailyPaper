import Vue from 'vue'
import App from './App.vue'
import routes from './router.config.js'
import VueRouter from 'vue-router'
import store from './store'

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import VueLazyload from 'vue-lazyload';

Vue.use(MintUI);
Vue.use(VueRouter)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1,
  listenEvents: [ 'scroll' ]
});

const router = new VueRouter({
  	mode: 'history',
	scrollBehavior: () => ({
		y: 0
	}),
	routes
});

new Vue({
  el: '#app',
  router,
  store,
	render: h => h(App)
})
