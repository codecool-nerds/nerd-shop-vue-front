import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.prototype.$apiAdress = 'http://localhost:8080/api/';

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
