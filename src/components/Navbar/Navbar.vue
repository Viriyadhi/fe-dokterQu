<template>
  <v-card class="mx-auto overflow-hidden">
    <v-app-bar
      :style="this.appbarStyle"
      fixed
      class="px-sm-16 navbar pt-3"
      elevation="0"
      v-scroll="onScrollContent"
    >
      <div class="d-flex">
        <v-img
          src="@/assets/WebLogo.svg"
          max-width="61.63"
          max-height="56.47"
          class=""
        >
        </v-img>
        <router-link :to="{ name: 'Default' }">
          <h1 class="mx-8 title-web">DokterQ</h1>
        </router-link>
      </div>

      <div
        class="d-flex align-center justify-space-between"
        v-if="isXSmallScreenSize"
      >
        <router-link :to="{ name: 'Default' }">
          <a class="mx-3 mx-lg-8">Beranda</a>
        </router-link>
        <router-link :to="{ name: 'JanjiTemu' }">
          <a class="mx-3 mx-lg-8">Konsultasi Offline</a>
        </router-link>
        <router-link :to="{ path: '/commerce/shop/products' }">
          <a class="mx-3 mx-lg-8">Beli Obat</a>
        </router-link>

        <!-- <v-menu
          open-on-hover
          bottom
          :offset-y="offset"
          :close-on-click="closeOnClick"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="btn-kesehatan text-capitalize"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Kesehatan
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <router-link :to="{ path: `/detail/${item.name}` }">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </router-link>
            </v-list-item>
          </v-list>
        </v-menu> -->
      </div>

      <div
        v-if="!localStorage && isXSmallScreenSize"
        class="d-flex align-center justify-end flex-grow-1"
      >
        <router-link :to="{ name: 'Login' }">
          <a class="login-text mr-3 mr-lg-8">LOGIN</a>
        </router-link>
        <div class="text-center mx-3 mx-lg-8">
          <v-btn
            :to="{ path: 'register-popup' }"
            rounded
            color="success"
            class="button-register"
            dark
          >
            <router-link :to="{ path: 'register-popup' }">
              <a class="register-text">REGISTER</a>
            </router-link>
          </v-btn>
          <div
            v-if="localStorage"
            class="d-flex align-center justify-end flex-grow-1"
          >
            <v-btn>
              <div class="text-center">
                <router-link :to="{ name: 'ProfileProfil' }">
                  <v-chip outlined color="black" class="mr-8">
                    <v-avatar>
                      <v-img :src="localStorage.data.photo"></v-img>
                    </v-avatar>
                    <span class="ml-2">Hi, {{ localStorage.data.name }}</span>
                  </v-chip>
                </router-link>
              </div>
            </v-btn>
          </div>
        </div>
      </div>

      <div
        v-if="localStorage && isXSmallScreenSize"
        class="d-flex align-center justify-end flex-grow-1"
      >
        <div class="text-center">
          <router-link :to="{ path: 'profile/home' }">
            <v-chip
              v-bind="attrs"
              v-on="on"
              outlined
              color="black"
              class="mr-8"
            >
              <v-avatar>
                <v-img :src="localStorage.data.photo"></v-img>
              </v-avatar>
              <span class="ml-2">Hi, {{ localStorage.data.name }}</span>
            </v-chip>
          </router-link>
        </div>
      </div>

      <v-spacer v-if="!isXSmallScreenSize"></v-spacer>
      <v-app-bar-nav-icon
        v-if="!isXSmallScreenSize"
        class="text-black"
        @click="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <!-- <p @click="logOut()">Logout</p> -->
    </v-app-bar>
    <v-main class="pa-0 mt-16">
      <router-view />
    </v-main>
    <v-navigation-drawer
      v-if="!isXSmallScreenSize"
      absolute
      v-model="drawer"
      right
      temporary
      class="d-flex flex-column"
    >
      <v-list nav>
        <v-list-item class="py-0 d-flex justify-end">
          <v-btn icon flat width="30" height="30" @click="drawer = false">
            <v-icon> mdi-close </v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item
          class="py-0 d-flex justify-center mt-10 custom-drawer-item"
          @click="
            $router.push({ name: 'Default' }), (health_tab_is_active = false)
          "
        >
          Beranda
        </v-list-item>
        <v-list-item
          class="py-0 d-flex justify-center mt-5 custom-drawer-item"
          @click="
            $router.push({ name: 'JanjiTemu' }), (health_tab_is_active = false)
          "
        >
          Konsultasi Offline
        </v-list-item>
        <v-list-item
          class="py-0 d-flex justify-center mt-5 custom-drawer-item"
          @click="
            $router.push('/commerce/shop/products'),
              (health_tab_is_active = false)
          "
        >
          Beli Obat
        </v-list-item>
        <!-- <v-list-item
          class="py-0 d-flex justify-center mt-5 custom-drawer-item"
          @click="$router.push('/chat-dokter'), (health_tab_is_active = false)"
        >
          Konsultasi Online
        </v-list-item> -->
        <!-- <v-list-item
          class="py-0 d-flex justify-center mt-5 align-center custom-drawer-item relative"
          @click="health_tab_is_active = !health_tab_is_active"
          style="gap: 8px"
        >
          Kesehatan
          <v-icon
            >{{ health_tab_is_active ? "mdi-chevron-up" : "mdi-chevron-down" }}
          </v-icon>
        </v-list-item> -->
        <div v-if="health_tab_is_active">
          <v-list-item
            class="py-0 d-flex justify-center custom-drawer-item"
            v-for="item in items"
            :key="item"
            @click="
              $router.push(`/detail/${item.name}`),
                (health_tab_is_active = false)
            "
          >
            {{ item.title }}
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
import axios from "axios";
import { EventBus } from "../../../event-bus.js";

