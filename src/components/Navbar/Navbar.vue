<template>
  <div>
    <v-card>
      <v-app-bar
        :style="this.appbarStyle"
        fixed
        class="px-16 navbar pt-3"
        elevation="0"
        v-scroll="onScrollContent"
      >
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
        <div class="d-flex align-center justify-space-between">
          <router-link :to="{ name: 'Default' }">
            <a class="mx-8">Beranda</a>
          </router-link>
          <router-link :to="{ name: 'JanjiTemu' }">
            <a class="mx-8">Janji Temu</a>
          </router-link>
          <router-link :to="{ path: '/commerce/shop/products' }">
            <a class="mx-8">Beli Obat</a>
          </router-link>
          <router-link :to="{ path: '/chat-dokter' }">
            <a class="mx-8">Chat Dokter</a>
          </router-link>

          <v-menu
            open-on-hover
            bottom
            :offset-y="offset"
            :close-on-click="closeOnClick"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="ml-8 mr-16 btn-kesehatan text-capitalize"
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
          </v-menu>
        </div>

        <div
          v-if="!localStorage"
          class="d-flex align-center justify-end flex-grow-1"
        >
          <router-link :to="{ name: 'Login' }">
            <a class="login-text mr-8">LOGIN</a>
          </router-link>
          <div class="text-center mx-8">
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
          </div>
        </div>

        <div
          v-if="localStorage"
          class="d-flex align-center justify-end flex-grow-1"
        >
          <div class="text-center">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
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
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  Privacy Policy
                </v-card-title>

                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="primary" @click="dialog = false" text>
                    Gajadi
                  </v-btn>

                  <v-btn color="primary" text @click="logout()">
                    I accept
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </div>

        <v-divider vertical></v-divider>
        <v-icon class="mx-8 mdi-config">mdi-cog</v-icon>
        <!-- <p @click="logOut()">Logout</p> -->
      </v-app-bar>
      <v-main class="pa-0 mt-16">
        <router-view />
      </v-main>
    </v-card>
  </div>
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
  }),

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
html {
  overflow: scroll;
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: black !important;
  font-size: 1.1rem;
  font-weight: 600;
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
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  box-shadow: none !important;
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
