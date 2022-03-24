import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
