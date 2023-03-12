<template>
  <v-container class="form--logreg">
    <v-card>
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Riwayat Pembelian Obat</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-slot:extension>
          <v-tabs v-model="tab" align-with-title>
            <v-tabs-slider color="orange"></v-tabs-slider>
            <v-tab v-for="item in items" :key="item">
              {{ item.tab }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item" class="py-8">
          <v-card-title>{{ item.text }}</v-card-title>
          <v-card
            v-for="i in 5"
            :key="i"
            outlined
            flat
            class="ma-8 pa-8 d-flex flex-row"
          >
            <v-img
              contain
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="150"
              max-width="250"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
            <div class="d-flex flex-column">
              <v-card-title>Barang yang dibeli</v-card-title>
              <v-card-title>Total Belanja</v-card-title>
            </div>
            <v-spacer></v-spacer>
            <v-chip>{{ item.tab }}</v-chip>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "RiawayatView",

  data: () => ({
    tab: null,
    items: [
      {
        tab: "Semua",
        text: "Semua Pesanan",
      },
      {
        tab: "Belum Dibayar",
        text: "Pesanan Belum Dibayar",
      },
      {
        tab: "Dikemas",
        text: "Pesanan Dikemas",
      },
      {
        tab: "Dikirim",
        text: "Pesanan Dikirim",
      },
      {
        tab: "Selesai",
        text: "Pesanan Selesai",
      },
      {
        tab: "Dibatalkan",
        text: "Pesanan Dibatalkan",
      },
    ],
  }),
};
</script>

<style></style>
