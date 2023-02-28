<template>
  <div class="d-flex flex-column container pr-xl-16 mt-xl-16">
    <v-card class="pa-8 form--logreg">
      <v-card-title class="title-reg">Register</v-card-title>
      <v-form ref="form" @submit.prevent>
        <div v-for="(data, i) in formData" :key="i">
          <div class="form--logreg__group w-100">
            <p>{{ data.label }}</p>
            <v-text-field
              v-if="
                data.name === 'tempat_praktik' ||
                data.name === 'alumnus' ||
                data.name === 'experience' ||
                data.name === 'alumnus_tahun'
              "
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

            <v-file-input
              v-if="
                data.name === 'cv' || data.name === 'str' || data.name === 'ktp'
              "
              :prepend-inner-icon="data.prepend_inner_icon"
              :required="data.required"
              v-model="models[data.name]"
              color="284860"
              clearable
              single-line
              outlined
            >
            </v-file-input>

            <v-select
              v-if="data.name === 'type_doctor_id'"
              :prepend-inner-icon="data.prepend_inner_icon"
              :required="data.required"
              :items="doctorTypes"
              :rules="[(v) => !!v || `${data.label} Harus diisi`]"
              v-model="models[data.name]"
              color="284860"
              item-text="label"
              item-value="value"
              clearable
              single-line
              outlined
            >
            </v-select>
          </div>
        </div>
      </v-form>

      <v-btn block class="text-capitalize login-btn" @click="register">
        Daftar
      </v-btn>

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
  name: "RegisterDetail",

  data: () => ({
    formData: [],
    models: {},
    routeParam: null,
    doctorTypes: [],
  }),

  created() {
    //
  },

  async mounted() {
    var routes = this.$route.params.user;
    this.routeParam = routes;
    console.log(routes);
    if (routes === "doctor") {
      await this.getDoctorFormData();
      await this.getDoctorType();
    }
    if (routes === "apotek") {
      await this.getApotekFormData();
    }
    console.log(this.formData);

    const dataRegister = JSON.parse(localStorage.getItem("registerData"));
    console.log(this.models);
    console.log(dataRegister);
  },

  computed: {
    //
  },

  methods: {
    async getDoctorFormData() {
      try {
        const res = await axios.get(`${this.$api}/form/register/doctor`);
        const data = res.data;
        this.formData = data;
      } catch (error) {
        console.log(error);
      }
    },

    async getApotekFormData() {
      try {
        const res = await axios.get(`${this.$api}/form/register/apotek`);
        const data = res.data;
        this.formData = data;
      } catch (error) {
        console.log(error);
      }
    },

    async getDoctorType() {
      try {
        const res = await axios.get(`${this.$api}/user/doctor/doctor-type`);
        const dataTypeDoctor = res.data.data;
        dataTypeDoctor.forEach((item) => {
          item["label"] = item.name;
          item["value"] = item.id;
        });

        this.doctorTypes = dataTypeDoctor;
      } catch (error) {
        console.log(error);
      }
    },

    async register() {
      if (this.$refs.form.validate()) {
        EventBus.$emit("startLoading");
        var route = this.routeParam;
        console.log(route);
        switch (route) {
          case "doctor":
            try {
              const dataRegister = JSON.parse(
                localStorage.getItem("registerData")
              );
              console.log(this.models);
              console.log(dataRegister);
              this.models = {
                ...this.models,
                ...dataRegister,
              };
              console.log(this.models);
              const obj = this.models;

              console.log("beforeLoop");
              let data = new FormData();
              for (const key in obj) {
                if (key == "photo") {
                  data.append(
                    "photo",
                    this.dataURLtoFile(obj["photo"], obj["base64_filename"])
                  );
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
                console.log("dokter");
              }
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
              const dataRegister = JSON.parse(
                localStorage.getItem("registerData")
              );
              this.models = {
                ...this.models,
                ...dataRegister,
              };
              const obj = this.models;

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
                console.log("apotek");
              }
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
        }
        EventBus.$emit("stopLoading");
      }
    },
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], filename, { type: mime });
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
