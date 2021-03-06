import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../static/css/reset.css";
import 'mint-ui/lib/style.css';
import "../static/css/identify.css";

import "./mintui/index";

import './mock/mockServer'

import VueTouch from 'vue-touch'
Vue.use(VueTouch,{name: 'v-touch'})

Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
