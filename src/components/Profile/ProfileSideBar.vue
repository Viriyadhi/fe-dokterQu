<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>DokterQ</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <div class="d-flex flex-column align-center justify-center mt-16">
        <v-avatar color="orange" size="128">
          <span class="white--text text-h5">128</span>
        </v-avatar>
        <p>Nama</p>
        <p>Email</p>
      </div>

      <v-divider></v-divider>
      <v-list class="list-item-gp mt-0" app nav dense>
        <v-expansion-panels flat class="pb-0">
          <v-expansion-panel v-for="(item, i) in 1" :key="i">
            <div class="d-flex flex-row align-center">
              <v-icon class="ml-2">mdi-account-circle</v-icon>
              <v-expansion-panel-header class="ml-2 pb-3">
                Profil Saya
              </v-expansion-panel-header>
            </div>
            <v-expansion-panel-content>
              <v-list dense>
                <v-list-item-group color="primary">
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <router-link
                      :to="{ path: `${item.href}` }"
                      class="d-flex flex-row"
                    >
                      <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title> {{ item.text }}</v-list-item-title>
                      </v-list-item-content>
                    </router-link>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-list-item-group flat color="primary">
          <router-link :to="{ path: '/profile/riwayat' }">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-medication</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-sidebar">
                  Pesanan Obat
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link :to="{ path: '/profile/riwayat' }">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-doctor</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-sidebar">
                  Pesanan HomeCare
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-sidebar">
                Logout
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      isOpen: false,
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      items: [
        {
          icon: "mdi-account-circle",
          title: "Dashboard",
          text: "Profil",
          href: "/profile/profil",
        },
        {
          icon: "mdi-map-marker",
          title: "Pesanan",
          text: "Alamat",
          href: "/profile/alamat",
        },
      ],
    };
  },
  methods: {
    hasChild(item) {
      return Array.isArray(item.children) && item.children.length > 0;
    },
    computeGroupExpanded(item, $route) {
      return $route.matched.map((item) => item.path).includes(item.path);
    },
  },
};
</script>

<style>
.child-text {
  font-size: 15px;
  font-weight: bold;
  color: rgb(0, 0, 0, 54%);
}

.text-sidebar {
  font-size: 1rem !important;
}

.v-expansion-panel-content__wrap {
  padding-bottom: 0 !important;
}
</style>
