import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";

Vue.config.productionTip = false;

const base = axios.create({
  baseURL: "https://portal-tb.lynxx.co/api-test/"
});

Vue.prototype.API = base;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
