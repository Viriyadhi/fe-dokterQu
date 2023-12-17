<template>
  <v-container>
    <div class="d-flex flex-column container-profile mx-auto">
      <v-card class="form--logreg">
        <div class="d-flex flex-row justify-space-between">
          <h2 class="mb-4">Profile Saya</h2>
          <v-btn v-if="!isEditing" color="primary" @click="isEditingForm()">
            Edit Profile
          </v-btn>
        </div>
        <v-form ref="form" @submit.prevent>
          <div class="form--logreg__group w-100">
            <v-row>
              <v-col
                cols="12"
                v-for="(data, i) in formData"
                :key="i"
                class="py-0"
              >
                <p
                  v-if="
                    data.label !== 'Role' &&
                    data.label !== 'Provinsi' &&
                    data.label !== 'Kota' &&
                    data.label !== 'Gender'
                  "
                >
                  {{ data.label }}
                </p>
                <v-text-field
                  v-if="data.name === 'name'"
                  :prepend-inner-icon="data.prepend_inner_icon"
                  :rules="[(v) => !!v || `${data.label} Harus diisi`]"
                  :required="data.required"
                  v-model="models[data.name]"
                  color="284860"
                  :clearable="isEditing"
                  :readonly="!isEditing"
                  single-line
                  outlined
                >
                </v-text-field>

                <v-text-field
                  v-if="
                    data.name === 'email' &&
                    data.name !== 'name' &&
                    data.name !== 'phone'
                  "
                  :prepend-inner-icon="data.prepend_inner_icon"
                  :rules="[
                    (v) => !!v || 'E-mail is required',
                    (v) => /.+@.+/.test(v) || 'E-mail must be valid',
                  ]"
                  :required="data.required"
                  v-model="models[data.name]"
                  color="284860"
                  :readonly="!isEditing"
                  :clearable="isEditing"
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
                  :readonly="!isEditing"
                  color="284860"
                  :clearable="isEditing"
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
                  :readonly="!isEditing"
                  color="284860"
                  :clearable="isEditing"
                  single-line
                  outlined
                ></v-text-field>

                <v-text-field
                  v-if="data.name === 'phone'"
                  :prepend-inner-icon="data.prepend_inner_icon"
                  :rules="[(v) => !!v || `${data.label} Harus diisi`]"
                  :required="data.required"
                  v-model="models[data.name]"
                  :readonly="!isEditing"
                  :clearable="isEditing"
                  color="284860"
                  single-line
                  outlined
                >
                </v-text-field>

                <v-file-input
                  v-if="data.name === 'photo'"
                  :required="data.required"
                  @change="inputPhoto"
                  color="284860"
                  :clearable="isEditing"
                  :readonly="!isEditing"
                  single-line
                  outlined
                >
                </v-file-input
              ></v-col>
            </v-row>
          </div>
        </v-form>
        <div class="d-flex justify-end bottom-button">
          <v-btn v-if="isEditing" color="error" @click="isEditingForm()">
            Batal
          </v-btn>
          <v-btn v-if="isEditing" color="success" @click="postData()">
            Simpan Data
          </v-btn>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import { EventBus } from "../../../event-bus.js";

export default {
  data: () => ({
    isEditing: false,
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
    this.getFormData();
    this.getDataLocalStorage();
  },

  methods: {
    inputPhoto(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.models["photo"] = reader.result;
        this.models["base64_filename"] = file.name;
      };
    },
    async getFormData() {
      try {
        EventBus.$emit("startLoading");
        const res = await axios.get(`${this.$api}/form/register`);
        const dataForm = res.data;
        this.formData = dataForm;
      } catch (error) {
        console.log(error);
      }
      EventBus.$emit("stopLoading");
    },
    getDataLocalStorage() {
      EventBus.$emit("startLoading");

      var profile = JSON.parse(localStorage.getItem("data"));
      // console.log(data.data["name"]);
      const data = profile.data;
      console.log(data);
      this.models.name = data.name;
      this.models.phone = data.phone;
      this.models.gender = data.gender;
      this.models.email = data.email;
      EventBus.$emit("stopLoading");
    },

    isEditingForm() {
      this.isEditing = !this.isEditing;
      console.log(this.isEditing);
      if (this.isEditing) {
        EventBus.$emit("showSnackbar", "Editing data", "green");
      }
    },

    async postData() {
      EventBus.$emit("startLoading");
      console.log("posting data");
      EventBus.$emit("showSnackbar", "Menyimpan data", "green");
      EventBus.$emit("stopLoading");
    },
  },
};
</script>

<style scoped>
.bottom-button {
  gap: 2rem;
}
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

.container-profile {
  width: 70%;
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
