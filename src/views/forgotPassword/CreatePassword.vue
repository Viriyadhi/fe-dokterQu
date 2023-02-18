<template>
  <div
    class="d-flex flex-column container white rounded-xl absolute-center elevation-3"
  >
    <h2 class="text-h4 txt-title">Buat Password Baru</h2>
    <v-form>
      <v-text-field
        placeholder="Kata sandi"
        outlined
        prepend-inner-icon="mdi-key"
        color="secondary"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show2 ? 'text' : 'password'"
        @click:append="show2 = !show2"
        name="input-10-1"
      >
      </v-text-field>
      <v-text-field
        outlined
        class="mx-auto"
        color="secondary"
        label="Konfirmasi Kata Sandi"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show2 ? 'text' : 'password'"
        name="input-10-1"
        hint="At least 8 characters"
        @click:append="show2 = !show2"
        prepend-inner-icon="mdi-lock"
      ></v-text-field>

      <div class="container-btn d-flex align-center mt-8 justify-center">
        <v-btn block class="text-capitalize login-btn" @click="nextRoute()"
          >Selanjutnya</v-btn
        >
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "RegisterView",

  data: () => ({
    show1: false,
    show2: false,

    textField: [
      {
        label: "Nama Lengkap",
        prependInnerIcon: "mdi-account-circle",
        required: true,
      },

      {
        label: "Nomor Telepon",
        prependInnerIcon: "mdi-phone",
        required: true,
      },

      {
        label: "Alamat Email",
        prependInnerIcon: "mdi-email",
        rules: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+/.test(v) || "E-mail must be valid",
        ],
        required: true,
      },

      // {
      //   label: "Password",
      //   prependInnerIcon: "mdi-lock",
      //   required: true,
      // },

      // {
      //   label: "Konfirmasi Password",
      //   prependInnerIcon: "mdi-lock",
      //   rules: {
      //     required: (value) => !!value || "Required.",
      //     min: (v) => v.length >= 8 || "Min 8 characters",
      //     emailMatch: () => `The email and password you entered don't match`,
      //   },
      //   required: true,
      // },
    ],
  }),

  methods: {
    nextRoute() {
      this.$router.push({ name: "Default" });
    },
  },
};
</script>

<style scoped>
.absolute-center {
  transform: translate(0, 5%) !important;
}
.txt-title{
  
  margin-bottom: 5%;
}
.container {
  width: 90%;
  height:fit-content;
  padding-left:5%;
  padding-right: 5%;
  padding-top: 10%;
  padding-bottom: 10%;
}
.login-btn {
  height: auto !important;
  width: 100%;
  padding: 15px !important;
  background-color: #284860 !important;
  color: white !important;
  border-radius: 10px !important;
}
v-app {
  background-color: #f5f5f5 !important;
  height: 100vh !important;
}
.main-container {
  height: 100vh !important;
}

.main-content {
  gap: 12rem;
}
.container-btn {
  width: 100%;
}
.reg-btn {
  width: 30% !important;
}
.title-reg {
  font-size: 1.65rem !important;
}
.v-input {
  width: 100% !important;
  color: black !important;
}
.v-icon.v-icon {
  color: black !important;
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
