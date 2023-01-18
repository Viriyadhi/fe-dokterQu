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
    $api: "http://103.31.39.5:2023/api",
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
