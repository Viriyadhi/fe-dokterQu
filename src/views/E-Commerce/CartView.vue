<template>
  <v-app>
    <div class="pa-5 pa-sm-8 pa-md-12 pa-lg-16">
      <v-row>
        <v-col cols="12" md="6" offset-md="1">
          <h1>Keranjang</h1>
          <v-checkbox
            label="Pilih Semua"
            @click="bulkCheckbox"
            v-model="isBulkActive"
          ></v-checkbox>
          <div
            class="d-md-flex mt-3 mt-md-5"
            v-for="(cartItem, i) in cartItems"
            :key="i"
          >
            <v-checkbox v-model="selected" :value="cartItem"></v-checkbox>
            <ECommerceCardProduct
              :title="cartItem.product.name"
              :price="cartItem.product.price"
              :image-src="cartItem.product.images"
            >
              <template v-slot:button-counter>
                <ECommerceButtonCount
                  class="mt-8 mt-md-15"
                  :count="cartItem.quantity"
                  :increment-url="cartItem.links.add_cart"
                  :decrement-url="cartItem.links.remove_cart"
                  @getCount="(value) => setTotalItem(value, cartItem.id)"
                />
                <v-btn
                  class="rounded-lg"
                  @click="deleteItem(i, cartItem.product.id)"
                  type="button"
                  name="button"
                  color="primary"
                  icon
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
              <template v-slot:text>
                <h5 class="font-weight-medium">
                  {{ cartItem.quantity }} barang
                </h5>
              </template>
            </ECommerceCardProduct>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="mt-3 mt-sm-0">
          <v-card class="mx-auto mt-5 mt-sm-16 px-3" max-width="386" elevation="4">
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
                <v-btn
                  color="primary"
                  class="btn-checkout mx-auto mb-5"
                  :disabled="this.selected == 0 ? true : false"
                  @click="checkout"
                >
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
  created() {},

  mounted() {
    this.getCartData();
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
        if (err.response.data.message) {
          error = err.response.data.message;
          console.log(error);
          EventBus.$emit("showSnackbar", error, "red");
        }
      }
      EventBus.$emit("stopLoading");
    },

    async deleteItem(productIndex, itemId) {
      try {
        EventBus.$emit("startLoading");
        const params = {
          product_id: itemId,
        };
        const del = await axios.delete(`${this.$api}/shop/cart/delete`, {
          params,
        });
        if (del.status == 200) {
          EventBus.$emit("showSnackbar", "Item berhasil dihapus", "green");
          EventBus.$emit("updateCartCount");
          await this.getCartData();
          this.selected = [];
          this.$emit("getCount", this.counter);
        }

        console.log(productIndex, itemId);
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

    checkout() {
      this.$router.push({
        name: "CheckoutView",
        // params: {
        //   cartData: this.selected,
        // },
      });
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

  watch: {
    selected: {
      deep: true,
      handler(newSelected) {
        this.isBulkActive = newSelected.length === this.cartItems.length;
        localStorage.setItem("selected", JSON.stringify(newSelected));
      },
    },
  },
};
</script>
<style scoped>
.btn-checkout {
  max-width: 15rem;
  background: #ffffff;
  border-radius: 10px;
  font-weight: 700;
  color: #4caf50;
  letter-spacing: 0.2px;
}
</style>