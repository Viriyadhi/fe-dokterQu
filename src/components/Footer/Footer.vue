<template>
  <v-container class="d-flex flex-row justify-space-between mt-16 px-8">
    <v-row>
      <v-col cols="12" sm="5" md="5" class="pa-0">
        <div class="d-flex flex-column">
          <div class="d-flex flex-row align-center">
            <v-img
              src="@/assets/WebLogo.svg"
              max-width="61.63"
              max-height="56.47"
              class=""
            ></v-img>
            <h2 class="ml-6">DokterQ</h2>
          </div>
          <p class="footer-desc mt-6">
            Nam posuere accumsan porta. Integer id tincidunt sit amet sed
            libero.
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="7" md="5" class="pa-0 ">
        <v-row no-gutters justify="start">
          <v-col 
            v-for="(item, i) in content"
            :key="i"
            cols="6"
            sm="6"
            md="6"
            lg="6"
            xl="4"
          >
            <h2 class="footer-title">{{ item.title }}</h2>
            <p class="mt-2">{{ item.text1 }}</p>
            <p>{{ item.text2 }}</p>
            <p>{{ item.text3 }}</p>
            <p>{{ item.text4 }}</p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="2" class="pa-0 ">
        <div class="d-flex flex-column">
          <div class="d-flex flex-row align-center container-logo">
            <v-avatar v-for="(icon, i) in logo" :key="i" size="37">
              <v-icon class="icon-footer">{{ icon.logoIcon }}</v-icon>
            </v-avatar>
          </div>
          <v-menu open-on-hover bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="mt-4 btn-kesehatan text-capitalize"
                dark
                v-bind="attrs"
                v-on="on"
              >
                <v-icon color="blue" class="mr-2">mdi-earth</v-icon>

                English- En
                <v-icon class="ml-6">mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-col>
    </v-row>

    <!-- <div class="d-flex flex-column">
      <div class="d-flex flex-row align-center">
        <v-img
          src="@/assets/WebLogo.svg"
          max-width="61.63"
          max-height="56.47"
          class=""
        ></v-img>
        <h2 class="ml-6">DokterQ</h2>
      </div>
      <p class="footer-desc mt-6">
        Nam posuere accumsan porta. Integer id tincidunt sit amet sed libero.
      </p>
    </div>

    <v-row no-gutters justify="start" class="red">
      <v-col
        v-for="(item, i) in content"
        :key="i"
        cols="12"
        xs="12"
        sm="6"
        lg="4"
        xl="4"
      >
        <h2 class="footer-title">{{ item.title }}</h2>
        <p class="mt-2">{{ item.text1 }}</p>
        <p>{{ item.text2 }}</p>
        <p>{{ item.text3 }}</p>
        <p>{{ item.text4 }}</p>
      </v-col>
    </v-row>

    <div class="d-flex flex-column">
      <div class="d-flex flex-row align-center container-logo">
        <v-avatar v-for="(icon, i) in logo" :key="i" size="37">
          <v-icon class="icon-footer">{{ icon.logoIcon }}</v-icon>
        </v-avatar>
      </div>
      <v-menu open-on-hover bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mt-4 btn-kesehatan text-capitalize"
            dark
            v-bind="attrs"
            v-on="on"
          >
            <v-icon color="blue" class="mr-2">mdi-earth</v-icon>

            English- En
            <v-icon class="ml-6">mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div> -->
  </v-container>
</template>

<script>
export default {
  name: "FooterView",

  data: () => ({
    items: [
      { title: "Mata" },
      { title: "Telinga" },
      { title: "Mulut" },
      { title: "Kulit" },
      { title: "Hidung" },
    ],
    logo: [
      {
        logoIcon: "mdi-facebook",
      },
      {
        logoIcon: "mdi-linkedin",
      },
      {
        logoIcon: "mdi-twitter",
      },
      {
        logoIcon: "mdi-instagram",
      },
    ],
    content: [
      {
        title: "Company",
        text1: "home",
        text2: "Curabitur egestas",
        text3: "Curabitur egestas",
        text4: "lorem ipsum",
      },
      {
        title: "Services",
        text1: "about",
        text2: "Curabitur egestas",
        text3: "Curabitur egestas",
        text4: "lorem ipsum ",
      },

      {
        title: "Resources",
        text1: "kesehatan",
        text2: "Curabitur egestas",
        text3: "Curabitur egestas",
      },
    ],
  }),
};
</script>

<style scoped>
.btn-kesehatan {
  background-color: transparent !important;
  color: black !important;
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  box-shadow: none !important;
  border: 1px solid #03acf2;
}
.footer-desc {
  width: 57%;
}
.footer-title {
  color: #03acf2 !important;
}

.icon-footer {
  color: #03acf2 !important;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) !important;
  background: rgba(0, 0, 0, 0.08) !important;
  border-radius: 8px;
}
.container-logo {
  gap: 1.3rem;
}
</style>
