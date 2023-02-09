<template>
  <v-app>
    <ECommerceNav />

    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/Footer/Footer";
import ECommerceNav from "@/components/E-commerce/ECommerceNav.vue";
export default {
  name: "CommerceLayout",

  components: {
    Footer,
    ECommerceNav,
  },
};
</script>

<style></style>
