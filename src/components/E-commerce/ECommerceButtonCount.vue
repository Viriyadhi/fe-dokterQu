<template>
  <div>
    <button
      class="btn btn--minus"
      @click="decrementCounter"
      type="button"
      name="button"
    >
      -
    </button>
    <input class="quantity" type="text" name="name" :value="counter" />
    <button
      class="btn btn--plus"
      @click="incrementCounter"
      type="button"
      name="button"
    >
      +
    </button>
  </div>
</template>
<script>
import axios from "axios";

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
  },
  data() {
    return {
      counter: this.count,
    };
  },
  methods: {
    incrementCounter: function () {
      if (this.incrementUrl) {
        axios.post(`${this.$api + this.incrementUrl}`);
      }
      this.counter += 1;
      this.$emit("getCount", this.counter);
    },
    decrementCounter: function () {
      if (this.decrementUrl && !isNaN(this.counter) && this.counter != 1) {
        axios.post(`${this.$api + this.decrementUrl}`);
      }
      this.counter -= 1;
      !isNaN(this.counter) && this.counter > 1
        ? this.counter
        : (this.counter = 1);
      this.$emit("getCount", this.counter);
    },
  },
};
</script>
<style scoped>
.right-wraps {
  height: 40px;
  display: flex;
  margin-left: 2rem;
}

.quantity {
  --webkit-appearance: none;
  border: none;
  text-align: center;
  width: 40px;
  height: 30px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.54);
}

.btn {
  border: 1px solid #4caf50;
  width: 40px;
  height: 30px;
  background-color: white;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 800;
  color: #4caf50;
  cursor: pointer;
}
button:focus,
input:focus {
  outline: 0;
}
</style>
