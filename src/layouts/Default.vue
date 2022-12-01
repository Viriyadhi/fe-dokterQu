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

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap");

* {
  font-family: "Lato", sans-serif;
  padding: 0;
  margin: 0;
}
</style>
