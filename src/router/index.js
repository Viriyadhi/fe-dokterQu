import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/Login.vue";
import RegisterView from "../views/Register.vue";
// import LoginView from "../layouts/Login.vue";
// import RegisterView from "../layouts/Register.vue";
import DefaultView from "../layouts/Default.vue";
import RegisterLogin from "../layouts/RegisterLogin/RegisterLoginLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/register-login",
    name: "RegisterLogin",
    component: RegisterLogin,
    children: [
      {
        path: "/register-login/login",
        name: "Login",
        component: LoginView,
      },
      {
        path: "/register-login/register",
        name: "Register",
        component: RegisterView,
      },
    ],
  },

  {
    path: "/",
    name: "",
    component: DefaultView,
    children: [
      {
        path: "/",
        name: "Default",
        component: HomeView,
      },
      {
        path: "/about",
        name: "About",
        component: AboutView,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
