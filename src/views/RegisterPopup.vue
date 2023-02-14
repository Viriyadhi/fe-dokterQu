<template>
  <div class="parent-container d-flex justify-center align-center">
    <v-card class="d-flex flex-column justify-center rounded-lg container-box">
      <div class="text-center">
        <v-card-text class="text-h6">Silahkan registrasi sesuai role anda</v-card-text>
        <div>disini tempat registrasinya sir, OKE ga??</div>
      </div>
      <div class="d-flex flex-column align-center my-7">
        <div @click="moveButton" class="card-content rounded-lg row">
          <div class="col-2">
            <v-avatar class="avatar">
              <v-icon color="black"> mdi-account </v-icon>
            </v-avatar>
          </div>
          <div class="col-10">
            <div class="text-subtitle-2">Registrasi Sebagai User</div>
            <div class="text-caption">Klik Tombol ini jika anda seorang costumer</div>
          </div>
        </div>
        <div @click="moveButton" class="card-content rounded-lg row">
          <div class="col-2">
            <v-avatar class="avatar">
              <v-icon color="black"> mdi-doctor </v-icon>
            </v-avatar>
          </div>
          <div class="col-10">
            <div class="text-subtitle-2">Registrasi Sebagai Dokter</div>
            <div class="text-caption">Klik tombol ini jika anda mendaftar sebagai dokter</div>
          </div>
        </div>
        <div @click="moveButton" class="card-content rounded-lg row">
          <div class="col-2">
            <v-avatar class="avatar">
              <v-icon color="black"> mdi-store </v-icon>
            </v-avatar>
          </div>
          <div class="col-10">
            <div class="text-subtitle-2">Registrasi Sebagai Apotek</div>
            <div class="text-caption">Klik tombol ini jika anda mendaftar sebagai apotek</div>
          </div>
        </div>
      </div>
    </v-card>
    <div class="image-accessories">
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
.container-box {
  padding: 10px;
  width: 35%;
  border-style: solid;
  border-width: 3px;
  border-color: #edf2f4;
}
.parent-container {
  height: 100%;
  width: 100%;
  background-image: url("@/assets/bg-regist-pop.svg");
}
.card-content {
  background-color: white;
  width: 90%;
  border-style: solid;
  border-width: 3px;
  border-color: #edf2f4;
  margin: 3px;
  padding: 3px;
}
.card-content:hover {
  background-color: rgb(238, 232, 232);
}

.avatar {
  background-color: #2195f359;
}
.image-accessories {
  position: fixed;
  right: 3cm;
  bottom: 0;
}
</style>
