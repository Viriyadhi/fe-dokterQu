<template>
  <v-app>
    <v-container class="px-16 py-16">
      <v-row>
        <v-col cols="12" lg="7">
          <h2 class="mb-4">Checkout</h2>

          <div class="small-line"></div>
          <h3 class="py-2">Alamat Pengiriman</h3>

          <AddressCard
            :recipient="userAddress.recipient"
            :label="userAddress.label"
            :address="userAddress.address"
            :phone="userAddress.phone"
            :province="userAddress.province"
            :city="userAddress.city"
          >
            <template v-slot:action>
              <v-card-actions>
                <div class="text-center">
                  <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        rounded
                        text
                        color="secondary"
                        v-bind="attrs"
                        v-on="on"
                        @click="getAddresses"
                      >
                        Ubah Alamat
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="text-h5 grey lighten-2">
                        Ubah Alamat
                      </v-card-title>
                      <AddressCard
                        v-for="(Address, i) in userAddresses"
                        :key="i"
                        :recipient="Address.recipient"
                        :label="Address.label"
                        :address="Address.address"
                        :phone="Address.phone"
                        :province="Address.province"
                        :city="Address.city"
                      >
                        <template v-slot:action>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="primary"
                              text
                              @click="updateAddress(Address)"
                            >
                              PIlih
                            </v-btn>
                          </v-card-actions>
                        </template>
                      </AddressCard>
                    </v-card>
                  </v-dialog>
                </div>
              </v-card-actions>
            </template>
          </AddressCard>

          <div class="small-line"></div>
          <h3 class="py-2">Detail Dokter</h3>

          <!-- <ApotikCard
            :title="detailApotek.name"
            :address="detailApotek.address"
            :location="detailApotek.location"
            :distance="detailApotek.distance"
            :image-src="detailApotek.image"
          ></ApotikCard> -->

          <div class="small-line"></div>

          <div class="d-md-flex mt-5">
            <ECommerceCardProduct
              :title="this.cartData.name"
              :price="this.cartData.price_homecare"
              :imageSrc="cartData.photo"
            >
              <template v-slot:text>
                <h5 class="font-weight-medium">
                  {{ cartData.time }} | {{ dateFormated }}
                </h5>
              </template>
            </ECommerceCardProduct>
          </div>
        </v-col>
        <v-col cols="12" lg="5">
          <v-card class="mx-auto mt-16 px-3" max-width="386" elevation="4">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold mb-3 mt-5"
                  >Ringkasan Belanja</v-list-item-title
                >
                <v-list-item-title class="font-weight-bold mb-6"
                  >Total Belanja</v-list-item-title
                >

                <div class="d-flex justify-space-between mb-5">
                  <p class="font-weight-light">Total Harga</p>
                  <p class="font-weight-light">{{ cartData.price_homecare }}</p>
                </div>
                <v-divider class="mb-5"></v-divider>
                <div class="d-flex justify-space-between mb-5">
                  <p class="font-weight-bold">Total Tagihan</p>
                  <p class="font-weight-bold">{{ cartData.price_homecare }}</p>
                </div>
                <v-btn
                  color="primary"
                  class="btn-checkout mx-auto mb-5"
                  :href="token"
                >
                  Pilih Pembayaran
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import ECommerceCardProduct from "@/components/E-commerce/ECommerceCardProduct.vue";
import AddressCard from "@/components/E-commerce/Checkout/AddressCard.vue";
// import ApotikCard from "@/components/E-commerce/Checkout/ApotikCard.vue";
import axios from "axios";
import { EventBus } from "../../../../event-bus.js";
import moment from "moment";

export default {
  name: "CheckoutView",

  props: {
    buyNowItem: [],
  },

  components: {
    ECommerceCardProduct,
    AddressCard,
    // ApotikCard,
  },

  data: () => ({
    userAddress: [],
    userAddresses: [],
    detailApotek: [],
    cartData: [],
    dialog: false,
    token: null,
    tokenData: {
      address_id: null,
      operational_time_id: null,
      date: null,
    },
  }),
  async created() {
    this.cartData = JSON.parse(localStorage.getItem("homecare"));
    await this.getDefaultAddress();
    await this.setCheckout();
    await this.getAddresses();
  },

  async mounted() {
    console.log(localStorage.getItem("homecare"));
  },

  computed: {
    // amountPrice() {f
    //   let value = this.cartData.reduce(
    //     (acc, cur) => acc + cur.product.price_int * cur.quantity,
    //     0
    //   );
    //   return "Rp. " + this.formatCurrency(value.toString());
    // },
    // amountItems() {
    //   return this.cartData.reduce((acc, cur) => acc + cur.quantity, 0);
    // },
    dateFormated() {
      return moment(this.cartData.date).format("DDD, DD MMMM YYYY");
    },
  },

  methods: {
    async getDefaultAddress() {
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

    async getAddresses() {
      try {
        EventBus.$emit("startLoading");
        const res = await axios.get(`${this.$api}/user/customer/addresses`);
        const addresses = res.data.data;
        this.userAddresses = addresses;
        console.log(this.userAddresses);
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

    // async postApotek() {
    //   try {
    //     EventBus.$emit("startLoading");
    //     const res = await axios.post(`${this.$api}/shop/get-available-apotek`, {
    //       address_id: this.userAddress.id,
    //       products: this.cartData.map(({ product: { id }, quantity }) => ({
    //         product_id: id,
    //         quantity,
    //       })),
    //     });
    //     this.detailApotek = res.data.data.apotek;
    //     this.tokenData.products = res.data.data.products;
    //   } catch (err) {
    //     var error = err;
    //     if (err.response.data.message) {
    //       error = err.response.data.message;
    //       console.log(error);
    //       EventBus.$emit("showSnackbar", error, "red");
    //     }
    //   }
    //   EventBus.$emit("stopLoading");
    // },

    async setCheckout() {
      try {
        EventBus.$emit("startLoading");

        const res = await axios.post(`${this.$api}/homecare/checkout`, {
          address_id: this.userAddress.id,
          operational_time_id: this.cartData.time_id,
          date: this.cartData.date,
        });
        this.token = res.data.data.url;
        console.log(this.token);
      } catch (err) {
        console.log(err);
        // var error = err;
        // if (err.response.data.message) {
        //   error = err.response.data.message;
        //   console.log(error);
        //   EventBus.$emit("showSnackbar", error, "red");
        // }
      }
      EventBus.$emit("stopLoading");
    },

    updateAddress(address) {
      this.userAddress = address;
      this.tokenData.address_id = address.id;
      this.setCheckout();
      this.dialog = false;
    },

    formatCurrency(value) {
      let number_string = value.replace(/[^,\d]/g, "").toString(),
        split = number_string.split(","),
        sisa = split[0].length % 3,
        currency = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

      if (ribuan) {
        let separator = sisa ? "." : "";
        currency += separator + ribuan.join(".");
      }

      currency = split[1] != undefined ? currency + "," + split[1] : currency;
      return currency;
    },
  },
};
</script>

<style scoped>
.btn-checkout {
  max-width: 15rem;
  border-radius: 10px;
  font-weight: 700;
  color: white !important;
  letter-spacing: 0.2px;
}
.small-line {
  width: 100%;
  border: 1.5px solid #c4c7d0;
}
</style>
