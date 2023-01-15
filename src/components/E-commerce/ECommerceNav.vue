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
        <v-btn icon color="black">
          <router-link :to="{ name: 'Default' }">
            <v-icon>mdi-arrow-left</v-icon>
          </router-link>
        </v-btn>
        <h4 class="title-web">Keluar Toko</h4>

        <v-spacer></v-spacer>

        <v-text-field
          class="mt-6"
          prepend-inner-icon="mdi-magnify"
          label="Filled"
          solo
          rounded
          dense
        ></v-text-field>
        <v-spacer></v-spacer>

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
        <v-divider vertical></v-divider>
        <v-icon class="mx-8 mdi-config">mdi-cog</v-icon>
      </v-app-bar>
      <v-main class="pa-0 mt-16">
        <router-view />
      </v-main>
    </v-card>
  </div>
</template>
<script>
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
  }),
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
      // console.log(bar);
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
