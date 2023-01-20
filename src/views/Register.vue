<template>
  <div class="d-flex flex-column container absolute-center">
    <h2 class="title-reg">Register</h2>
    <v-form ref="form" @submit.prevent>
      <div v-for="(data, i) in formData" :key="i">
        <v-text-field
          v-if="
            data.name === 'name' ||
            data.name === 'phone' ||
            data.name === 'email'
          "
          color="secondary"
          :label="data.label"
          :prepend-inner-icon="data.prependInnerIcon"
          :rules="data.rules"
          :required="data.required"
          v-model="models[data.name]"
        >
        </v-text-field>

        <v-text-field
          v-if="data.name === 'password'"
          color="secondary"
          label="Kata Sandi"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          hint="At least 8 characters"
          @click:append="show1 = !show1"
          prepend-inner-icon="mdi-lock"
          :required="data.required"
          v-model="models[data.name]"
        ></v-text-field>

        <v-text-field
          v-if="data.name === 'password_confirmation'"
          color="secondary"
          label="Konfirmasi Kata Sandi"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show2 ? 'text' : 'password'"
          name="input-10-1"
          hint="At least 8 characters"
          @click:append="show2 = !show2"
          prepend-inner-icon="mdi-lock"
          :required="data.required"
          v-model="models[data.name]"
        ></v-text-field>

        <v-file-input
          v-if="data.name === 'photo'"
          color="secondary"
          prepend-inner-icon="mdi-account-circle"
          label="Foto Profil"
          accept="image/*"
          chips
          :required="data.required"
          outlined
          v-model="models[data.name]"
        >
        </v-file-input>

        <v-select
          v-if="data.name === 'gender'"
          :label="data.label"
          :required="data.required"
          color="secondary"
          :items="data.options"
          item-text="label"
          item-value="value"
          v-model="models[data.name]"
          @change="onChange"
        >
        </v-select>
      </div>
    </v-form>

    <div class="container-btn d-flex align-center mt-8 justify-space-around">
      <v-btn
        class="reg-btn rounded-lg px-16"
        color="secondary"
        @click="register"
        @submit.prevent
      >
        Daftar
      </v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RegisterView",

  data: () => ({
    show1: false,
    show2: false,
    formData: [],
    roleId: 3,
    models: {},
  }),
  async mounted() {
    await this.getFormData();
  },

  methods: {
    async register() {
      try {
        const obj = this.models;
        obj["role"] = "3";
        console.log(obj);
        const regUser = await axios.post(`${this.$api}/auth/register`, obj);
        console.log(regUser);
      } catch (error) {
        console.log(error.response.data.errors);
      }
    },

    onChange(e) {
      console.log(e);
    },

    async getFormData() {
      try {
        const res = await axios.get(`${this.$api}/form/register/customer`);
        const dataForm = res.data;
        this.formData = dataForm;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.container-btn {
  width: 40%;
}
.reg-btn {
  width: 30% !important;
}
mnr-cost-perzone .title-reg {
  font-size: 3rem !important;
  font-size: 500;
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
</style>
