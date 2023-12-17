<template>
  <v-app class="ma-16 px-16 mt-6">
    <v-card :loading="loading" class="mx-auto my-12" width="1800">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img contain height="645" :src="dataCard.photo" class="align-end">
        <div class="d-flex justify-space-between">
          <v-card-title class="black--text ma-8 font-weight-bold text-h5">
            {{ dataCard.name }}
          </v-card-title>
          <v-card-title class="black--text ma-8 font-weight-bold text-h5">
            {{ dataCard.is_online ? "Online" : "Offline" }}
          </v-card-title>
        </div>
      </v-img>

      <div class="card-container pa-16">
        <v-card-title class="text-h4 font-weight-medium"
          >Profil Dokter</v-card-title
        >
        <div class="d-flex flex-row justify-space-around align-center">
          <v-card class="mb-8 rounded-lg" max-width="800" height="133">
            <div class="container-content">
              <v-img max-height="79" max-width="79" class="icon-logo ma-6">
                <v-icon class="d-flex align-center justify-center text-h2 mt-2"
                  >mdi-currency-usd</v-icon
                >
              </v-img>
              <div class="d-flex flex-column">
                <h4 class="test-card-title">{{ dataCard.price_homecare }}</h4>
                <p class="test-card-desc">
                  lorem, vel fermentum augue porta id. Aliquam lobortis magna
                  nequeil
                </p>
              </div>
            </div>
          </v-card>
          <v-card class="mb-8 rounded-lg" max-width="800" height="133">
            <div class="container-content">
              <v-img max-height="79" max-width="79" class="icon-logo ma-6">
                <v-icon class="d-flex align-center justify-center text-h2 mt-2"
                  >mdi-star</v-icon
                >
              </v-img>
              <div class="d-flex flex-column">
                <h4 class="test-card-title">{{ dataCard.type }}</h4>

                <p class="test-card-desc">
                  lorem, vel fermentum augue porta id. Aliquam lobortis magna
                  nequeil
                </p>
              </div>
            </div>
          </v-card>
        </div>
        <div class="d-flex flex-row justify-space-around align-center">
          <v-card class="mb-8 rounded-lg" max-width="800" height="133">
            <div class="container-content">
              <v-img max-height="79" max-width="79" class="icon-logo ma-6">
                <v-icon class="d-flex align-center justify-center text-h2 mt-2"
                  >mdi-briefcase</v-icon
                >
              </v-img>
              <div class="d-flex flex-column">
                <h4 class="test-card-title">
                  {{ dataCard.pengalaman }} Pengalaman
                </h4>
                <p class="test-card-desc">
                  lorem, vel fermentum augue porta id. Aliquam lobortis magna
                  nequeil
                </p>
              </div>
            </div>
          </v-card>
          <v-card class="mb-8 rounded-lg" max-width="800" height="133">
            <div class="container-content">
              <v-img max-height="79" max-width="79" class="icon-logo ma-6">
                <v-icon class="d-flex align-center justify-center text-h2 mt-2"
                  >mdi-book-open-blank-variant</v-icon
                >
              </v-img>
              <div class="d-flex flex-column">
                <h4 class="test-card-title">{{ dataCard.alumnus }}</h4>

                <p class="test-card-desc">
                  lorem, vel fermentum augue porta id. Aliquam lobortis magna
                  nequeil
                </p>
              </div>
            </div>
          </v-card>
        </div>

        <v-card-title class="text-h4 font-weight-medium"
          >Pilih tanggal dan waktu kunjungan
        </v-card-title>

        <v-card-text class="container-jadwal-praktik">
          <v-card
            v-for="(operationalTime, index) in dataOperationalTimes"
            :key="index"
            :class="operationalTime.clicked ? 'active' : ''"
            @click="operationalDateClicked(operationalTime)"
            width="200"
            flat
            class="d-flex align-center justify-center card-sendiri"
          >
            <div class="d-flex flex-column">
              <p class="font-weight-bold ma-0 black--text text-center">
                {{ operationalTime.day }}
              </p>
              <p class="font-weight-bold ma-0 black--text">
                {{ operationalTime.date_formated }}
              </p>
            </div>
          </v-card>
        </v-card-text>

        <div
          v-for="(operationalTime, indexOperational) in dataOperationalTimes"
          :key="indexOperational"
        >
          <div class="mt-7 d-flex flex-row" v-if="operationalTime.clicked">
            <v-card
              v-for="dataTime in operationalTime.times"
              :key="dataTime.id"
              @click="operationalTimeClicked(dataTime)"
              class="d-flex flex-row align-center card-sendiri rounded-lg px-3 mx-3"
              flat
              :class="dataTime.clickedTimes ? 'active' : ''"
              :disabled="!dataTime.is_available"
            >
              <div class="mx-auto">{{ dataTime.time }}</div>
            </v-card>
          </div>
        </div>
        <!-- </div> -->

        <section>
          <v-card-actions>
            <v-btn
              rounded
              color="primary"
              class="ma-2 active"
              width="256"
              :disabled="!selectedTime"
              @click="buatJanji"
            >
              Buat Janji Sekarang
            </v-btn>
          </v-card-actions>
        </section>
      </div>
    </v-card>
  </v-app>
