<template>
  <v-container class="d-flex flex-column container pr-xl-16">
    <div class="d-flex flex-column container-forgot mx-auto">
      <p class="desc text-center">
        Jangan panik! Kami akan mengirimkan kode OTP untuk membuat ulang
        password anda
      </p>

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
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.container-forgot {
  width: 80%;
  margin: 2rem;
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
