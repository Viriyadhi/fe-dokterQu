<template>
  <v-app>
    <div class="logreg d-flex">
      <v-container>
        <v-row>
          <v-col cols="7" class="d-flex align-center login-image">
            <div class="d-flex flex-column">
              <v-img
                src="@/assets/Register/IllustratitionRegisLogin.svg"
                max-height="451.9"
                max-width="429"
              ></v-img>
              <router-link to="/login" class="login-link">
                Sudah punya akun? Login
              </router-link>
            </div>
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
