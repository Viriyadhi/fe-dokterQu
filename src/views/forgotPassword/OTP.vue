<template>
  <v-container>
    <div class="otp-field mx-auto">
      <v-otp-input class="" length="6" color="secondary"></v-otp-input>
    </div>
    <div class="txt-verif">
      Kode verification 051512 hanya berlaku selama 5 menit
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.otp-field{
  margin-top: 10%;
  margin-bottom: 10%;
}

.v-otp-input {
  border: px solid black !important;
}
.txt-verif{
  text-align: center;
  font-size: larger;
}
</style>
