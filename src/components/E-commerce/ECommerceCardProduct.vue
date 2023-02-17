<template>
  <v-card class="d-md-flex" elevation="0" min-width="730" max-height="175">
    <v-img max-height="175" max-width="160" :src="imageSrc"> </v-img>
    <div class="px-md-4 py-md-3">
      <h4 class="font-weight-medium title-card">
        {{ title }}
      </h4>
      <div class="mt-4 d-flex flex-row justify-space-between">
        <h4 class="font-weight-bold">{{ price }}</h4>
        <ECommerceButtonCount
          class="me-md-15"
          :value="count"
          @getValue="setCount"
        />
      </div>
      <h5 class="font-weight-medium">{{ count }} barang</h5>
    </div>
  </v-card>
</template>

<script>
import ECommerceButtonCount from "@/components/E-commerce/ECommerceButtonCount.vue";

export default {
  name: "ECommerceCardProduct",
  props: {
    title: {
      type: String,
      default:
        "Afrin Oxymetazoline HCI 15mL (semprot hidung) Afrin Oxymetazoline HCI 15mL (semprot hidung)",
    },
    price: {
      type: String,
      default: "Rp. 90.000,00",
    },
    imageSrc: {
      type: String,
      default:
        "https://d2qjkwm11akmwu.cloudfront.net/products/784781_4-11-2020_10-37-14-1665779461.jpeg",
    },
    itemCount: {
      type: Number,
      default: 0,
    },
  },
  components: {
    ECommerceButtonCount,
  },
  data() {
    return {
      count: this.itemCount,
    };
  },
  methods: {
    setCount(value) {
      this.count = value;
      this.$emit("getItemCount", this.count);
    },
  },
};
</script>

<style scoped>
.title-card {
  width: 28.5rem !important;
}
</style>