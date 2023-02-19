<template>
  <v-app>
    <v-dialog v-model="loading" fullscreen transition="fade-transition">
      <v-container
        fluid
        fill-height
        style="background-color: rgba(255, 255, 255, 0.5)"
      >
        <v-layout justify-center align-center>
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-layout>
      </v-container>
    </v-dialog>
    <v-main class="pa-0">
      <router-view class="main-height" id="chart-id" />
    </v-main>
    <v-snackbar v-model="snackbar" :color="snackbarColor">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import { EventBus } from "../event-bus";
import axios from "axios";
export default {
  data: () => ({
    loading: false,
    snackbar: false,
    snackbarColor: "",
    text: "",
  }),
  created() {
    var data = JSON.parse(localStorage.getItem("data"));
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${data.data.token}`;
  },
  mounted() {
    EventBus.$on("startLoading", () => (this.loading = true));
    EventBus.$on("stopLoading", () => (this.loading = false));
    EventBus.$on("showSnackbar", (text, color) => {
      this.text = text;
      this.snackbarColor = color;
      this.snackbar = true;
    });
    // console.log(data.data.token);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap");
body {
  background: #fffdfd !important;
}
* {
  margin: 0;
  padding: 0;
  font-family: "Lato", sans-serif;
}
</style>
