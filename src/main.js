import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueGlobalVar from "vue-global-var";
import Axios from "axios";

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;

Vue.use(VueGlobalVar, {
  globals: {
    $api: "http://127.0.0.1:8000/api",
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
