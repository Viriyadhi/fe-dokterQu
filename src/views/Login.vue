<template>
  <v-app>
    <h2>Login Dek</h2>
    <v-btn @click="login"></v-btn>
  </v-app>
</template>

<script>
export default {
  name: "LoginView",

  methods: {
    login() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style></style>
