import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/home/HomeView.vue";
import LoginView from "@/views/Login.vue";
import RegisterView from "@/views/Register.vue";
import RegisterDetailView from "@/views/RegisterDetail.vue";
import ViaEmail from "@/views/forgotPassword/ViaEmail.vue";
import ViaSms from "@/views/forgotPassword/ViaSms.vue";
import ForgotPasswordView from "@/views/forgotPassword/ForgotPassword.vue";
import OtpView from "@/views/forgotPassword/OTP.vue";
import CreatePassword from "@/views/forgotPassword/CreatePassword.vue";
import DetailPage from "@/views/detail/DetailPage.vue";
import ChatDokter from "@/views/chatDokter/chatDokter.vue";
import ChatDokterDetail from "@/views/chatDokter/detailDokter/chatDokterDetail.vue";
import JanjiTemu from "@/views/janjiTemu/janjiTemu.vue";
import JanjiTemuDetail from "@/views/janjiTemu/detailJanjiTemu/janjiTemuDetail.vue";
import DetailDokter from "@/views/janjiTemu/detailJanjiTemu/detailDokter.vue";
import CommerceView from "@/views/E-Commerce/CommerceView.vue";
import ArticleView from "@/views/article/ArticleView.vue";
import ArticleDetail from "@/views/article/ArticleDetail.vue";
import RegisterPopup from "@/views/RegisterPopup.vue";
import ProductDetailView from "@/views/E-Commerce/ProductDetailView.vue";
import CartView from "@/views/E-Commerce/CartView.vue";
import CheckoutView from "@/views/E-Commerce/CheckoutView.vue";
import RoomChat from "@/views/chatDokter/RoomChat.vue";
import JanjiTemuCheckout from "@/views/janjiTemu/detailJanjiTemu/JanjiTemuCheckout.vue";
import ProfileView from "@/views/ProfileView/ProfileView.vue";
import ProfilView from "@/views/ProfileView/ProfilView.vue";
import AlamatView from "@/views/ProfileView/AlamatView.vue";
import RiwayatView from "@/views/ProfileView/RiwayatView.vue";
import TotalPasien from "@/components/Dashboard/TotalPasien";
import TotalPasienChart from "@/components/Dashboard/TotalPasienChart";
import TodaysVisitors from "@/components/Dashboard/TodaysVisitors";
// import ProfileSideBar from "@/components/Profile/ProfileSideBar.vue";
import DefaultView from "@/layouts/Default.vue";
import RegisterLogin from "@/layouts/RegisterLogin/RegisterLoginLayout.vue";
import ForgotPasswordLayout from "@/layouts/RegisterLogin/ForgotPassword.vue";
import ArticleLayout from "@/layouts/Article/ArticleLayout.vue";
import ProfileLayout from "@/layouts/Profile/ProfileLayout.vue";
import CommerceLayout from "@/layouts/CommerceLayout/CommerceLayout.vue";
import DasboardApotik from "@/layouts/Admin/Apotik/DashboardApotik.vue";
import DashboardApotikHome from "@/views/admin/apotik/DashboardApotikHome.vue";
import DashboardDokter from "@/layouts/Admin/Dokter/DashboardDokter.vue";

// import notAuth from "@/middlewares/guest.js";
// import auth from "@/middlewares/auth.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/register-popup",
    name: "RegisterPopup",
    component: RegisterPopup,
  },
  {
    path: "/roomchat",
    name: "RoomChat",
    component: RoomChat,
  },

  {
    path: "/register-login",
    component: RegisterLogin,
    children: [
      {
        path: "/register-login/login",
        name: "Login",
        component: LoginView,
      },
      {
        path: "/register-login/register-:user",
        name: "Register",
        component: RegisterView,
      },
      {
        path: "/register-login/register/detail-:user",
        name: "RegisterDetail",
        component: RegisterDetailView,
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
    path: "/forgot-password",
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
    path: "/article",
    component: ArticleLayout,
    props: true,

    children: [
      {
        path: "/article",
        name: "ArticleView",
        component: ArticleView,
        props: true,
      },
      {
        path: "/article/post/:slug",
        name: "ArticleDetail",
        component: ArticleDetail,
        props: true,
      },
    ],
  },

  {
    path: "/home",
    component: DefaultView,
    children: [
      {
        path: "/home",
        name: "Default",
        component: HomeView,
      },
      {
        path: "/detail/:data",
        name: "Detail",
        component: DetailPage,
      },
      {
        path: "/chat-dokter",
        name: "ChatDokter",
        component: ChatDokter,
      },
      {
        path: "/chat-detail/:detail",
        name: "ChatDokterDetail",
        component: ChatDokterDetail,
      },
    ],
  },

  {
    path: "/janji-temu",
    component: DefaultView,
    children: [
      {
        path: "/janji-temu/list",
        name: "JanjiTemu",
        component: JanjiTemu,
      },
      {
        path: "/janji-temu/detail/:slug",
        name: "DetailDokter",
        component: DetailDokter,
      },
      {
        path: "janji-temu/detail-dokter/:slug",
        name: "JanjiTemuDetail",
        component: JanjiTemuDetail,
      },
      {
        path: "/janji-temu/checkout",
        name: "JanjiTemuCheckout",
        component: JanjiTemuCheckout,
        props: true,
      },
    ],
  },
  {
    path: "/TotalPasien",
    name: "TotalPasien",
    component: TotalPasien,
  },
  {
    path: "/TotalPasienChart",
    name: "TotalPasienChart",
    component: TotalPasienChart,
  },
  {
    path: "/TodaysVisitors",
    name: "TodaysVisitors",
    component: TodaysVisitors,
  },
  {
    path: "/commerce",
    component: CommerceLayout,
    children: [
      {
        path: "/commerce/:shop/:product",
        name: "HomeShop",
        component: CommerceView,
      },
      {
        path: "/commerce/:shop/:product/:slug",
        name: "ProductDetail",
        component: ProductDetailView,
      },
      {
        path: "/commerce/cart",
        name: "CartView",
        component: CartView,
      },
      {
        path: "/commerce/checkout",
        name: "CheckoutView",
        component: CheckoutView,
        props: true,
      },
    ],
  },
  {
    path: "/dashboard-admin/apotik",
    name: "DasboardApotik",
    component: DasboardApotik,
    children: [
      {
        path: "/dashboard-admin/apotik/home",
        name: "DasboardApotikMain",
        component: DashboardApotikHome,
      },
    ],
  },
  {
    path: "/dashboard-admin/dokter",
    name: "DashboardDokter",
    component: DashboardDokter,
    children: [],
  },

  {
    path: "/profile",
    component: ProfileLayout,
    children: [
      {
        path: "/profile/home",
        name: "ProfileHome",
        component: ProfileView,
      },
      {
        path: "/profile/profil",
        name: "ProfileProfil",
        component: ProfilView,
      },
      {
        path: "/profile/alamat",
        name: "ProfileAlamat",
        component: AlamatView,
      },
      {
        path: "/profile/riwayat",
        name: "ProfileRiwayat",
        component: RiwayatView,
      },
    ],
  },
];

const router = new VueRouter({
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
  routes,
});

export default router;
