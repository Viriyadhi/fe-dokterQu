<template>
  <v-app>
    <div class="px-16 py-16">
      <v-row>
        <v-col cols="6" offset-md="1">
          <h1>Keranjang</h1>
          <v-checkbox
            label="Pilih Semua"
            @click="bulkCheckbox"
            v-model="isBulkActive"
          ></v-checkbox>
          <div
            class="d-md-flex mt-5"
            v-for="cartItem in cartItems"
            :key="cartItem.id"
          >
            <v-checkbox v-model="selected" :value="cartItem"></v-checkbox>
            <ECommerceCardProduct
              :title="cartItem.product.name"
              :price="cartItem.product.price"
              :image-src="cartItem.product.images"
            >
              <template v-slot:button-counter>
                <ECommerceButtonCount
                  class="me-md-15"
                  :count="cartItem.quantity"
                  :increment-url="cartItem.links.add_cart"
                  :decrement-url="cartItem.links.remove_cart"
                  @getCount="(value) => setTotalItem(value, cartItem.id)"
                />
              </template>
              <template v-slot:text>
                <h5 class="font-weight-medium">
                  {{ cartItem.quantity }} barang
                </h5>
              </template>
            </ECommerceCardProduct>
          </div>
        </v-col>
        <v-col cols="4">
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
                  <p class="font-weight-light">
                    Total Harga ({{ amountItems }} barang)
                  </p>
                  <p class="font-weight-light">{{ amountPrice }}</p>
                </div>
                <v-divider class="mb-5"></v-divider>
                <div class="d-flex justify-space-between mb-5">
                  <p class="font-weight-bold">Total Tagihan</p>
                  <p class="font-weight-bold">{{ amountPrice }}</p>
                </div>
                <v-btn color="primary" class="btn-checkout mx-auto mb-5">
                  Checkout
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>
<script>
import ECommerceCardProduct from "@/components/E-commerce/ECommerceCardProduct.vue";
import ECommerceButtonCount from "@/components/E-commerce/ECommerceButtonCount.vue";
import axios from "axios";
import { EventBus } from "../../../event-bus.js";

export default {
  name: "CartView",
  components: {
    ECommerceCardProduct,
    ECommerceButtonCount,
  },
  data() {
    return {
      isBulkActive: false,
      selected: [],
      cartItems: [],
    };
  },
  mounted() {
    this.getCartData();
  },
  watch: {
    selected: {
      deep: true,
      handler(newSelected) {
        this.isBulkActive = newSelected.length === this.cartItems.length;
      },
    },
  },
  computed: {
    amountPrice() {
      let value = this.selected.reduce(
        (acc, cur) => acc + cur.product.price_int * cur.quantity,
        0
      );
      return "Rp. " + this.formatCurrency(value.toString());
    },
    amountItems() {
      return this.selected.reduce((acc, cur) => acc + cur.quantity, 0);
    },
  },
  methods: {
    bulkCheckbox() {
      this.selected.length == this.cartItems.length
        ? (this.selected = [])
        : (this.selected = [...this.cartItems]);
    },
    setTotalItem(value, id) {
      const item = this.cartItems.find((item) => item.id === id);
      if (item) item.quantity = value;
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
    async getCartData() {
      try {
        EventBus.$emit("startLoading");
        const response = await axios.get(`${this.$api}/shop/carts`);
        this.cartItems = response.data.data;
      } catch (err) {
        var error = err;
        if (err.response.data.errors) {
          error = err.response.data.errors;
          for (const key in error) {
            console.log(`${error[key]}`);
            EventBus.$emit("showSnackbar", error[key], "red");
          }
          console.log(error);
        }
      }
      EventBus.$emit("stopLoading");
    },
  },
};
</script>
<style scoped>
.btn-checkout {
  max-width: 15rem;
  background: #ffffff;
  border: 2px solid #4caf50;
  border-radius: 10px;
  font-weight: 700;
  color: #4caf50;
  letter-spacing: 0.2px;
}
</style>
