<template>
  <v-container>
    <div class="d-flex flex-column container-otp mx-auto">
      <v-otp-input class="" length="6" color="secondary"></v-otp-input>
      <p>
        One-Time Password (OTP) adalah kode yang yang dikirimkan melalui SMS,
        email, telepon, maupun WhatsApp ke nomor ponsel terdaftar dari pengguna
        yang mengajukan permintaan.
      </p>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.container-otp {
  width: 60%;
  margin: 2rem;
}

.v-otp-input {
  border: px solid black !important;
}
</style>
