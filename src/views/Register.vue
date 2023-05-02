<template>
  <div class="d-flex flex-column container pr-xl-16 mt-xl-16">
    <v-card class="pa-8 form--logreg">
      <v-card-title class="title-reg">Register</v-card-title>
      <v-form ref="form" @submit.prevent>
        <div v-for="(data, i) in formData" :key="i">
          <div class="form--logreg__group w-100">
            <p v-if="data.label !== 'Role'">{{ data.label }}</p>
            <v-text-field
              v-if="data.name === 'name' || data.name === 'phone'"
              :prepend-inner-icon="data.prepend_inner_icon"
              :rules="[(v) => !!v || `${data.label} Harus diisi`]"
              :required="data.required"
              v-model="models[data.name]"
              color="284860"
              clearable
              single-line
              outlined
            >
            </v-text-field>

            <v-text-field
              v-if="data.name === 'email'"
              :prepend-inner-icon="data.prepend_inner_icon"
              :rules="[
                (v) => !!v || 'E-mail is required',
                (v) => /.+@.+/.test(v) || 'E-mail must be valid',
              ]"
              :required="data.required"
              v-model="models[data.name]"
              color="284860"
              clearable
              single-line
              outlined
            >
            </v-text-field>
            <v-text-field
              v-if="data.name === 'password'"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              :rules="[(v) => !!v || `${data.label} Harus diisi`]"
              hint="At least 8 characters"
              @click:append="show1 = !show1"
              prepend-inner-icon="mdi-lock"
              :required="data.required"
              v-model="models[data.name]"
              color="284860"
              clearable
              single-line
              outlined
            ></v-text-field>

            <v-text-field
              v-if="data.name === 'password_confirmation'"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show2 ? 'text' : 'password'"
              hint="At least 8 characters"
              :rules="[(v) => !!v || `Password tidak sama`]"
              @click:append="show2 = !show2"
              prepend-inner-icon="mdi-lock"
              :required="data.required"
              v-model="models[data.name]"
              color="284860"
              clearable
              single-line
              outlined
            ></v-text-field>

            <v-file-input
              v-if="data.name === 'photo'"
              :required="data.required"
              @change="inputPhoto"
              color="284860"
              clearable
              single-line
              outlined
            ></v-file-input>

            <v-select
              v-if="data.name === 'gender'"
              :required="data.required"
              :items="data.options"
              :rules="[(v) => !!v || `${data.label} Harus diisi`]"
              v-model="models[data.name]"
              color="284860"
              item-text="label"
              item-value="value"
              clearable
              single-line
              outlined
            ></v-select>

            <v-select
              v-if="data.name === 'province_id'"
              :required="data.required"
              :items="provinceData"
              :rules="[(v) => !!v || `${data.label} Harus diisi`]"
              v-model="models[data.name]"
              color="284860"
              item-text="label"
              item-value="value"
              clearable
              single-line
              outlined
            ></v-select>

            <v-select
              v-if="data.name === 'city_id'"
              :required="data.required"
              :items="cityData"
              :rules="[(v) => !!v || `${data.label} Harus diisi`]"
              v-model="models[data.name]"
              color="284860"
              item-text="label"
              item-value="value"
              clearable
              single-line
              outlined
            ></v-select>
          </div>
        </div>
      </v-form>

      <v-btn
        v-if="routeParams == 'customer'"
        block
        class="text-capitalize login-btn"
        @click="register"
        >Daftar</v-btn
      >

      <v-btn
        v-if="routeParams == 'doctor' || routeParams == 'apotek'"
        block
        class="text-capitalize login-btn"
        @click="register"
        >Selanjutnya</v-btn
      >

      <div class="d-flex flex-row sudah-akun mt-1">
        <p class="ma-0">Sudah punya akun?</p>
        <router-link :to="{ name: 'Login' }" class="login-link">
          Login
        </router-link>
      </div>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import { EventBus } from "../../event-bus.js";

