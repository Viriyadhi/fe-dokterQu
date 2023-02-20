<template>
  <v-app>
    <v-container class="px-16 py-16">
      <v-row>
        <v-col cols="12" lg="7">
          <h2 class="mb-6">Checkout</h2>
          <h4>Alamat Pengiriman</h4>

          <div class="small-line"></div>

          <v-card class="my-4" max-width="800" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="mb-4">
                  <v-card-title class="pa-0">
                    {{ userAddress.label }}
                  </v-card-title>
                </div>
                <v-list-item-subtitle class="black--text">
                  {{ userAddress.phone }}
                </v-list-item-subtitle>

                <v-list-item-subtitle class="black--text">
                  {{ userAddress.address }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn rounded text color="secondary"> Ubah Alamat </v-btn>
            </v-card-actions>
          </v-card>

          <div class="small-line"></div>

          <v-card class="my-4" max-width="800" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="mb-4">
                  <v-card-title class="pa-0">
                    {{ detailApotek.name }}
                  </v-card-title>
                </div>
                <v-list-item-subtitle class="black--text">
                  {{ detailApotek.address }}
                </v-list-item-subtitle>

                <v-list-item-subtitle class="black--text">
                  {{ detailApotek.location }},
                  {{ detailApotek.distance }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="grey">
                <v-img :src="detailApotek.image"></v-img>
              </v-list-item-avatar>
            </v-list-item>
          </v-card>

          <div class="small-line"></div>

          <div
            class="d-md-flex mt-5"
            v-for="cartDatum in cartData"
            :key="cartDatum.id"
          >
            <ECommerceCardProduct
              :title="cartDatum.product.name"
              :price="cartDatum.product.price"
              :image-src="cartDatum.product.images"
            >
              <template v-slot:text>
                <h5 class="font-weight-medium">
                  {{ cartDatum.quantity }} barang
                </h5>
              </template>
            </ECommerceCardProduct>
          </div>
        </v-col>
        <v-col cols="12" lg="5">
          <v-card class="mx-auto my-12" max-width="320">
            <div class="d-flex flex-row align-center justify-center">
              <v-btn
                outlined
                color="primary"
                class="rounded-lg button-checkout"
              >
                Makin Hemat pakai promo
              </v-btn>
            </div>
            <v-card-title class="font-weight-bold pb-0"
              >Ringkasan Belanja</v-card-title
            >
            <v-card-title class="py-0 font-weight-bold">
              Total Belanja</v-card-title
            >

            <div class="d-flex flex-row align-center justify-space-between">
              <v-card-text class="text-start pt-4">
                Total harga (2 barang)
              </v-card-text>
              <v-card-text class="text-end pt-4">Rp. 54.036</v-card-text>
            </div>

            <div class="small-line mx-4"></div>

            <!-- <v-card-title>Tonight's availabilit</v-card-title>

            <div class="d-flex flex-row align-center justify-space-between">
              <v-card-text class="text-start py-0"> asdasd </v-card-text>
              <v-card-text class="text-end py-0"> asdasd </v-card-text>
            </div>

            <div class="d-flex flex-row align-center justify-space-between">
              <v-card-text class="text-start pb-0"> asdasd </v-card-text>
              <v-card-text class="text-end pb-0"> asdasd </v-card-text>
            </div> -->

            <div class="d-flex flex-row align-center justify-space-between">
              <v-card-text class="text-start font-weight-bold">
                Total Tagihan
              </v-card-text>
              <v-card-text class="text-end"> Rp. 54.036 </v-card-text>
            </div>

            <v-card-actions class="d-flex flex-row align-center justify-center">
              <v-btn
                id="pay-button"
                color="primary"
                class="button-checkout"
                @click="snapMitrans"
              >
                Pilih Pembayaran
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import ECommerceCardProduct from "@/components/E-commerce/ECommerceCardProduct.vue";
import axios from "axios";
import { EventBus } from "../../../event-bus.js";

export default {
  name: "CheckoutView",

  components: {
    ECommerceCardProduct,
  },

  props: {
    cartData: {
      type: Array,
    },
  },
  data: () => ({
    userAddress: [],
    detailApotek: [],
    tokenData: {
      address_id: null,
      products: null,
    },
    token: null,
  }),
  created() {
    //
  },

  async mounted() {
    await this.getAddress();
    await this.postApotek();
    await this.generateToken();
  },

  methods: {
    async getAddress() {
      try {
        EventBus.$emit("startLoading");
        const res = await axios.get(
          `${this.$api}/user/customer/default/address`
        );
        this.userAddress = res.data.data;
        this.tokenData.address_id = this.userAddress.id;
      } catch (err) {
        var error = err;
        if (err.response.data.message) {
          error = err.response.data.message;
          console.log(error);
          EventBus.$emit("showSnackbar", error, "red");
        }
      }
      EventBus.$emit("stopLoading");
    },

    async postApotek() {
      try {
        EventBus.$emit("startLoading");
        const res = await axios.post(`${this.$api}/shop/get-available-apotek`, {
          address_id: this.userAddress.id,
          products: this.cartData.map(({ product: { id }, quantity }) => ({
            product_id: id,
            quantity,
          })),
        });
        this.detailApotek = res.data.data.apotek;
        this.tokenData.products = res.data.data.products;
      } catch (err) {
        var error = err;
        if (err.response.data.message) {
          error = err.response.data.message;
          console.log(error);
          EventBus.$emit("showSnackbar", error, "red");
        }
      }
      EventBus.$emit("stopLoading");
    },

    async generateToken() {
      try {
        EventBus.$emit("startLoading");

        const res = await axios.post(
          `${this.$api}/shop/get-midtrans-snap-token`,
          this.tokenData
        );
        this.token = res.data.data.token;
        console.log(res.data.data.url);
      } catch (err) {
        var error = err;
        if (err.response.data.message) {
          error = err.response.data.message;
          console.log(error);
          EventBus.$emit("showSnackbar", error, "red");
        }
      }
      EventBus.$emit("stopLoading");
    },

    snapMitrans() {
      window.snap.pay(`${this.token}`, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          alert("payment success!");
          console.log(result);
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          alert("wating your payment!");
          console.log(result);
        },
        onError: function (result) {
          /* You may add your own implementation here */
          alert("payment failed!");
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
          console.log("close");
        },
      });
    },
  },
};
</script>

<style scoped>
.button-checkout {
  width: 90% !important;
}

.small-line {
  width: 100%;
  border: 1.5px solid #c4c7d0;
}
</style>
