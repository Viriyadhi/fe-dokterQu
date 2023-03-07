<template>
  <v-app>
    <v-container>
      <section class="my-8">
        <v-text-field
          v-model="searchQuery"
          append-icon="mdi-magnify"
          label="Cari Nama Rumah Sakit, Klinik, Laboratorium"
          single-line
          outlined
          hide-details
          @input="getListDokter"
        ></v-text-field>
      </section>

      <div class="button-group mt-2 mx-auto">
        <v-btn
          v-for="tipe in categoryDokter"
          :key="tipe.id"
          :id="tipe.id"
          :class="tipe.clicked ? 'active' : ''"
          class="button-group-child"
          width="207px"
          height="37"
          @click="
            tipe.clicked
              ? (selectedTypeDoctor = null)
              : (selectedTypeDoctor = tipe.slug);
            toggleActive(tipe);
            getListDokter();
          "
          outlined
          rounded
        >
          {{ tipe.name }}
        </v-btn>
      </div>

      <section>
        <div class="d-flex flex-row justify-space-between align-center">
          <h2 class="janji-header-title my-8 mb-4">Pilih Dokter</h2>
        </div>

        <v-row v-scroll="detectBottomPage">
          <v-col
            cols="12"
            lg="3"
            md="4"
            sm="6"
            xs="12"
            v-for="(data, i) in dataCard"
            :key="i"
          >
            <router-link :to="{ path: `/janji-temu/detail/${data.slug}` }">
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
                    :to="{ path: `/janji-temu/detail/detail/${data.slug}` }"
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
// import _ from "lodash";
import { EventBus } from "../../../event-bus.js";

export default {
  name: "janjiTemu",
  data: () => ({
    categoryDokter: [],
    selectedPage: null,
    queryPage: null,
    searchQuery: null,
    dataCard: [],
    clicked: false,
    selectedTypeDoctor: null,
  }),

  created() {
    this.$watch(
      async () => {
        this.$route;
        return {};
      },
      async () => {
        this.categoryDokter = [];
        this.dataCard = [];
        this.clicked = false;
        this.selectedPage = null;
      }
    );
  },

  mounted() {
    this.getDokterCategory();
    this.getListDokter();
  },

  computed: {
    filteredItems() {
      return this.dataCard.filter((item) => {
        return item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },

  methods: {
    detectBottomPage() {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        this.selectedPage !== null
      ) {
        console.log("halo");
        this.selectedTypeDoctor = "nextPage";
        this.getListDokter();
        console.log(this.search);
      }
      console.log(
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      );
    },

    // detectBottomPageQuery() {
    //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    //   }window.innerHeight + window.scrollY >= document.body.offsetHeight
    // },
    toggleActive(tipe) {
      this.categoryDokter.forEach((item) => {
        if (item.id !== tipe.id) {
          item.clicked = false;
        }
      });
      tipe.clicked = !tipe.clicked;
    },

    async getDokterCategory() {
      try {
        const res = await axios.get(`${this.$api}/user/doctor/doctor-type`);
        this.categoryDokter = res.data.data.map((tipe) => {
          return { ...tipe, clicked: false };
        });
      } catch (err) {
        var error = err;
        if (err.response.data.message) {
          error = err.response.data.message;
          console.log(error);
          EventBus.$emit("showSnackbar", error, "red");
        }
      }
    },

    async getListDokter() {
      try {
        let url = `${this.$api}/user/doctors?page=1`;
        console.log(
          "halo: ",
          this.selectedTypeDoctor,
          this.searchQuery,
          this.selectedPage
        );

        if (this.searchQuery) {
          console.log("searcg");
          url += `&search=${this.searchQuery}`;
        }
        if (this.selectedTypeDoctor) {
          console.log("typelign");
          url += `&type=${this.selectedTypeDoctor}`;
        }
        if (this.selectedTypeDoctor === "nextPage") {
          console.log("nextPage");
          url = this.selectedPage;
        }
        //  else if (this.searchQuery && this.selectedTypeDoctor) {
        //   console.log("search dan typling");
        //   url += `?search=${this.searchQuery}&type=${this.selectedTypeDoctor}`;
        // }

        const response = await axios.get(url);

        this.dataCard =
          this.selectedTypeDoctor === "nextPage"
            ? [...this.dataCard, ...response.data.data.doctors]
            : response.data.data.doctors;
        this.selectedPage = response.data.data.next_page;

        console.log("selectedPage", this.selectedPage);
      } catch (err) {
        console.log(err);
        var error = err;
        if (err.response.data.message) {
          error = err.response.data.message;
          console.log(error);
          EventBus.$emit(
            "showSnackbar",
            `Tidak ada dokter dengan nama ${this.searchQuery}`,
            "red"
          );
        }
      }
    },

    // search: _.debounce(async function () {
    //   const page = this.queryPage;
    //   let query = this.searchQuery;
    //   this.selectedPage = null;
    //   window.addEventListener("scroll", this.detectBottomPageQuery);

    //   try {
    //     if (!page && query) {
    //       const response = await axios.get(
    //         `${this.$api}/user/doctors?search=${query}`
    //       );
    //       const data = response.data.data.doctors;
    //       const link = response.data.data.next_page;
    //       this.dataCard = data;
    //       this.queryPage = link;
    //       console.log(`Search 1 jalan, and searching for ${query}`);

    //       if (!link) {
    //         window.removeEventListener("scroll", this.detectBottomPageQuery);
    //       }
    //     }
    //     if (page && query) {
    //       const response = await axios.get(`${page}`);
    //       const data = response.data.data.doctors;
    //       const link = response.data.data.next_page;
    //       this.dataCard = this.dataCard.concat(data);
    //       this.queryPage = link;
    //       console.log(
    //         `Search 2 jalan, and searching for ${query} di page ${page}`
    //       );
    //       if (!link) {
    //         window.removeEventListener("scroll", this.detectBottomPageQuery);
    //       }
    //     }

    //     if (!query) {
    //       this.getListDokter();
    //       return;
    //     }
    //   } catch (err) {
    //     var error = err;
    //     if (err.response.data.message) {
    //       error = err.response.data.message;
    //       console.log(error);
    //       EventBus.$emit(
    //         "showSnackbar",
    //         `Tidak ada dokter dengan nama ${query}`,
    //         "red"
    //       );
    //     }
    //   }
    // }, 250),
  },
  watch: {},
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

.active {
  background: #4caf50 !important;
  color: white !important;
}
</style>
