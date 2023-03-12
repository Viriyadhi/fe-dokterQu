<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>DokterQ</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app width="256">
      <div class="d-flex flex-column align-center justify-center mt-16">
        <v-avatar size="128">
          <v-img :src="localStorage.data.photo"></v-img>
        </v-avatar>
        <p class="mt-4 mb-2">{{ localStorage.data.name }}</p>
        <p>{{ localStorage.data.email }}</p>
      </div>

      <v-divider></v-divider>
      <v-list class="list-item-gp mt-0" app nav dense>
        <v-expansion-panels flat class="pb-0">
          <v-expansion-panel>
            <div class="d-flex flex-row align-center">
              <v-icon class="ml-2">mdi-account-circle</v-icon>
              <v-expansion-panel-header class="ml-2 pb-3">
                Profil Saya
              </v-expansion-panel-header>
            </div>
            <v-expansion-panel-content>
              <v-list dense>
                <v-list-item-group color="primary">
                  <div v-for="(item, j) in items" :key="j">
                    <router-link
                      :to="{ path: `${item.href}` }"
                      class="d-flex flex-row"
                    >
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title>
                            {{ item.text }}</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </router-link>
                  </div>
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
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-title
                    class="text-sidebar"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Logout
                  </v-list-item-title>
                </template>

                <v-card flat>
                  <v-card-title class="text-h5 black--text">
                    Apakah anda yakin untuk keluar?
                  </v-card-title>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="primary" @click="dialog = false" text>
                      Tidak
                    </v-btn>

                    <v-btn color="primary" text @click="logout()"> Iya </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import axios from "axios";
import { EventBus } from "../../../event-bus";
export default {
  data() {
    return {
      drawer: true,
      isOpen: false,
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      localStorage: "",
      dialog: false,

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
  created() {
    this.getLocalStorage();
    console.log(this.localStorage);
  },
  methods: {
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
