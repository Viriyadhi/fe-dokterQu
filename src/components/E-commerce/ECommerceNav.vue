<template>
  <v-card>
    <v-app-bar
      :style="this.appbarStyle"
      fixed
      class="px-sm-11 navbar pt-3"
      elevation="0"
      v-scroll="onScrollContent"
    >
      <v-btn icon color="black">
        <router-link :to="{ name: 'Default' }">
          <v-icon>mdi-arrow-left</v-icon>
        </router-link>
      </v-btn>
      <h4 class="title-web" v-if="isXSmallScreenSize">Keluar Toko</h4>

      <v-spacer></v-spacer>

      <v-text-field
        class="mt-6"
        prepend-inner-icon="mdi-magnify"
        label="Search"
        solo
        rounded
        dense
      ></v-text-field>
      <v-spacer></v-spacer>

      <div
        v-if="!localStorage && isXSmallScreenSize"
        class="d-flex align-center justify-end flex-grow-1"
      >
        <router-link :to="{ name: 'Login' }">
          <a class="login-text mr-8">LOGIN</a>
        </router-link>
        <div class="text-center mx-8">
          <v-btn
            :to="{ name: 'Register' }"
            rounded
            color="success"
            class="button-register"
            dark
          >
            <router-link :to="{ name: 'Register' }">
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
          <router-link :to="{ name: 'ProfileHome' }">
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
    </v-app-bar>
    <v-main class="pa-0 mt-16">
      <router-view />
    </v-main>
  </v-card>
</template>
<script>
import axios from "axios";
import { EventBus } from "../../../event-bus.js";
export default {
  name: "NavBar",
  data: () => ({
    cartItems: [],
    appbarStyle: {
      backgroundColor: `rgba(0,0,0,0)`,
      transition: "all 700ms ",
      height: "5rem",
      marginTop: "0px",
      boxShadow: "none !important",
      zIndex: "4",
      localStorage: "",
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
    dialog: false,
  }),
  created() {
    this.getLocalStorage();
    EventBus.$on("updateCartCount", () => {
      this.getCartData();
    });
  },
  computed: {
    isXSmallScreenSize() {
      return this.$vuetify?.breakpoint?.mdAndUp;
    },
  },
  mounted() {
    console.log(this);
    this.getCartData();
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
    async getCartData() {
      try {
        EventBus.$emit("startLoading");
        const response = await axios.get(`${this.$api}/shop/carts`);
        const cart = response.data.data;
        const length = cart.length;
        this.cartItems = length;
        this.$store.commit("updateCartCount", length);
        console.log(this.cartItems);
      } catch (err) {
        var error = err;
        if (err.response.data.errors) {
          error = err.response.data.errors;
          for (const key in error) {
            console.log(`${error[key]}`);
            EventBus.$emit("showSnackbar", error[key], "red");
          }
          console.log(error);
        }
      }
      EventBus.$emit("stopLoading");
    },
  },
};
</script>
<style scoped>
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
  font-size: 1.25rem;
}
.button-register {
  width: 10rem !important;
}
.login-text {
  font-size: 1rem;
}
</style>
<style scoped>
.container-keluar {
  display: flex;
  flex-direction: row;
}
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
