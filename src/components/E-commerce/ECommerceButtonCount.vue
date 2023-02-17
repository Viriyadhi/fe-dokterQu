<template>
  <div>
    <button
      class="btn btn--minus"
      @click="changeCounter('-1')"
      type="button"
      name="button"
    >
      -
    </button>
    <input class="quantity" type="text" name="name" :value="counter" />
    <button
      class="btn btn--plus"
      @click="changeCounter('1')"
      type="button"
      name="button"
    >
      +
    </button>
  </div>
</template>
<script>
export default {
  name: "ECommerceButtonCount",
  props: {
    value: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      counter: this.value,
    };
  },
  methods: {
    changeCounter: function (num) {
      this.counter += +num;
      !isNaN(this.counter) && this.counter > 0
        ? this.counter
        : (this.counter = 0);
      this.$emit("getValue", this.counter);
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
  -webkit-appearance: none;
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
