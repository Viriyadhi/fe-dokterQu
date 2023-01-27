<template>
  <div class="d-flex flex-column container absolute-center">
    <h2 class="title-reg">Login</h2>
    <v-form ref="form" @submit.prevent>
      <v-text-field
        v-model="email"
        color="secondary"
        v-for="(item, index) in textField"
        :key="index"
        :label="item.label"
        :prepend-inner-icon="item.prependInnerIcon"
        :rules="item.rules"
        :required="item.required"
      >
      </v-text-field>

      <v-text-field
        v-model="password"
        color="secondary"
        label="Kata Sandi"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        @click:append="show1 = !show1"
        prepend-inner-icon="mdi-lock"
        :rules="passwordRules"
      ></v-text-field>
    </v-form>

    <div class="container-btn d-flex align-center mt-8 justify-space-around">
      <router-link :to="{ name: 'Forgot' }" class="login-link">
        Lupa Password?
      </router-link>

      <v-btn
        class="reg-btn rounded-lg px-16"
        color="secondary"
        @click="login()"
      >
        Login
      </v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterView",

  components: {},

  data: () => ({
    show1: false,
    show2: false,
    email: "",
    password: "",
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
    ],
  }),

  methods: {
    async login() {
      if (this.$refs.form.validate()) {
        try {
          const resLogin = await axios.post(`${this.$api}/auth/login`, {
            email: this.email,
            password: this.password,
          });
          if (resLogin.status == 201) {
            localStorage.setItem("data", JSON.stringify(resLogin.data));
            this.$router.push({ path: "/" });
          }
          console.log(resLogin);
        } catch (err) {
          console.log(err);
        }
      }
    },

    async test() {
      const res = await axios.get("aoshdoasddasosaddaso");
      console.log(res);
    },
  },
};
</script>

<style scoped>
.absolute-center {
  top: 50% !important;
  transform: translate(0, 80%) !important;
}

.container-btn {
  width: 40%;
}
.reg-btn {
  width: 30% !important;
}
.title-reg {
  font-size: 3rem !important;
  font-size: 500;
}
.v-input {
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

.login-link {
  text-decoration: underline;
}
</style>
