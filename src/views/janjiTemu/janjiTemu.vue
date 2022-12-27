<template>
  <v-app>
    <section class="checks">
      <v-card class="mx-auto janji-card white--text px-8 py-6" max-width="828">
        <div class="d-flex flex-row">
          <div class="d-flex flex-column">
            <h4 class="text-h4 janji-headline mb-4">DokterQ Checks!</h4>
            <p class="janji-desc ma-0">
              Curabitur egestas consequat lorem, vel fermentum augue porta id.
              Aliquam lobortis magna neque, gravida consequat velit venenatis
              at.
            </p>
            <v-card-actions>
              <v-btn color="success" width="197" rounded> Cek Sekarang </v-btn>
            </v-card-actions>
          </div>
          <v-img
            src="@/assets/JanjiTemu/pngwing 1.svg"
            max-width="215"
            max-height="247"
            class="janji-img"
          ></v-img>
        </div>
      </v-card>
    </section>

    <section class="article mt-8 mx-8">
      <div class="d-flex flex-row justify-space-between align-center">
        <h2 class="article-header-title">Pilih Dokter Yang Sesuai</h2>
        <a class="article-header-link"> Lihat semua</a>
      </div>

      <div class="button-group mt-8">
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

      <div
        class="article-container d-flex flex-row align-center justify-space-between"
      >
        <v-card
          v-for="(cardData, index) in dataCard"
          :key="index"
          max-width="325"
          class="article-card"
        >
          <v-img :src="cardData.img" height="200px" class="article-img"></v-img>

          <v-card-title class="text-h5 pa-4 pb-0">
            {{ cardData.nama }}
          </v-card-title>

          <div class="d-flex flex-row justify-space-between">
            <v-card-subtitle class="card-desc pt-1">
              Dokter {{ cardData.indra }}
            </v-card-subtitle>
            <v-card-subtitle class="card-desc pt-1">
              {{ cardData.pengalaman }}
            </v-card-subtitle>
          </div>
          <div class="d-flex flex-column">
            <v-card-subtitle class="card-desc">
              {{ cardData.rumahSakit }}
            </v-card-subtitle>
            <v-card-subtitle class="card-desc pt-0">
              ( {{ cardData.asal }})
            </v-card-subtitle>
          </div>

          <div class="d-flex flex-row align-center">
            <v-card-text class="black--text"
              >Rating: {{ cardData.rating }}</v-card-text
            >
            <v-btn color="success"> Buat Janji</v-btn>
          </div>
        </v-card>
      </div>
    </section>

    <section class="speciality ma-16 px-16">
      <div class="d-flex flex-row justify-space-between">
        <div class="speciality-container px-6 d-flex flex-column">
          <h2 class="speciality-title">Test Kesehatan Mata</h2>

          <v-card class="mb-8 rounded-lg" max-width="500" height="133">
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

          <v-card class="mb-8 rounded-lg" max-width="500" height="133">
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
        <v-img
          src="@/assets/Landing Page/Speciality/SpecialityImage.svg"
          max-width="607"
          max-height="579"
          class="speciality-image"
        ></v-img>
      </div>
    </section>
  </v-app>
</template>

<script>
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

    dataCard: [
      {
        nama: "dr. Rizky",
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        indra: "Telinga",
        pengalaman: "10 tahun",
        asal: "Kalimantan Timur",
        rumahSakit: "RS. Bunda",
        harga: "Rp. 100.000",
        rating: "4.5",
      },
      {
        nama: "dr. Rizky",
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        indra: "Telinga",
        pengalaman: "10 tahun",
        asal: "Kalimantan Timur",
        rumahSakit: "RS. Bunda",
        harga: "Rp. 100.000",
        rating: "4.5",
      },
      {
        nama: "dr. Rizky",
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        indra: "Telinga",
        pengalaman: "10 tahun",
        asal: "Kalimantan Timur",
        rumahSakit: "RS. Bunda",
        harga: "Rp. 100.000",
        rating: "4.5",
      },
      {
        nama: "dr. Rizky",
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        indra: "Telinga",
        pengalaman: "10 tahun",
        asal: "Kalimantan Timur",
        rumahSakit: "RS. Bunda",
        harga: "Rp. 100.000",
        rating: "4.5",
      },
      {
        nama: "dr. Rizky",
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        indra: "Telinga",
        pengalaman: "10 tahun",
        asal: "Kalimantan Timur",
        rumahSakit: "RS. Bunda",
        harga: "Rp. 100.000",
        rating: "4.5",
      },
    ],
  }),
};
</script>

<style scoped>
.janji-card {
  background: linear-gradient(100.1deg, #03acf2 0%, #c8e6c9 93.58%) !important;
  border-radius: 25px;
}

.janji-headline {
  font-weight: 500;
}

.janji-desc {
  width: 60% !important;
}

.janji-img {
  bottom: 0 !important;
}
</style>

<style scoped>
.article {
  margin-top: 8rem !important;
}

.article-header-title {
  font-size: 2.5rem;
  font-weight: 800;
}

.article-header-link {
  font-size: 1rem;
  color: #03acf2 !important;
  text-decoration-line: underline;
}

.button-group {
  display: flex;
  flex-direction: row;
  gap: 2rem;
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

.article-container {
  margin: 2rem 0;
}

.article-img {
  border-radius: 1rem 1rem 0 0 !important;
}

.card-desc {
  color: black !important;
  padding-bottom: 0 !important;
}

.article-card {
  background: #ffffff !important;
  box-shadow: 0px 16px 40px rgba(154, 170, 207, 0.2) !important;
}
</style>

<style scoped>
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
  color: #03acf2 !important;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) !important;
  background: rgba(33, 150, 243, 0.15) !important;
  border-radius: 3rem;
}
</style>
