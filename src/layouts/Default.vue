<template>
  <v-app>
    <NavBar />

    <Footer />
  </v-app>
</template>

<script>
import NavBar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
export default {
  components: {
    NavBar,
    Footer,
  },
  name: "App",
};
</script>

<style></style>
