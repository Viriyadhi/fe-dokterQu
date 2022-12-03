import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/Login.vue";
import RegisterView from "../views/Register.vue";
import DefaultView from "../layouts/Default.vue";
import RegisterLogin from "../layouts/RegisterLogin/RegisterLoginLayout.vue";
import ForgotPasswordLayout from "../layouts/RegisterLogin/ForgotPassword.vue";
import ForgotPasswordView from "../views/forgotPassword/ForgotPassword.vue";
import OtpView from "../views/forgotPassword/OTP.vue";
import CreatePassword from "../views/forgotPassword/CreatePassword.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPasswordLayout,
    children: [
      {
        path: "/forgot-password/forgot",
        name: "Forgot",
        component: ForgotPasswordView,
      },
      {
        path: "/forgot-password/otp",
        name: "Otp",
        component: OtpView,
      },
    ],
  },

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
      {
        path: "/register-login/create-password",
        name: "CreatePassword",
        component: CreatePassword,
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
