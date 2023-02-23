<template>
  <div class="d-flex align-center justify-center">
    <v-btn
      class="rounded-lg"
      @click="decrementCounter"
      type="button"
      name="button"
      color="primary"
      outlined
      :disabled="disableDecrement"
    >
      <v-icon>mdi-minus</v-icon>
    </v-btn>
    <input class="quantity" type="text" name="name" :value="counter" />
    <v-btn
      class="rounded-lg"
      @click="incrementCounter"
      type="button"
      name="button"
      color="primary"
      outlined
      :disabled="disabledIncrement"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <!-- <v-btn
      class="rounded-lg ms-8"
      @click="deleteItem"
      ref="cartItems"
      type="button"
      name="button"
      color="primary"
      icon
    >
      <v-icon>mdi-delete</v-icon>
    </v-btn> -->
  </div>
</template>
<script>
import axios from "axios";
import { EventBus } from "../../../event-bus.js";

export default {
  name: "ECommerceButtonCount",
  props: {
    count: {
      type: Number,
      default: 1,
    },
    incrementUrl: {
      type: String,
    },
    decrementUrl: {
      type: String,
    },
    itemId: {
      type: Number,
    },
  },
  data() {
    return {
      counter: this.count,
      disabledIncrement: false,
      disableDecrement: false,
    };
  },
  mounted() {
    this.disableDecrement = this.counter == 1;
  },
  methods: {
    incrementCounter: function () {
      this.disabledIncrement = true;
      if (this.incrementUrl) {
        axios.post(`${this.$api + this.incrementUrl}`).then(() => {
          this.disabledIncrement = false;
          this.counter == 1
            ? (this.disableDecrement = true)
            : (this.disableDecrement = false);
        });
      }
      this.counter += 1;
      this.$emit("getCount", this.counter);
    },
    decrementCounter: function () {
      this.disableDecrement = true;
      if (this.decrementUrl && !isNaN(this.counter) && this.counter != 1) {
        axios.post(`${this.$api + this.decrementUrl}`).then(() => {
          this.counter == 1
            ? (this.disableDecrement = true)
            : (this.disableDecrement = false);
        });
      }
      this.counter -= 1;
      !isNaN(this.counter) && this.counter > 1
        ? this.counter
        : (this.counter = 1);
      this.$emit("getCount", this.counter);
    },

    async deleteItem() {
      try {
        EventBus.$emit("startLoading");
        const params = {
          product_id: this.itemId,
        };
        await axios.delete(`${this.$api}/shop/cart/delete`, { params });
        EventBus.$emit("showSnackbar", "Item berhasil dihapus", "green");
        EventBus.$emit("updateCartCount");
        this.$emit("getCount", this.counter);
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
  },
};
</script>
<style scoped>
.quantity {
  --webkit-appearance: none;
  border: none;
  text-align: center;
  width: 40px;
  height: 30px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.54);
}

button:focus,
input:focus {
  outline: 0;
}
</style>
