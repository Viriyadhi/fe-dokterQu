<template>
  <v-app>
    <div class="logreg d-flex align-center">
      <v-container>
        <v-row>
          <v-col cols="7" class="d-flex flex-row justify-center align-center">
            <v-img
              src="@/assets/Register/IllustratitionRegisLogin.svg"
              max-height="551.9"
              max-width="529"
            ></v-img>
          </v-col>

          <v-col cols="5" class="d-flex align-center">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "FormLayout",
};
</script>

<style scoped>
.logreg {
  background-color: #f5f5f5;
  height: 100vh;
}

.login-link {
  text-decoration: underline;
}
</style>
