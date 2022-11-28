import Vue from 'vue'
import App from './App.vue'

// import { Row, Button } from 'element-ui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import './api/mock'

Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(Row)
// Vue.use(Button)



new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit('addMenu', router)
  }
}).$mount('#app')
