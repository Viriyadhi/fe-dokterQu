import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
// import TestView from "../views/TestView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  // {
  //   path: "/test",
  //   name: "test",
  //   component: TestView,
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