export default {
  name: "NavBar",
  data: () => ({
    appbarStyle: {
      backgroundColor: `rgba(0,0,0,0)`,
      transition: "all 700ms ",
      height: "5rem",
      marginTop: "0px",
      boxShadow: "none !important",
      zIndex: "4",
    },

    items: [
      { title: "Mata", name: "Mata" },
      { title: "Telinga", name: "Telinga" },
      { title: "Mulut", name: "Mulut" },
      { title: "Kulit", name: "Kulit" },
      { title: "Hidung", name: "Hidung" },
    ],
    offset: true,
    closeOnClick: false,
    localStorage: "",
    dialog: false,
    drawer: false,
    health_tab_is_active: false,
  }),
  computed: {
    isXSmallScreenSize() {
      return this.$vuetify?.breakpoint?.mdAndUp;
    },
  },
  created() {
    this.getLocalStorage();
  },
  methods: {
    onScrollContent(p) {
      if (p.currentTarget.scrollY > 11) {
        this.appbarStyle.backgroundColor = `rgba(255,255,255,1)`;
        this.appbarStyle.marginTop = "-5px";
        this.appbarStyle.boxShadow =
          "0px 0px 30px rgba(127, 137, 161,1) !important";
      } else {
        this.appbarStyle.backgroundColor = `rgba(0,0,0,0)`;
        this.appbarStyle.marginTop = "0px";
        this.appbarStyle.boxShadow = "none !important";
      }
    },

    getLocalStorage() {
      this.localStorage = JSON.parse(localStorage.getItem("data"));
    },

    logout() {
      try {
        EventBus.$emit("startLoading");
        localStorage.removeItem("data");
        axios.defaults.headers.common["Authorization"] = null;

        this.$router.push({ name: "Login" });
      } catch (error) {
        console.log(error);
      }
      EventBus.$emit("stopLoading");
    },
  },
};
</script>

<style>
.custom-drawer-item {
  font-size: 16px;
  font-weight: 600;
}
.custom-drawer-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
html {
  overflow: scroll;
  overflow-x: hidden;
}

@media (min-width: 0px) {
  a {
    text-decoration: none;
    color: black !important;
    font-size: 1.3rem;
    font-weight: 600;
  }
}

@media (max-width: 1580px) {
  a {
    text-decoration: none;
    color: black !important;
    font-size: 1rem;
    font-weight: 600;
  }
}

.mdi-config {
  color: rgba(0, 0, 0, 54%);
}

.title-web {
  font-size: 2.2rem;
}

.button-register {
  width: 10rem !important;
}

.login-text {
  font-size: 1rem;
}
</style>

<style scoped>
.register-text {
  font-size: 1rem;
  color: white !important;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none !important;
}

.btn-kesehatan {
  background-color: transparent !important;
  color: black !important;
  font-size: 1.3rem !important;
  font-weight: 600 !important;
  box-shadow: none !important;
}

@media (max-width: 1580px) {
  .btn-kesehatan {
    background-color: transparent !important;
    color: black !important;
    font-size: 1rem !important;
    font-weight: 600 !important;
    box-shadow: none !important;
  }
}

.theme--light.v-list {
  background: white !important;
  border: none !important;
  box-shadow: none !important;
  border-radius: 15px !important;
}

.v-menu__content {
  border-radius: 2rem !important;
  border: none !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
  border-radius: 15px !important;
}
</style>
