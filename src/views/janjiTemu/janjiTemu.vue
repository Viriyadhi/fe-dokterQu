<template>
  <v-app>
    <v-container>
      <section class="my-8">
        <v-text-field
          append-icon="mdi-magnify"
          label="Cari Nama Rumah Sakit, Klinik, Laboratorium"
          single-line
          outlined
          hide-details
        ></v-text-field>
      </section>

      <div class="button-group mt-2 mx-auto">
        <v-btn
          v-for="(tipe, i) in tipeIndraBtn"
          :key="i"
          outlined
          rounded
          class="button-group-child"
          width="207px"
          height="37"
        >
          {{ tipe.indra }}
        </v-btn>
      </div>

      <section>
        <div class="d-flex flex-row justify-space-between align-center">
          <h2 class="janji-header-title my-8 mb-4">Pilih Dokter</h2>
          <a class="janji-header-link"> Lihat semua</a>
        </div>

        <v-row>
          <v-col
            cols="12"
            lg="3"
            md="4"
            sm="6"
            xs="12"
            v-for="(data, i) in dataCard"
            :key="i"
          >
            <router-link
              :to="{ path: `/janji-temu/detail${data.links['self']}` }"
            >
              <v-card
                max-width="380"
                max-height="890"
                class="mx-auto custom-card-janji rounded-lg mb-6"
              >
                <v-img :src="data.photo" height="310"></v-img>

                <div class="d-flex flex-row justify-space-between align-center">
                  <v-card-title class="text-h6 pb-0 container-text-tall">
                    {{ data.name }}
                  </v-card-title>
                  <v-card-title class="text-h6 card-desc pb-0">
                    {{ data.is_online ? "Online" : "Offline" }}
                  </v-card-title>
                </div>

                <div class="d-flex flex-row justify-space-between">
                  <v-card-subtitle class="card-desc py-0">
                    Dokter {{ data.type }}
                  </v-card-subtitle>
                  <v-card-subtitle class="card-desc py-0">
                    {{ data.pengalaman }}
                  </v-card-subtitle>
                </div>

                <div class="d-flex flex-column">
                  <v-card-subtitle class="card-desc py-1">
                    {{ data.tempat_praktik }}
                  </v-card-subtitle>
                </div>

                <!-- <v-card-subtitle class="black--text py-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus pretium fermentum felis id condimentum.
                </v-card-subtitle> -->

                <v-card-title class="text-h6 pt-1 pb-4">
                  {{ data.price_homecare }}
                </v-card-title>

                <v-card-subtitle class="card-desc py-0">
                  {{ data.distance }}
                </v-card-subtitle>

                <v-card-actions class="d-flex justify-end mt-1 pb-0">
                  <router-link
                    class="white--text"
                    :to="{ name: 'JanjiTemuDetail' }"
                  >
                    <v-btn color="primary" class="pa-5 button-janji">
                      Buat Janji
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import { EventBus } from "../../../event-bus.js";

export default {
  name: "janjiTemu",
  data: () => ({
    tipeIndraBtn: [
      {
        indra: "Telinga",
      },
      {
        indra: "Mata",
      },
      {
        indra: "Kulit",
      },
      {
        indra: "Lidah",
      },
      {
        indra: "Hidung",
      },
    ],

    dataCard: [],
  }),

  created() {
    //
  },

  mounted() {
    this.getListDokter();
  },

  computed: {
    //
  },

  methods: {
    async getListDokter() {
      try {
        EventBus.$emit("startLoading");
        const response = await axios.get(`${this.$api}/user/doctors`);
        const data = response.data.data.doctors;
        this.dataCard = data;
        console.log(data);
      } catch (err) {
        var error = err;
        if (err.response.data.message) {
          error = err.response.data.message;
          console.log(error);
          EventBus.$emit("showSnackbar", error, "red");
        }
      }
      EventBus.$emit("stopLoading");
    },
  },
};
</script>

<style scoped>
.button-group {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  height: auto;
}

.button-group-child {
  background: white !important;
  color: #4caf50 !important;
  border: #4caf50 1px solid !important;
  transition: all 200ms;
}
.button-group-child:hover {
  background: #4caf50 !important;
  color: white !important;
}

.janji-header-title {
  font-size: 2.5rem;
  font-weight: 800;
}

.janji-header-link {
  font-size: 1rem;
  color: #03acf2 !important;
  text-decoration-line: underline;
}

.custom-card-janji {
  padding: 0 !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
}

.button-janji {
  margin-right: -0.5rem;
  border-radius: 1.5rem 0;
  font-weight: 600;
  border-radius: 8px 0 !important;
  font-weight: 600 !important;
}

.container-text-tall {
  height: 4.5rem !important;
}

.container-text-short {
  height: 1.5rem !important;
}
</style>
