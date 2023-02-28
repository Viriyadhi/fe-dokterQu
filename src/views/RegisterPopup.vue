<template>
  <div class="parent-container d-flex justify-center align-center">
    <v-card
      class="d-flex flex-column justify-center rounded-lg container-box"
      style="z-index: 10"
    >
      <div class="text-center">
        <v-card-text class="text-h6"
          >Silahkan registrasi sesuai role anda</v-card-text
        >
        <div>Silakan pilih salah satu tombol dibawah ini</div>
      </div>
      <div class="d-flex flex-column align-center my-7">
        <div @click="registerCustomer" class="card-content rounded-lg row">
          <div class="col-2">
            <v-avatar class="avatar">
              <v-icon color="black"> mdi-account </v-icon>
            </v-avatar>
          </div>
          <div class="col-10">
            <div class="text-subtitle-2">Registrasi Sebagai User</div>
            <div class="text-caption">
              Klik Tombol ini jika anda seorang costumer
            </div>
          </div>
        </div>

        <div @click="registerDoctor" class="card-content rounded-lg row">
          <div class="col-2">
            <v-avatar class="avatar">
              <v-icon color="black"> mdi-doctor </v-icon>
            </v-avatar>
          </div>
          <div class="col-10">
            <div class="text-subtitle-2">Registrasi Sebagai Dokter</div>
            <div class="text-caption">
              Klik tombol ini jika anda mendaftar sebagai dokter
            </div>
          </div>
        </div>

        <div @click="registerApotek" class="card-content rounded-lg row">
          <div class="col-2">
            <v-avatar class="avatar">
              <v-icon color="black"> mdi-store </v-icon>
            </v-avatar>
          </div>
          <div class="col-10">
            <div class="text-subtitle-2">Registrasi Sebagai Apotek</div>
            <div class="text-caption">
              Klik tombol ini jika anda mendaftar sebagai apotek
            </div>
          </div>
        </div>
      </div>
    </v-card>
    <div class="image-accessories pr-sm-8 pr-md-16" style="z-index: 1">
      <img src="@/assets/Dentist.svg" />
    </div>
  </div>
</template>
<script>
export default {
  name: "RegisterPopup",

  data: () => ({
    //
  }),

  created() {
    //
  },

  mounted() {
    //
  },

  computed: {
    //
  },

  methods: {
    registerCustomer() {
      this.$router.push("/register-login/register-customer");
    },
    registerDoctor() {
      this.$router.push("/register-login/register-doctor");
    },
    registerApotek() {
      this.$router.push("/register-login/register-apotek");
    },
  },
};
</script>
<style>
@media (max-width: 600px) {
  .container-box {
    width: 90%;
    padding: 10px;
    border-style: solid;
    border-width: 3px;
    border-color: #edf2f4;
  }
}
@media (min-width: 600px) {
  .container-box {
    width: 70%;
    padding: 10px;
    border-style: solid;
    border-width: 3px;
    border-color: #edf2f4;
  }
}
@media (min-width: 900px) {
  .container-box {
    width: 50%;
    padding: 10px;
    border-style: solid;
    border-width: 3px;
    border-color: #edf2f4;
  }
}
@media (min-width: 1200px) {
  .container-box {
    padding: 10px;
    width: 35%;
    border-style: solid;
    border-width: 3px;
    border-color: #edf2f4;
  }
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
  right: 0;
  bottom: 0;
}
</style>
