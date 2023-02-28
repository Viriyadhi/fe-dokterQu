<template>
  <div class="d-flex elevation-2 rounded-lg flex-column container absolute-center custom-position">
    <h2 class="title-reg">Masukkan Emailmu</h2>
    <v-text-field
    outlined
      color="secondary"
      v-for="(item, index) in textField"
      :key="index"
      :label="item.label"
      :prepend-inner-icon="item.prependInnerIcon"
      :rules="item.rules"
      :required="item.required"
      v-model="email"
    >
    </v-text-field>

    <div class="container-btn d-flex align-center mt-8 justify-end">
      <v-btn
        class="reg-btn rounded-lg px-16"
        @click="login()"
      >
        Selanjutnya
      </v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import RegisterLoginLayout from "@/layouts/RegisterLogin/RegisterLoginLayout.vue";
// import RegisterLoginLayout from "@/layouts/RegisterLogin/RegisterLoginLayout.vue";
import { EventBus } from "../../../event-bus";
export default {
  name: "RegisterView",

  components: {
    // RegisterLoginLayout,
    // RegisterLoginLayout,
  },

  data: () => ({
    show1: false,
    show2: false,
    email: '',

    textField: [
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
    async login() {
      try {
        const response = await axios.post(`${this.$api}/auth/password/forgot`, {
        email: this.email
      })
      if (response.status == 200) {
        this.$router.push({name: 'Otp'});
        localStorage.setItem('email', this.email);
      }
      console.log(response);
      } catch (err) {
        EventBus.$emit("showSnackbar", 'Email is Invalid', "red");
      }
    },
  },
};
</script>

<style scoped>
@media (min-width: 0px) {
  .custom-position {
    margin-top: -80px;
  }
}
@media (min-width: 600px) {
  .custom-position {
    margin-top: -50px;
  }
}
@media (min-width: 1200px) {
  .custom-position {
    margin-top: 0px;
  }
}
.absolute-center {
  /* top: 50% !important; */
  transform: translate(0, 0) !important;
}
.container-btn {
  width: 100%;
}
.container {
  background-color: white;
  width: 85%;
  padding: 5%;
}
.title-reg {
  font-size: 2.5rem !important;
  font-size: 500;
}
.v-input {
  margin-top: 2%;
  width: 100% !important;
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

.reg-btn {
  height: auto !important;
  padding: 15px !important;
  width: 100% !important;
  background-color: #284860 !important;
  color: white !important;
  border-radius: 10px !important;
}
.login-link {
  text-decoration: underline;
}
</style>