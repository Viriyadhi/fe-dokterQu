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

      <v-img
        height="645"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        class="align-end"
      >
        <v-card-title class="white--text ma-8 font-weight-bold text-h5">
          Dr. Mariana Carlos, MARS</v-card-title
        >
      </v-img>

      <div class="card-container pa-16">
        <v-card-title class="text-h4 font-weight-medium"
          >Profil Dokter</v-card-title
        >
        <div class="d-flex flex-row justify-space-around align-center">
          <v-card class="mb-8 rounded-lg" max-width="800" height="133">
            <div class="container-content">
              <v-img
                src="@/assets/ForgotPw/ic_twotone-mark-email-unread.svg"
                max-height="79"
                max-width="79"
                class="icon-logo ma-6"
              >
              </v-img>
              <div class="d-flex flex-column">
                <h4 class="test-card-title">Kemampuan Pendengaran</h4>
                <p class="test-card-desc">
                  lorem, vel fermentum augue porta id. Aliquam lobortis magna
                  nequeil
                </p>
              </div>
            </div>
          </v-card>
          <v-card class="mb-8 rounded-lg" max-width="800" height="133">
            <div class="container-content">
              <v-img
                src="@/assets/ForgotPw/ic_twotone-mark-email-unread.svg"
                max-height="79"
                max-width="79"
                class="icon-logo ma-6"
              ></v-img>
              <div class="d-flex flex-column">
                <h4 class="test-card-title">Kemampuan Pendengaran</h4>
                <p class="test-card-desc">
                  lorem, vel fermentum augue porta id. Aliquam lobortis magna
                  nequeil
                </p>
              </div>
            </div>
          </v-card>
        </div>

        <v-card-title class="text-h4 font-weight-medium"
          >Keterangan</v-card-title
        >
        <v-card-text class="custom-text black--text px-8">
          Dr. Mariana Carlos, MARS adalah Dokter Gigi Spesialis Bedah Mulut;
          ahli dalam bidang bedah mulut dan kedokteran gigi; diagnosa,
          pencegahan dan pengobatan berbagai jenis penyakit dan kelainan di
          rongga mulut.
        </v-card-text>

        <v-card-text class="custom-text black--text px-8">
          Dokter Gigi Spesialis Bedah Mulut; Bedah Mulut dan Maksilofasial
          merupakan salah satu cabang ilmu kedokteran gigi yang khas karena
          meliputi penatalaksanaan berbagai jenis penyakit dan kelainan rongga
          mulut yang memerlukan pendekatan secara bedah sehingga menuntut
          penguasaan ilmu kedokteran secara holistik dan terintegrasi.
        </v-card-text>

        <v-card-title class="text-h4 font-weight-medium"
          >Jadwal Praktik</v-card-title
        >

        <v-card-text class="container-jadwal-praktik px-8">
          <div
            v-for="(data, i) in jadwalHari"
            :key="i"
            id="box-jadwal-praktik"
            @click="jadwalPraktik"
            class="d-flex flex-column align-center card-sendiri rounded-lg"
          >
            <p class="ma-0 font-weight-bold">{{ data.hari }}</p>
            <p class="font-weight-bold">{{ data.tanggal }}</p>
          </div>
        </v-card-text>

        <section class="jadwal-hour" v-if="toggleHours">
          <v-card class="ma-8 pa-6 rounded-lg ma-0 pa-0">
            <div class="d-flex flex-column">
              <div class="d-flex flex-row align-center">
                <v-icon class="mr-4">mdi-white-balance-sunny</v-icon>
                <v-card-title class="text-h4 font-weight-medium pa-0"
                  >Siang</v-card-title
                >
              </div>

              <v-chip-group>
                <v-chip v-for="(data, i) in jadwalJam" :key="i"
                  >{{ data.jam }}
                </v-chip>
              </v-chip-group>
            </div>

            <div class="line my-6"></div>

            <div class="d-flex flex-column">
              <div class="d-flex flex-row">
                <v-icon class="mr-4">mdi-moon-waning-crescent</v-icon>

                <v-card-title class="text-h4 font-weight-medium pa-0"
                  >Malam</v-card-title
                >
              </div>

              <v-chip-group>
                <v-chip v-for="(data, i) in jadwalJam" :key="i"
                  >{{ data.jam }}
                </v-chip>
              </v-chip-group>
            </div>
          </v-card>
        </section>

        <section>
          <v-card-actions>
            <v-dialog v-model="dialog" width="920">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  rounded
                  color="primary ma-2"
                  dark
                  width="256"
                  v-bind="attrs"
                  v-on="on"
                  @click="setBackground()"
                >
                  Buat Janji Sekarang
                </v-btn>
              </template>

              <v-card class="pa-8">
                <div class="d-flex flex-row">
                  <v-btn icon color="black" @click="dialog = false">
                    <v-icon>mdi-arrow-left-circle</v-icon>
                  </v-btn>
                  <v-card-title class="text-h4 font-weight-bold pt-0 pb-4">
                    Ringkasan Pembelian
                  </v-card-title>
                </div>
                <div class="d-flex justify-center align-center">
                  <v-card class="mb-8 rounded-lg" width="800" height="133">
                    <div class="container-content">
                      <v-img
                        src="@/assets/ForgotPw/ic_twotone-mark-email-unread.svg"
                        max-height="79"
                        max-width="79"
                        class="icon-logo ma-6"
                      ></v-img>
                      <div class="d-flex flex-column">
                        <h4 class="test-card-title">Kemampuan Pendengaran</h4>
                        <p class="test-card-desc">
                          lorem, vel fermentum augue porta id. Aliquam lobortis
                          magna nequeil
                        </p>
                      </div>
                    </div>
                  </v-card>
                </div>

                <v-card-text class="text-h4 black--text font-weight-bold"
                  >Janji Temu</v-card-text
                >
                <div class="d-flex justify-center align-center mb-2">
                  <div class="line"></div>
                </div>
                <v-row class="pa-0 ma-0 mx-12 font-weight-black">
                  <v-col cols="4" class="text-left pl-0"> Jenis </v-col>
                  <v-col cols="4" class="text-center"> Jam</v-col>
                  <v-col cols="4" class="text-right pr-0"> Tanggal/Waktu</v-col>
                </v-row>

                <v-row
                  v-for="(data, i) in jadwal"
                  :key="i"
                  class="ma-0 pa-0 mx-12"
                >
                  <v-col
                    cols="4"
                    class="black--text text-left pl-0 pb-0 font-weight-bold"
                  >
                    {{ data.jenis }}
                  </v-col>
                  <v-col
                    cols="4"
                    class="black--text text-center pb-0 font-weight-bold"
                    >{{ data.jam }}</v-col
                  >
                  <v-col
                    cols="4"
                    class="black--text text-right pr-0 pb-0 font-weight-bold"
                  >
                    {{ data.tanggal }}
                  </v-col>
                </v-row>

                <v-card-text class="text-h4 black--text mt-10 font-weight-bold"
                  >Pembayaran</v-card-text
                >
                <div class="d-flex justify-center align-center mb-2">
                  <div class="line"></div>
                </div>
                <div
                  class="ma-0 pa-0 d-flex flex-row justify-space-between mx-12"
                >
                  <p class="black--text pt-2">Biaya Konsultasi</p>
                  <p class="black--text pt-2">Rp 150.000</p>
                </div>
                <div
                  class="ma-0 pa-0 d-flex flex-row justify-space-between mx-12"
                >
                  <p class="black--text">Biaya Konsultasi</p>
                  <p class="black--text">Rp 150.000</p>
                </div>
                <div
                  class="ma-0 pa-0 d-flex flex-row justify-space-between mx-12"
                >
                  <p class="black--text">Biaya Konsultasi</p>
                  <p class="black--text">Rp 150.000</p>
                </div>
                <div class="d-flex justify-center align-center">
                  <div class="line"></div>
                </div>
                <div
                  class="ma-0 pa-0 d-flex flex-row justify-space-between mx-14"
                >
                  <p class="black--text font-weight-black py-2 mb-0">
                    Total Harga
                  </p>
                  <p
                    class="black--text font-weight-black py-2 mb-0 secondary--text"
                  >
                    Rp 150.000
                  </p>
                </div>
                <div class="d-flex justify-center align-center">
                  <div class="line"></div>
                </div>

                <v-card-text class="text-h4 black--text mt-8 font-weight-bold"
                  >Kode Voucher</v-card-text
                >

                <div class="d-flex flex-row mx-12">
                  <v-text-field
                    label="Kode Voucher"
                    placeholder="Placeholder"
                    solo
                  ></v-text-field>
                  <v-btn rounded outlined color="primary" class="mt-2 ml-8"
                    >Masukkan</v-btn
                  >
                </div>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-dialog max-width="260">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary "
                        dark
                        v-bind="attrs"
                        v-on="on"
                        rounded
                        width="256"
                        @click="onClickSuccess"
                      >
                        Buat Janji Temu
                      </v-btn>
                    </template>
                    <DialogSuccess ref="successDialog" />
                  </v-dialog>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </section>
      </div>
    </v-card>
  </v-app>
