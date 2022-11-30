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
        <h1 class="mx-8 title-web">DokterQ</h1>
        <div class="d-flex align-center justify-space-between">
          <router-link :to="{ name: 'home' }">
            <a class="mx-8">Beranda</a>
          </router-link>
          <router-link :to="{ name: 'about' }">
            <a class="mx-8">Janji Temu</a>
          </router-link>
          <router-link :to="{ name: 'test' }">
            <a class="mx-8">Beli Obat</a>
          </router-link>

          <router-link :to="{ name: '/' }">
            <v-menu open-on-hover bottom :offset-y="offset">
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
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </router-link>
        </div>

        <div class="d-flex align-center justify-center">
          <router-link :to="{ name: 'Login' }">
            <a class="login-text mr-8">LOGIN</a>
          </router-link>
          <div class="text-center mx-8">
            <v-btn rounded color="success" class="button-register" dark>
              <router-link :to="{ name: 'Register' }">
                <a class="register-text">REGISTER</a>
              </router-link>
            </v-btn>
          </div>
          <v-divider vertical></v-divider>
          <v-icon class="mx-8 mdi-config">mdi-cog</v-icon>
        </div>
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
      { title: "Mata" },
      { title: "Telinga" },
      { title: "Mulut" },
      { title: "Kulit" },
      { title: "Hidung" },
    ],
    offset: true,
  }),
  methods: {
    onScrollContent(p) {
      console.log(p.currentTarget.scrollY);
      console.log(this.appbarStyle);
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
  margin-left: 26rem;
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
