<template>
  <div class="luar d-flex justify-center align-center">
    <div class="d-flex flex-column justify-center rounded-lg kotak">
      <div class="text-center">
        <div class="text-h6">Silahkan registrasi sesuai role anda</div>
        <div>disini tempat registrasinya sir, OKE ga??</div>
      </div>
      <div class="d-flex flex-column align-center my-7 anak1">
        <div @click="moveButton" class="kotak1 rounded-lg row">
          <div class="col-2">
            <v-avatar class="ava">
              <v-icon color="black"> mdi-account </v-icon>
            </v-avatar>
          </div>
          <div class="col-10">
            <div class="text-subtitle-2">Registrasi Sebagai User</div>
            <div class="text-caption">Klik Tombol ini jika anda seorang costumer</div>
          </div>
        </div>
        <div class="kotak1 rounded-lg row">
          <div class="col-2">
            <v-avatar class="ava">
              <v-icon color="black"> mdi-doctor </v-icon>
            </v-avatar>
          </div>
          <div class="col-10">
            <div class="text-subtitle-2">Registrasi Sebagai Dokter</div>
            <div class="text-caption">Klik tombol ini jika anda mendaftar sebagai dokter</div>
          </div>
        </div>
        <div class="kotak1 rounded-lg row">
          <div class="col-2">
            <v-avatar class="ava">
              <v-icon color="black"> mdi-store </v-icon>
            </v-avatar>
          </div>
          <div class="col-10">
            <div class="text-subtitle-2">Registrasi Sebagai Apotek</div>
            <div class="text-caption">Klik tombol ini jika anda mendaftar sebagai apotek</div>
          </div>
        </div>
      </div>
    </div>
    <div class="gambar1">
      <img src="@/assets/Dentist.svg" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'RegisterPopup',
  methods: {
    moveButton() {
      this.$router.push('/');
    },
  },
};
</script>
<style>
.kotak {
  padding: 10px;
  width: 30%;
  border-style: solid;
  border-width: 3px;
  border-color: #edf2f4;
}
.luar {
  height: 100%;
  width: 100%;
  background-image: url("@/assets/bg-regist-pop.svg");
}
.kotak1 {
  background-color: white;
  width: 90%;
  border-style: solid;
  border-width: 3px;
  border-color: #edf2f4;
  margin: 3px;
  padding: 3px;
}
.kotak1:hover {
  background-color: rgb(238, 232, 232);
}

.ava {
  background-color: #2195f359;
}
.gambar1 {
  position: fixed;
  right: 3cm;
  bottom: 0;
}
</style>
