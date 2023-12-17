<template>
  <v-app>
    <div class="parent">
      <v-img
        src="@/assets/ForgotPw/Vector.svg"
        alt="Illustration Forgot"
        class="content-1 "
        max-height="1160"
        max-width="600"
      ></v-img>
      <div class="my-card px-5">
        <v-card class="rounded-xl custom-card pa-5" max-width="676">
          <div class="d-flex flex-row align-center gap-2 content-forgot">
            <v-icon>mdi-arrow-left</v-icon>
            <h2 class="card-title">OTP Verification Code</h2>
          </div>
          <v-img
            src="@/assets/ForgotPw/Secure messaging.svg"
            alt="Illustration Forgot"
            max-height="234"
            max-width="343"
            class="mx-auto"
          ></v-img>

          <router-view />
        </v-card>
      </div>
      <v-img
        src="@/assets/Register/BackgroundRegister.svg"
        max-width="428"
        max-height="410"
        class="content-2"
      ></v-img>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "RegLogLayout",
};
</script>

<style scoped>
.my-card {
  position: absolute;
  /* top: 20%;  */
  /* left: 35%; */
  z-index: 10;
}

.parent {
  min-height: 100vh;
  display: flex; 
  justify-content: center;  
  align-items: center;
}

.content-1 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.content-2 {
  position: absolute;
  bottom: 0;
}

.mdi-arrow-left::before {
  font-size: 3rem;
  color: black;
}
.gap-2 {
  gap: 2rem;
}

.card-title {
  align-content: center !important;
  font-size: 2rem;
  font-weight: 900;
  color: #000000;
}

.custom-card {
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25) !important;
  background-color: white; 
}
</style>