</template>

<script>
// import DialogSuccess from "@/components/Dialog/dialogSuccess.vue";
import axios from "axios";
import { EventBus } from "../../../../event-bus";
import moment from "moment";

export default {
  components: {
    //   DialogSuccess,
  },
  data: () => ({
    loading: false,
    selection: 1,
    dialogSuccess: false,
    toggleHours: false,
    operationalLink: "",
    dataCard: [],
    dataOperationalTimes: [],
    coba: false,
    selectedTime: null,
    selectedDate: null,
    jadwal: [
      {
        jenis: "Kemampuan Pendengaran",
        jam: "5:30PM",
        tanggal: "12/12/2021",
      },
      {
        jenis: "Kemampuan Pendengaran",
        jam: "5:30PM",
        tanggal: "12/12/2021",
      },
    ],

    dialogStyle: {
      backgroundColor: "rgba(0, 0, 0, 1) !important",
      opacity: "0.9 !important",
    },
  }),
  async mounted() {
    await this.getDetailDokter();
    await this.getOperationalHour();
  },

  methods: {
    async getDetailDokter() {
      try {
        EventBus.$emit("startLoading");
        var route = this.$route.params;
        const res = await axios.get(`${this.$api}/user/doctor/${route.slug}`);
        const data = res.data.data;
        this.dataCard = data;
        this.operationalLink = data.links.operational_times;
        console.log(this.dataCard);
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

    async getOperationalHour() {
      try {
        EventBus.$emit("startLoading");
        const res = await axios.get(`${this.$api}${this.operationalLink}`);
        const data = res.data.data;
        data.forEach((element) => {
          const day = element.date;
          moment.locale("id");
          this.dataOperationalTimes.push({
            ...element,
            date_formated: moment(day).format("DD, MMMM YYYY"),
            clicked: false,
          });
        });
        this.dataOperationalTimes.forEach((item) => {
          item.times.forEach((time) => {
            time.clickedTimes = false;
          });
        });
        console.log("ini operational time: ", this.dataOperationalTimes);
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
    operationalDateClicked(operationalTime) {
      this.dataOperationalTimes.forEach((item) => {
        if (item.day_number !== operationalTime.day_number) {
          item.clicked = false;
          this.toggleHours = false;
          this.isSelected = false;
        }
      });
      operationalTime.clicked = !operationalTime.clicked;
      this.toggleHours = !this.toggleHours;

      this.selectedTime = null;
      if (this.selectedDate) {
        this.selectedDate =
          this.selectedDate.day_number == operationalTime.day_number
            ? null
            : operationalTime.date;
      } else {
        this.selectedDate = operationalTime.date;
      }
      console.log(this.selectedDate);
      console.log(this.selectedTime);
    },
    operationalTimeClicked(time) {
      this.dataOperationalTimes.forEach((item) => {
        item.times.forEach((dataTime) => {
          if (dataTime.id !== time.id) {
            dataTime.clickedTimes = false;
            this.isSelected = true;
          }
        });
      });
      time.clickedTimes = !time.clickedTimes;

      if (this.selectedTime) {
        this.selectedTime = this.selectedTime.id == time.id ? null : time;
      } else {
        this.selectedTime = time;
      }
    },
    buatJanji() {
      localStorage.setItem(
        "homecare",
        JSON.stringify({
          date: this.selectedDate,
          time_id: this.selectedTime.id,
          time: this.selectedTime.time,
          ...this.dataCard,
        })
      );
      this.$router.push({ name: "JanjiTemuCheckout" });
    },
  },
};
</script>

<style scoped>
.line {
  width: 775px;
  height: 1px;
  border-bottom: 2px solid black;
}

.test-card-title {
  margin-top: 1rem;
  font-size: 1.75rem;
  font-weight: 700;
}

.test-card-desc {
  font-size: 1rem;
  font-weight: 500;
  width: 90%;
  color: black;
}

.container-content {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.icon-logo {
  width: 20rem !important;
  height: 20rem !important;
  background: rgba(33, 150, 243, 0.15) !important;
  border-radius: 3rem;
}

.custom-text {
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: 500;
}

.custom-border {
  border: 1px solid black;
  border-radius: 1rem;
}

.container-jadwal-praktik {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.card-sendiri {
  border: 1px solid #03acf2;
  height: 3rem;
  width: 8rem;
  transition: all 400ms;
}

.card-sendiri:hover {
  background: rgba(3, 172, 242, 0.7);
}

.active {
  background: rgba(3, 172, 242, 0.7) !important;
}
</style>

<style>
/* .v-overlay--active {
    opacity: 0.9 !important;
    background-color: rgba(0, 0, 0, 1) !important;
  }

  .v-overlay--active:has(.dialog-img) {
    opacity: 0.9 !important;
    background-color: rgba(0, 0, 0, 1) !important;
  } */
</style>
