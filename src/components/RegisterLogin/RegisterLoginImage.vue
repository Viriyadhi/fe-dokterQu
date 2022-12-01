<template>
  <v-app>
    <div class="main-content d-flex flex-row disable-scrolling">
      <div class="d-flex flex-column">
        <v-img
          src="@/assets/Register/IllustratitionRegisLogin.svg"
          alt="Illustration Register"
          max-height="722"
          max-width="853"
        ></v-img>
        <div class="sudah-punya-akun">
          <p class="sudah-punya">Belum punya akun?</p>
          <router-link :to="{ name: 'Register' }" class="login-link">
            Registrasi
          </router-link>
        </div>
      </div>
      <div class="flex-grow-1 disable-scrolling">
        <router-view />
      </div>
    </div>

    <v-img
      src="@/assets/Register/BackgroundRegister.svg"
      max-width="428"
      max-height="410"
      class="background-register"
    ></v-img>
  </v-app>
</template>

<script>
export default {
  name: "RegLogLayout",
};
</script>

<style scoped>
.disable-scrolling {
  overflow-y: hidden !important;
  overflow-x: hidden !important;
  overflow: hidden !important;
}
.v-application--wrap {
  min-height: 0 !important;
  overflow-y: hidden !important;
  overflow-x: hidden !important;
  overflow: hidden !important;
}
.main-content {
  gap: 12rem;
}
.container-btn {
  width: 40%;
}
.reg-btn {
  width: 30% !important;
}
.title-reg {
  font-size: 3rem !important;
  font-size: 500;
}
.v-input__control {
  width: 90% !important;
}

.v-text-field input {
  color: black !important;
}

.background-register {
  bottom: 8rem;
}
.sudah-punya-akun {
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.sudah-punya {
  font-size: 1.25rem;
  align-content: center;
  align-items: center;
  margin: 0;
  font-weight: 600;
}

.login-link {
  text-decoration: underline;
}
</style>