export default {
  name: "RegisterView",

  data: () => ({
    show1: false,
    show2: false,
    formData: [],
    roleId: 3,
    models: {},
    provinceData: [],
    cityData: [],
    routeParams: null,
  }),

  async mounted() {
    var route = this.$route.params.user;
    this.routeParams = route;
    await this.getFormData();
    await this.getProvince();
  },

  watch: {
    "models.province_id": {
      deep: true,
      handler: async function () {
        try {
          this.cityData = [];
          const res = await axios.get(
            `${this.$api}/location/cities?province_id=${this.models.province_id}}`
          );
          const dataCity = res.data.data;

          dataCity.forEach((item) => {
            item["label"] = item.city_name;
            item["value"] = item.city_id;
          });

          this.cityData = dataCity;
        } catch (error) {
          console.log(error);
        }
      },
    },
  },

  methods: {
    inputPhoto(file) {
      if (this.routeParams == "customer") {
        this.models["photo"] = file;
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.models["photo"] = reader.result;
          this.models["base64_filename"] = file.name;
        };
      }
    },

    async register() {
      if (this.$refs.form.validate()) {
        EventBus.$emit("startLoading");
        var route = this.routeParams;
        console.log(route);
        switch (route) {
          case "doctor":
            try {
              const obj = this.models;
              obj["role"] = "1";
              localStorage.setItem("registerData", JSON.stringify(obj));
              this.$router.push({ name: "RegisterDetail" });
            } catch (err) {
              var error1 = err;
              if (err.response.data.errors) {
                error1 = err.response.data.errors;
                for (const key in error1) {
                  console.log(`${error1[key]}`);
                  EventBus.$emit("showSnackbar", error1[key], "red");
                }
                console.log(error1);
              }
            }
            break;
          case "apotek":
            try {
              const obj = this.models;
              obj["role"] = "2";
              localStorage.setItem("registerData", JSON.stringify(obj));
              this.$router.push({ name: "RegisterDetail" });
            } catch (err) {
              var error2 = err;
              if (err.response.data.errors) {
                error2 = err.response.data.errors;
                for (const key in error2) {
                  console.log(`${error2[key]}`);
                  EventBus.$emit("showSnackbar", error2[key], "red");
                }
                console.log(error2);
              }
            }
            break;
          case "customer":
            try {
              const obj = this.models;
              obj["role"] = "3";
              let data = new FormData();
              for (const key in obj) {
                if (key == "photo") {
                  data.append("photo", obj["photo"]);
                } else {
                  data.append(`${key}`, obj[key]);
                }
              }
              console.log(data);
              const regUser = await axios.post(
                `${this.$api}/auth/register`,
                data
              );

              if (regUser.status === 201) {
                this.$router.push("/register-login/login");
              }
            } catch (err) {
              var error = err;
              if (err.response.data.errors) {
                error = err.response.data.errors;
                for (const key in error) {
                  console.log(`${error[key]}`);
                  EventBus.$emit("showSnackbar", error[key], "red");
                }
                console.log(error);
              }
            }
            break;
        }
        EventBus.$emit("stopLoading");
      }
    },

    async getFormData() {
      try {
        const res = await axios.get(`${this.$api}/form/register`);
        const dataForm = res.data;
        this.formData = dataForm;
      } catch (error) {
        console.log(error);
      }
    },

    async getProvince() {
      try {
        const res = await axios.get(`${this.$api}/location/provinces`);
        const dataProvince = res.data.data;

        dataProvince.forEach((item) => {
          item["label"] = item.prov_name;
          item["value"] = item.prov_id;
        });

        this.provinceData = dataProvince;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.sudah-akun {
  font-size: 1rem;
  gap: 0.5rem;
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

<style lang="scss">
.form {
  &--logreg {
    background-color: #fff !important;
    border-radius: 10px !important;
    padding: 3rem !important;
    width: 100% !important;
    .title-form {
      font-size: 1.5rem !important;
      font-weight: 600 !important;
      margin-bottom: 30px !important;
    }
    &__group {
      p {
        margin-bottom: 0 !important;
        font-size: 14px !important;
        color: #284860 !important;
      }
    }
    .login-btn {
      height: auto !important;
      padding: 15px !important;
      background-color: #284860 !important;
      color: white !important;
      border-radius: 10px !important;
      span {
        color: #fff !important;
        font-size: 18px;
        letter-spacing: 0;
      }
    }
  }
}
.have-account {
  display: flex !important;
  gap: 5px !important;
  p {
    font-size: 14px !important;
    margin-bottom: 0;
  }
  .register-or-login {
    font-size: 14px !important;
  }
}
.v-text-field {
  &--outlined {
    fieldset {
      border-width: 2px !important;
      border-color: #284860 !important;
      border-radius: 10px;
    }
  }
  &__details {
    padding: 0 !important;
  }
  .mdi-eye-off,
  .mdi-eye {
    &::before {
      color: #284860 !important;
    }
  }
}
</style>
