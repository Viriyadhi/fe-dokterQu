<template>
  <v-container>
    <div class="otp-field mx-auto px-sm-5 px-lg-10">
      <v-otp-input
        class=""
        length="6"
        color="secondary"
        @finish="otp()"
        v-model="code"
      ></v-otp-input>
    </div>
    <div class="txt-verif">
      Kode verification ini hanya berlaku selama 5 menit
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import { EventBus } from "../../../event-bus";

export default {
  name: "OtpView",

  components: {},

  data: () => ({
    show1: false,
    show2: false,
    code: "",

    textField: [
      {
        label: "Code OTP",
        // prependInnerIcon: "mdi-otp",
        rules: [
          (v) => !!v || "Code is required",
          (v) => /.+@.+/.test(v) || "Code must be valid",
        ],
        required: true,
      },
    ],
  }),

  methods: {
    async otp() {
      try {
        const response = await axios.post(
          `${this.$api}/auth/password/check-reset-code`,
          {
            code: this.code,
          }
        );
        if (response.status == 202) {
          this.$router.push({ name: "CreatePassword" });
          localStorage.setItem("code", this.code);
        }
        console.log(response);
      } catch (err) {
        EventBus.$emit("showSnackbar", "Code is Invalid", "red");
      }
    },
  },
};
</script>

<style>
.otp-field {
  margin-top: 10%;
  margin-bottom: 10%; 
}

.v-otp-input {
  border: px solid black !important;
}
.txt-verif {
  text-align: center;
  font-size: larger;
}
</style>