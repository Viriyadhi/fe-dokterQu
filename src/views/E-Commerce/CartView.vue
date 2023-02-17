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
            v-for="cartItem in this.cartItems"
            :key="cartItem.id"
          >
            <v-checkbox
              v-model="selected"
              :key="cartItem.id"
              :value="cartItem"
            ></v-checkbox>
            <ECommerceCardProduct
              :title="cartItem.product.name"
              :price="cartItem.product.price"
              :image-src="cartItem.product.images"
              :item-count="cartItem.quantity"
              @getItemCount="(value) => setTotalItem(value, cartItem.id)"
            />
          </div>
        </v-col>
        <v-col cols="4">
          <v-card class="mx-auto mt-16" max-width="386" elevation="4">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold mb-3"
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
export default {
  name: "CartView",
  components: {
    ECommerceCardProduct,
  },
  data() {
    return {
      isBulkActive: false,
      selected: [],
      cartItems: [
        {
          id: 1,
          quantity: 5,
          product: {
            id: 2,
            name: "Ducimus Aut Quia Libero Dolor Nobis Maxime Inventore. ",
            price: "Rp41.123",
            price_int: 41123,
            images:
              `http://103.31.39.5:2023/assets/images/default/default_image_product.webp`,
          },
          links: {
            product: "/shop/product/nam-enim-vel-ut-ut",
            add_cart: "/shop/cart/add?product_id=2",
            remove_cart: "/shop/cart/remove?product_id=2",
          },
        },
        {
          id: 3,
          quantity: 5,
          product: {
            id: 3,
            name: "Ducimus Aut Quia Libero Dolor Nobis Maxime InventoreDucimus Aut Quia Libero Dolor Nobis Maxime Inventore",
            price: "Rp41.902",
            price_int: 41902,
            images:
              "http://103.31.39.5:2023/assets/images/default/default_image_product.webp",
          },
          links: {
            product: "/shop/product/commodi-voluptatem-est-architecto-non",
            add_cart: "/shop/cart/add?product_id=3",
            remove_cart: "/shop/cart/remove?product_id=3",
          },
        },
      ],
    };
  },
  watch: {
    selected: {
      handler(newSelected) {
        this.isBulkActive = newSelected.length === this.cartItems.length;
      },
      deep: true,
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
    checkboxValue(data) {
      return {
        product_id: data.product.id,
        quantity: data.quantity,
      };
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