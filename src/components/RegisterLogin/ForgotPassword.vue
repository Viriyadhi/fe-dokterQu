<template>
    <div class="parent">
      <v-img
        src="@/assets/ForgotPw/Vector.svg"
        alt="Illustration Forgot"
        class="content-1"
        max-height="1160"
        max-width="600"
      ></v-img>
      <div class="my-card">
        <v-card
          class="rounded-xl custom-card pt-5 pb-10 px-5"
        >
          <div class="d-flex flex-row align-center gap-2 content-forgot">
            <v-icon class="align-center ">mdi-arrow-left</v-icon>
            <h2 class="card-title">Forgot Password</h2>
          </div>
          <v-img
            src="@/assets/ForgotPw/Secure messaging.svg"
            alt="Illustration Forgot"
            max-height="234"
            max-width="343"
            class="mx-auto"
          ></v-img>

          <div class="mx-auto txt-caption my-5">
            Jangan panik! Kami akan mengirimkan kode OTP untuk membuat ulang
            password anda
          </div>

          <router-view />
          <router-link :to="{ name: 'ViaEmail' }">
        <v-card class="mb-6 rounded-lg">
          <div class="container-content">
            <v-img
              src="@/assets/ForgotPw/ic_twotone-mark-email-unread.svg"
              max-height="46"
              max-width="46"
              class="icon-logo"
            ></v-img>

            <div class="d-flex flex-column">
              <h4>Via Email</h4>
              <p>Kode OTP akan dikirim melalui email</p>
            </div>
          </div>
        </v-card>
      </router-link>
      <router-link :to="{ name: 'ViaSms' }">
        <v-card class="rounded-lg">
          <div class="container-content">
            <v-img
              src="@/assets/ForgotPw/ic_twotone-textsms.svg"
              max-height="46"
              max-width="46"
              class="icon-logo"
            ></v-img>

            <div class="d-flex flex-column">
              <h4>Via Email</h4>
              <p>Kode OTP akan dikirim melalui SMS</p>
            </div>
          </div>
        </v-card>
      </router-link>
        </v-card>
      </div>
      <v-img
        src="@/assets/Register/BackgroundRegister.svg"
        max-width="428"
        max-height="410"
        class="content-2"
      ></v-img>
    </div>
</template>

<script>
export default {
  name: "RegLogLayout",
};
</script>

<style scoped>
.my-card {
  position: absolute;
  top: 20%;
  left: 35%;
}

.parent {
  height: 100vh;
}

.content-1 {
  position: relative;
  top: 0;
  left: 0;
}
.txt-caption{
  width: 70%;
  text-align: center;
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
}


.desc {
  font-size: 1.25rem;
  font-weight: 500;
}

.container-content {
  display: flex;
  flex-direction: row;
  align-content: center !important;
  gap: 1rem;
  padding: 1rem 0 0 1rem;
}

.icon-logo {
  width: 20rem !important;
  height: 20rem !important;
  color: #03acf2 !important;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) !important;
  background: rgba(33, 150, 243, 0.15) !important;
  border-radius: 20px;
}
</style>
