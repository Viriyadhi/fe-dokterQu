<template>
  <v-container class="form--logreg">
    <v-card>
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Riwayat Pembelian Obat</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-slot:extension>
          <v-tabs v-model="tab" align-with-title>
            <v-tabs-slider color="orange"></v-tabs-slider>
            <v-tab
              v-for="item in tabData"
              :key="item.status"
              @click="getHistoryShop(item.status)"
            >
              {{ item.text }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(item, index) in tabData" :key="index" class="py-8">
          <div v-if="dataHistories.length > 0">
            <v-card-title>{{ item.text }}</v-card-title>
            <v-card
              v-for="history in dataHistories"
              :key="history.id"
              outlined
              flat
              class="ma-8 pa-8 d-flex flex-row"
            >
              <v-img
                contain
                max-height="150"
                max-width="250"
                :src="history.product.image"
              ></v-img>
              <div class="d-flex flex-column">
                <v-card-text>
                  <v-card-title>{{ history.product.name }}</v-card-title>
                  <v-card-subtitle
                    >{{ history.order_item_count }} barang x
                    {{ history.product.price }}</v-card-subtitle
                  >
                  <v-card-title>{{ history.apotek.address }}</v-card-title>
                </v-card-text>
                <v-card-action>
                  <v-dialog v-model="dialogDetail" width="500" v-if="false">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn v-bind="attrs" v-on="on"> Detail </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="text-h5 grey lighten-2">
                        Privacy Policy
                      </v-card-title>

                      <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="primary"
                          text
                          @click="dialogDetail = false"
                        >
                          I accept
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-dialog v-model="dialogCancelOrder" width="500" v-if="history.links.cancel_order">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        color="red"
                        dark
                        class="ms-4"
                      >
                        Cancel
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="text-h5 grey lighten-2">
                        Apakah anda yakin?
                      </v-card-title>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="primary"
                          text
                          @click="dialogCancelOrder = false"
                        >
                          Kembali
                        </v-btn>
                        <v-btn
                          color="red"
                          text
                          @click="cancelOrder(history.links.cancel_order)"
                        >
                          Iya
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-card-action>
              </div>
              <v-spacer></v-spacer>
            </v-card>
          </div>
          <h1 v-else class="text-center">No Data</h1>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import { EventBus } from "../../../event-bus.js";

export default {
  name: "RiawayatView",

  data: () => ({
    dialogDetail: false,
    dialogCancelOrder: false,
    dataHistories: [],
    tab: null,
    tabData: [
      {
        text: "Semua Pesanan",
        status: "",
      },
      {
        text: "Pesanan Belum Dibayar",
        status: "waiting_payment",
      },
      {
        text: "Menunggu Konfirmasi",
        status: "waiting_confirmation",
      },
      {
        text: "Pesanan Dibatalkan",
        status: "",
      },
      {
        text: "Sedang Berlangsung",
        status: "on_going",
      },
      {
        text: "Selesai",
        status: "finished",
      },
    ],
  }),

  mounted() {
    this.getHistoryShop("");
  },

  methods: {
    async getHistoryShop(status) {
      try {
        this.dataHistories = [];
        EventBus.$emit("startLoading");
        const response = await axios.get(
          `${this.$api}/user/customer/history/shop?status=${status}`
        );
        this.dataHistories = response.data.data.orders;
        console.log(this.dataHistories);
      } catch (err) {
        this.dataHistories = [];
        var error = err;
        if (err.response.data.message) {
          error = err.response.data.message;
          console.log(error);
          EventBus.$emit("showSnackbar", error, "red");
        }
      }
      EventBus.$emit("stopLoading");
    },
    async cancelOrder(cancelUrl) {
      try {
        const response = await axios
          .post(`${this.$api}${cancelUrl}`)
          .then((res) => {
            this.tab = 0;
            EventBus.$emit("showSnackbar", res.data.message, "red");
            this.dialogCancelOrder = false;
          });
        this.getHistoryShop("");
        console.log(response);
      } catch (err) {
        var error = err;
        if (err.response.data.message) {
          error = err.response.data.message;
          console.log(error);
          EventBus.$emit("showSnackbar", error, "red");
        }
      }
    },
  },
};
</script>

<style></style>