</template>

<script>
import DialogSuccess from "@/components/Dialog/dialogSuccess.vue";
export default {
  components: {
    DialogSuccess,
  },
  data: () => ({
    loading: false,
    selection: 1,
    dialog: false,
    dialogSuccess: false,
    toggleHours: false,
    jadwalHari: [
      {
        hari: "Senin",
        tanggal: "12/12/2021",
      },
      {
        hari: "Senin",
        tanggal: "12/12/2021",
      },
      {
        hari: "Senin",
        tanggal: "12/12/2021",
      },
      {
        hari: "Senin",
        tanggal: "12/12/2021",
      },
      {
        hari: "Senin",
        tanggal: "12/12/2021",
      },
    ],

    jadwalJam: [
      {
        jam: "5:30PM",
      },
      {
        jam: "5:30PM",
      },
      {
        jam: "5:30PM",
      },
      {
        jam: "5:30PM",
      },
      {
        jam: "5:30PM",
      },
    ],
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

  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },

    setBackground() {
      this.dialog = true;
      console.log(this.dialog);
    },
    onClickSuccess() {
      this.$refs.successDialog.successDialog = true;
    },
    jadwalPraktik(p) {
      console.log(p.path[0].style);
      this.toggleHours = true;
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
  background: rgba(3, 172, 242, 0.1);
}
</style>

<style>
.v-overlay--active {
  opacity: 0.9 !important;
  background-color: rgba(0, 0, 0, 1) !important;
}

.v-overlay--active:has(.dialog-img) {
  opacity: 0.9 !important;
  background-color: rgba(0, 0, 0, 1) !important;
}
</style>
