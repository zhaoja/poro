// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)
 
import Vuex from "vuex"
Vue.use(Vuex)

import './scss/total.scss'
import $ from 'jquery'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/js/bootstrap.min'
import 'font-awesome/scss/font-awesome.scss'


import layout from './models/layout'

Vue.config.productionTip = false

const store = new Vuex.Store({
	modules:{
		layout:layout
	}
})

Vue.filter('replace', function (input) {
	 return input.slice(5,10)
})
 /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
