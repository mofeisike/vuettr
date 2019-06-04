import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/router'
import {store} from './store/store'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.get['Accrpts'] = 'application/josn';


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
