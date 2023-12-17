import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueGlobalVar from "vue-global-var";
import Axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import "leaflet/dist/leaflet.css";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faFaceLaughBeam } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

import "leaflet/dist/leaflet.css";

import { Icon } from "leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

library.add(faRecycle);
library.add(faMessage);
library.add(faEllipsisVertical);
library.add(faMagnifyingGlass);
library.add(faBars);
library.add(faArrowDown);
library.add(faPaperclip);
library.add(faFaceLaughBeam);
library.add(faMicrophone);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component("l-popup", LPopup);
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
