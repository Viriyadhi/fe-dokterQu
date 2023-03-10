<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>DokterQ</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi mdi-bell</v-icon>
      </v-btn>
      <v-dialog width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-img
            v-bind="attrs"
            max-height="48"
            max-width="48"
            :aspect-ratio="1 / 1"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            v-on="on"
            class="rounded-circle"
          />
        </template>

        <v-card>
          <v-card-title>Hello</v-card-title>
        </v-card>
      </v-dialog>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list class="list-item-gp" nav dense>
        <!-- <v-list-item-group v-for="item in items" :key="item"> -->
        <v-list-item-group class="text-notif">
          <v-list-item @click="isOpen = !isOpen">
            <v-list-item-icon>
              <v-icon>mdi mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-h6">Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <div v-if="isOpen">
            <v-list-item>
              <v-list-item-content>
                <div class="child-text">• Total Pendapatan</div>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                 <div class="child-text">• Total Pembelian</div>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <div class="child-text">• Pembelian Terbaru</div>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-item-group>

        <v-list-item-group class="text-notif">
          <v-list-item @click="isOpen1 = !isOpen1">
            <v-list-item-icon>
              <v-icon>mdi mdi-receipt-text-check</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-h6">Pesanan</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <div v-if="isOpen1">
            <v-list-item>
              <v-list-item-icon>
                <!-- <v-icon>{{ item.icon }}</v-icon> -->
              </v-list-item-icon>
              <v-list-item-content>
                 <div class="child-text">• Total Pendapatan</div>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <!-- <v-icon>{{ item.icon }}</v-icon> -->
              </v-list-item-icon>
              <v-list-item-content>
                <div class="child-text">• Inprogress</div>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <!-- <v-icon>{{ item.icon }}</v-icon> -->
              </v-list-item-icon>
              <v-list-item-content>
                <div class="child-text">• Pesanan Selesai</div>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-item-group>

        <v-list-item-group class="text-notif">
          <v-list-item @click="isOpen2 = !isOpen2">
            <v-list-item-icon>
              <v-icon>mdi mdi-package-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-h6">Produk</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <div v-if="isOpen2">
            <v-list-item>
              <v-list-item-icon>
                <!-- <v-icon>{{ item.icon }}</v-icon> -->
              </v-list-item-icon>
              <v-list-item-content>
                <div class="child-text">• Daftar Produk</div>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <!-- <v-icon>{{ item.icon }}</v-icon> -->
              </v-list-item-icon>
              <v-list-item-content>
                <div class="child-text">• Tambah Stok</div>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-item-group>

        <v-list-item-group class="text-notif">
          <v-list-item @click="isOpen3 = !isOpen3">
            <v-list-item-icon>
              <v-icon>mdi mdi-chart-bar-stacked</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-h6">Statistik</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <div v-if="isOpen3">
            <v-list-item>
              <v-list-item-icon>
                <!-- <v-icon>{{ item.icon }}</v-icon> -->
              </v-list-item-icon>
              <v-list-item-content>
                <div class="child-text">• Sparkline Pesanan/hari</div>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <!-- <v-icon>{{ item.icon }}</v-icon> -->
              </v-list-item-icon>
              <v-list-item-content>
                <div class="child-text">• Sparkline Pendapatan</div>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      isOpen: false,
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      items: [
        {
          icon: "mdi mdi-view-dashboard",
          title: "Dashboard",
        },
        {
          icon: "mdi mdi-receipt-text-check",
          title: "Pesanan",
        },
        {
          icon: "mdi mdi-package-variant",
          title: "Produk",
        },
        {
          icon: "mdi mdi-chart-bar-stacked",
          title: "Statistik",
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
  .child-text{
      font-size: 15px;
      font-weight: bold;
      color: rgb(0, 0, 0,54%)
  }
</style>