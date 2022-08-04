import App from './App'
import store from './store/index.js'
import $api from './common/common.js'

$api.register_env((env) => {
	Vue.prototype.$env = env;
});


// #ifndef VUE3
import Vue from 'vue'
Vue.prototype._ = require('lodash');
Vue.config.productionTip = false
Vue.prototype.$api = $api
App.mpType = 'app'

store.dispatch('login')
.then((res)=>{
	const app = new Vue({
		    ...App,
			store
		})
		app.$mount()
})


// #endif
// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif