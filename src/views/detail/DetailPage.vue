<template>
  <v-app>
    <section class="top-page">
      <div class="d-flex">
        <div class="d-flex flex-column container-title ma-16 px-16">
          <h2 class="header-title">Semua tentang kesehatan mata</h2>
          <p class="header-desc">Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update informasi seputar kesehatan,.</p>
          <div class="d-flex flex-row align-center">
            <a class="header-link">MORE INFO</a>
            <div class="text-center">
              <v-btn rounded color="success" class="ml-8 button-header" dark> Register NOW </v-btn>
            </div>
          </div>
        </div>
        <div class="d-flex parent">
          <v-img src="@/assets/Landing Page/Header/Oval.svg" class="oval-top"> </v-img>
          <v-img src="@/assets/Landing Page/Header/Banner1.svg" class="banner"> </v-img>
          <v-img src="@/assets/Landing Page/Header/OvalTransparent.svg" class="oval-transparent"> </v-img>
        </div>
      </div>
    </section>

    <section class="speciality ma-16 px-16">
      <div class="d-flex flex-row justify-space-between">
        <div class="speciality-container d-flex flex-column">
          <h2 class="speciality-title">Test Kesehatan Mata</h2>

          <v-card class="mb-8 rounded-lg custom-test-card" max-width="626" height="171">
            <div class="container-content">
              <v-img src="@/assets/ForgotPw/ic_twotone-mark-email-unread.svg" max-height="85" max-width="85" class="icon-logo my-10 mx-8"></v-img>
              <div class="d-flex flex-column my-4">
                <h4 class="test-card-title mb-2">Buta Warna</h4>
                <p class="test-card-desc">Penyakit ini sulit membedakan warna tertentu atau bahkan seluruh warna.l</p>
              </div>
            </div>
          </v-card>

          <v-card class="mb-8 rounded-lg custom-test-card" max-width="626" height="171">
            <div class="container-content">
              <v-img src="@/assets/ForgotPw/ic_twotone-mark-email-unread.svg" max-height="85" max-width="85" class="icon-logo my-10 mx-8"></v-img>
              <div class="d-flex flex-column my-4">
                <h4 class="test-card-title mb-2">Buta Warna</h4>
                <p class="test-card-desc">Istilah ini juga sering diartikan sebagai penglihatan yang buram.</p>
              </div>
            </div>
          </v-card>
        </div>
        <v-img src="@/assets/Landing Page/Speciality/SpecialityImage.svg" max-width="607" max-height="579" class="speciality-image"></v-img>
      </div>
    </section>
    <section class="layanan-khusus mt-16 pt-16">
      <div class="mx-16 px-16">
        <div class="title">
          <h2 class="layanan-title">Konsultasi Dengan Dokter Khusus Mata</h2>
          <p class="layanan-desc">Curabitur egestas consequat lorem, vel fermentum augue porta id. Aliquam lobortis magna neque, gravida consequat velit venenatis at.</p>
        </div>
      </div>
    </section>

    <section class="layanan-khusus card">
      <div class="d-flex flex-row">
        <div class="parent-layanan">
          <v-img src="@/assets/Landing Page/LayananKhusus/LayananImage.svg" max-width="502" max-height="425" class="layanan-image"> </v-img>
          <v-img src="@/assets/Landing Page/LayananKhusus/OvalLayanan.svg" class="layanan-oval"> </v-img>
        </div>

        <div class="ml-16 container-card flex-grow-1">
          <v-card max-width="255" max-height="350" class="custom-card-konsultasi rounded-lg">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="170"></v-img>

            <v-card-subtitle class="black--text pa-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium fermentum felis id condimentum. </v-card-subtitle>

            <v-card-actions class="d-flex justify-end mt-1">
              <v-btn color="success" class="ml-8 pa-5 button-layanan" dark> SEE DETAILS </v-btn>
            </v-card-actions>
          </v-card>

          <v-card max-width="255" max-height="350" class="custom-card-konsultasi rounded-lg">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="170"></v-img>

            <v-card-subtitle class="black--text pa-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium fermentum felis id condimentum. </v-card-subtitle>

            <v-card-actions class="d-flex justify-end mt-1">
              <v-btn color="success" class="ml-8 pa-5 button-layanan" dark> SEE DETAILS </v-btn>
            </v-card-actions>
          </v-card>

          <v-card max-width="255" max-height="350" class="custom-card-konsultasi rounded-lg">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="170"></v-img>

            <v-card-subtitle class="black--text pa-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium fermentum felis id condimentum. </v-card-subtitle>

            <v-card-actions class="d-flex justify-end mt-1">
              <v-btn color="success" class="ml-8 pa-5 button-layanan" dark> SEE DETAILS </v-btn>
            </v-card-actions>
          </v-card>

          <v-card max-width="255" max-height="350" class="custom-card-konsultasi rounded-lg">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="170"></v-img>

            <v-card-subtitle class="black--text pa-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium fermentum felis id condimentum. </v-card-subtitle>

            <v-card-actions class="d-flex justify-end mt-1">
              <v-btn color="success" class="ml-8 pa-5 button-layanan" dark> SEE DETAILS </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </section>

    <section class="Appointment">
      <div class="d-flex flex-row justify-space-between">
        <div class="Appointment-container d-flex flex-column">
          <h2 class="Appointment-title">Janji temu dengan dokter spesialis mata</h2>

          <p class="Appointment-desc">Hanya dengan beberapa Klik, anda bisa konsultasi dengan dokter spesialis yang sudah bergabung di website kami.</p>

          <v-btn color="success" class="medicine-btn py-5" rounded> Cari Dokter Sekarang</v-btn>
        </div>
        <v-img src="@/assets/Landing Page/Appointment/Appointment.svg" max-width="746.15" max-height="481.43" class="Appointment-image"></v-img>
      </div>
    </section>

    <section class="testimonial mt-5 ml-8 pa-7">
      <div class="txt-testi my-5 ml-15">
        <div>Apa Kata Pasien Kami</div>
      </div>
      <div class="d-flex flex-row">
        <template>
          <div v-scroll.self="onScroll" class="comment overflow-hidden ma-5 ml-15">
            <v-row>
              <v-card v-for="n in 4" :key="n" :elevation="5" class="rounded-lg card">
                <v-row>
                  <v-avatar class="">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.bbRjEtula0rs46GDEb2kIQHaHa&pid=Api&P=0" alt="John" />
                  </v-avatar>
                  <div class="ml-5">
                    <div class="text-body1 text-title">Dewi marlisa</div>
                    <div class="text-subtitle2 caption-text">Tipe pelayanan</div>
                  </div>
                </v-row>
                <div class="mt-7">
                  <div class="comment-title text-body1 my-3">Praktis dan Efisien</div>
                  <div class="text-caption">Sangat efisien dan terbantukan banget, gak perlu antri lama untuk konsultasi. recommended banget pokoknya,terima kasih DokterQu,</div>
                </div>
              </v-card>
            </v-row>
          </div>
        </template>
      </div>
    </section>

    <section class="ready-started ma-16 px-16">
      <v-card class="mx-auto my-12 d-flex flex-row justify-space-between pa-4 px-16 py-4wha rounded-xl align-center custom-card" max-height="158.21px">
        <div class="d-flex flex-column mx-16 my-2">
          <h4 class="ready-title ma-0">Siap untuk memulai ?</h4>
          <p class="ready-desc ma-0">Buat janji temu dengan dokter pilihan.</p>
        </div>
        <v-btn rounded class="pa-6 btn-now mx-16" color="white"> buat janji sekarang </v-btn>
      </v-card>
    </section>

    <section class="ma-16 px-16">
      <h2 class="apotik-title">Apotik terdekat kita</h2>
      <h4 class="apotik-desc">Apotik terdekat dari lokasi anda</h4>

      <v-row>
        <v-col cols="12" xs="12" sm="6" lg="4" xl="4" v-for="(data, index) in cardData" :key="index">
          <v-card elevation="2" class="rounded-lg" width="500px">
            <div class="d-flex flex-row">
              <div class="d-flex">
                <v-img :src="data.img" height="140px" width="140px" class="rounded-lg ma-4"> </v-img>
              </div>
              <div class="d-flex flex-column">
                <v-card-title class="card-title">
                  {{ data.title }}
                </v-card-title>

                <div class="d-flex flex-row">
                  <v-card-text class="card-desc">
                    {{ data.desc1 }}
                  </v-card-text>
                  <v-card-text class="card-desc">
                    {{ data.desc2 }}
                  </v-card-text>
                </div>
                <v-card-text class="card-desc">
                  {{ data.desc2 }}
                </v-card-text>
                <v-btn color="success" outlined class="apotik-btn rounded-xl"> Contact </v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </section>
    <router-view />
  </v-app>
</template>
<script>
export default {
  components: {},

  data: () => ({
    show: false,

    cardData: [
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "Lorem ipsum dolor sit amet",
        desc1: "Lorem ipsum",
        desc2: " dolor sit amet",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "Lorem ipsum dolor sit amet",
        desc1: "Lorem ipsum",
        desc2: " dolor sit amet",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "Lorem ipsum dolor sit amet",
        desc1: "Lorem ipsum",
        desc2: " dolor sit amet",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "Lorem ipsum dolor sit amet",
        desc1: "Lorem ipsum",
        desc2: " dolor sit amet",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "Lorem ipsum dolor sit amet",
        desc1: "Lorem ipsum",
        desc2: " dolor sit amet",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "Lorem ipsum dolor sit amet",
        desc1: "Lorem ipsum",
        desc2: " dolor sit amet",
      },
    ],
  }),
  name: "HomeView",

  methods: {},
};
</script>

<style scoped>
.test-card-title {
  font-size: 2rem !important;
  font-weight: 800 !important;
}

.test-card-desc {
  font-size: 1.5rem !important;
  font-weight: 400 !important;
  width: 90%;
  color: black;
}

.container-content {
  display: flex;
  flex-direction: row;
}
.icon-logo {
  width: 20rem !important;
  height: 20rem !important;
  color: #03acf2 !important;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) !important;
  background: rgba(33, 150, 243, 0.15) !important;
  border-radius: 3rem;
}
.parent {
  position: relative;
  top: 0;
  right: 0;
}
.oval-top {
  width: 54rem !important;
  height: 30rem !important;
  margin-top: -4rem;
  position: relative;
}

.banner {
  position: absolute;
  top: 2rem;
  left: 14rem;
}
.oval-transparent {
  position: absolute;
  top: -4rem;
  left: 14rem;
}
</style>
<style>
.card {
  width: 20%;
  padding: 20px;
  margin: 10px;
}
.text-title {
  font-weight: bold;
  color: black;
}
.caption-text {
  color: #4caf50;
}
.comment-title {
  font-weight: bold;
}
</style>
<style scoped>
.custom-test-card {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.09) !important;
}

.container-title {
  margin-left: 7rem;
  margin-top: 4rem;
}

.header-title {
  font-size: 3rem;
  font-weight: 600;
}
.header-desc {
  width: 50%;
  font-size: 1.5rem;
  font-weight: 400;
}

.header-link {
  font-size: 1.25rem;
  color: #03acf2 !important;
}

.button-header {
  font-size: 1.1rem !important;
  width: 14rem !important;
  height: 3rem !important;
}

.header-banner {
  margin-top: 4rem;
  margin-right: 7rem;
  width: 50rem !important;
  height: 30rem !important;
}
</style>

<style scoped>
.container-three {
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.three-title {
  font-weight: 600;
  font-size: 1.25rem;
}

.three-desc {
  font-weight: 400;
  font-size: 1rem;
  width: 110%;
}
</style>

<style scoped>
.keunggulan-apa {
  font-weight: 600;
  font-size: 1.75rem;
}

.container-keunggulan {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 8rem;
}

.container-desc-keunggulan {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.keunggulan-angka {
  font-weight: 800;
  font-size: 2.5rem;
  margin-bottom: -1rem;
  color: #357a38;
}

.image-keunggulan {
  margin-right: 0.6rem;
  background-size: auto !important;
}

.keunggulan-desc {
  width: 14%;
}
</style>

<style scoped>
.parent-layanan {
  position: relative;
  top: 0;
  left: 0;
}
.layanan-title {
  font-weight: 800;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  width: 25% !important;
  line-height: 3rem;
}

.layanan-desc {
  font-weight: 400;
  font-size: 1.25rem;
  width: 30% !important;
}

.layanan-image {
  position: absolute;
  z-index: 2;
  left: 0 !important;
  top: 0 !important;
}

.layanan-oval {
  position: relative;
  margin-top: -8rem;
  left: 0 !important;
  z-index: 1;
}

.container-card {
  display: flex;
  flex-direction: row;
  gap: 5rem;
}

.custom-card-konsultasi {
  padding: 0 !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
}

.button-layanan {
  border-radius: 8px 0 !important;
  font-weight: 600 !important;
  font-size: 0.9rem !important;
}
</style>

<style scoped>
.speciality-title {
  font-weight: 800;
  font-size: 3rem;
  margin-bottom: 2rem;
}

.speciality-desc {
  font-weight: 400;
  font-size: 1.25rem;
  width: 45% !important;
}

.speciality-container {
  margin-top: 8rem !important;
}
</style>

<style scoped>
.medicine-text {
  margin-left: 18rem;
}
.medicine-title {
  font-size: 3rem;
  font-weight: 800;
}

.medicine-desc {
  font-size: 1.5rem;
  width: 80%;
}
</style>

<style>
.medicine-btn {
  font-size: 1.5rem;
  font-weight: 600 !important;
  margin-top: 2rem;
  width: 25%;
}
</style>

<style scoped>
.Appointment-title {
  font-weight: 800;
  width: 55% !important;
  font-size: 3rem;
  margin-bottom: 2rem;
}

.Appointment-desc {
  font-weight: 400;
  font-size: 1.25rem;
  width: 55% !important;
}

.Appointment-container {
  margin: 8rem 0 0 8rem !important;
}

.button-1 {
  gap: 2rem;
}
.button-2 {
  gap: 3rem;
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
  font-size: 1.25rem;
  font-weight: 600;
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
}

.article-card {
  background: #ffffff !important;
  box-shadow: 0px 16px 40px rgba(154, 170, 207, 0.2) !important;
}
</style>

<style scoped>
.ready-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
}

.ready-desc {
  font-size: 1.25rem;
  font-weight: 500;
  color: white;
}

.custom-card {
  background: linear-gradient(118.17deg, #03acf2 6.86%, #c8e6c9 103.41%) !important;
}

.btn-now {
  color: #03acf2 !important;
}
</style>

<style scoped>
.apotik-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.apotik-desc {
  font-size: 1.25rem;
  font-weight: 400;
  width: 65% !important;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  padding: 0;
}

.card-desc {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  padding: 0 !important;
}
.apotik-btn {
  width: 110%;
}
.txt-testi {
  font-size: 30px;
  font-weight: bold;
}
</style>

<style></style>
