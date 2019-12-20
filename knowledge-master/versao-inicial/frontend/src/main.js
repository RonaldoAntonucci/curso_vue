import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkpvYW8iLCJlbWFpbCI6ImpvYW9AeWFob28uY29tIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE1NzY4Njk2NDIsImV4cCI6MTU3NzEyODg0Mn0.XJoRh79T1L03r6baDD4j4y3iYPC83HSdi3gCBzfLj9w'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')