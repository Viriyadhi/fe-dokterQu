<template>
  <v-app>
    <div class="logreg">
      <v-container>
        <v-row>
          <v-col cols="7" class="d-flex align-center">
            <div class="d-flex flex-column">
              <v-img
                src="@/assets/Register/IllustratitionRegisLogin.svg"
                max-height="551.9"
                width="529"
                class="ml-16"
              ></v-img>
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
