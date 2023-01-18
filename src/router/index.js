import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import LoginView from "../views/Login.vue";
import RegisterView from "../views/Register.vue";
import ViaEmail from "../views/forgotPassword/ViaEmail.vue";
import ViaSms from "../views/forgotPassword/ViaSms.vue";
import DefaultView from "../layouts/Default.vue";
import RegisterLogin from "../layouts/RegisterLogin/RegisterLoginLayout.vue";
import ForgotPasswordLayout from "../layouts/RegisterLogin/ForgotPassword.vue";
import ForgotPasswordView from "../views/forgotPassword/ForgotPassword.vue";
import OtpView from "../views/forgotPassword/OTP.vue";
import CreatePassword from "../views/forgotPassword/CreatePassword.vue";
import DetailPage from "../views/detail/DetailPage.vue";
import JanjiTemu from "../views/janjiTemu/janjiTemu.vue";
import DetailJanji from "../views/janjiTemu/detailDokter/janjiTemuDetail.vue";
import CommerceLayout from "../layouts/CommerceLayout/CommerceLayout.vue";
import CommerceView from "../views/E-Commerce/CommerceView.vue";

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
      {
        path: "/register-login/via-email",
        name: "ViaEmail",
        component: ViaEmail,
      },
      {
        path: "/register-login/via-sms",
        name: "ViaSms",
        component: ViaSms,
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
        path: "/detail/:data",
        name: "Detail",
        component: DetailPage,
      },
      {
        path: "/janji-temu",
        name: "JanjiTemu",
        component: JanjiTemu,
      },
      {
        path: "/janji-temu/:dokter",
        name: "JanjiTemuDetail",
        component: DetailJanji,
      },
    ],
  },

  {
    path: "/shop",
    name: "",
    component: CommerceLayout,
    children: [
      {
        path: "/",
        name: "HomeShop",
        component: CommerceView,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
