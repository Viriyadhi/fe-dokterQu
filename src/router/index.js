import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../layouts/Login.vue";
import RegisterView from "../layouts/Register.vue";
import DefaultView from "../layouts/Default.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/",
    name: "Default",
    component: DefaultView,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: "/about",
        name: "about",
        component: AboutView,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
