import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkpvYW8iLCJlbWFpbCI6ImpvYW9AeWFob28uY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTU3Njg3MTM5MSwiZXhwIjoxNTc3MTMwNTkxfQ.4SRFR0ZiC75SE6XXWVKXHUQ27IunQ24kqwwWKZZQp5E'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')