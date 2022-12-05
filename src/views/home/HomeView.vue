<template>
  <v-app class="">
    <!-- <NavBar /> -->

    <div class="d-flex">
      <div class="d-flex flex-column container-title">
        <h2 class="header-title">Seputar Kesehatan Indra</h2>
        <p class="header-desc">
          Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update
          informasi seputar kesehatan,.
        </p>
        <div class="d-flex flex-row align-center">
          <a class="header-link">MORE INFO</a>
          <div class="text-center">
            <v-btn rounded color="success" class="ml-8 button-header" dark>
              Register NOW
            </v-btn>
          </div>
        </div>
      </div>
      <div class="d-flex parent">
        <v-img src="@/assets/Landing Page/Header/Oval.svg" class="oval-top">
        </v-img>
        <v-img src="@/assets/Landing Page/Header/Banner1.svg" class="banner">
        </v-img>
        <v-img
          src="@/assets/Landing Page/Header/OvalTransparent.svg"
          class="oval-transparent"
        >
        </v-img>
      </div>
      <!-- <OvalTop /> -->
    </div>

    <div class="d-flex flex-row container-three">
      <div class="d-flex flex-column">
        <h4 class="three-title">Business Solution</h4>
        <p class="three-desc">Interdum et malesuada fames ac ante…</p>
      </div>

      <v-divider vertical></v-divider>

      <div class="d-flex flex-column">
        <h4 class="three-title">Business Solution</h4>
        <p class="three-desc">Interdum et malesuada fames ac ante…</p>
      </div>

      <v-divider vertical></v-divider>

      <div class="d-flex flex-column">
        <h4 class="three-title">Business Solution</h4>
        <p class="three-desc">Interdum et malesuada fames ac ante…</p>
      </div>
    </div>

    <section class="tiga-keunggulan">
      <div class="d-flex flex-column">
        <div class="container-keunggulan">
          <div class="d-flex flex-row">
            <v-img
              src="@/assets/Landing Page/Keunggulan/ios-medkit-outline.svg"
              class="image-keunggulan"
              height="84"
              width="90"
            >
            </v-img>
            <div class="d-flex flex-column align-center">
              <h4 class="keunggulan-angka">+1200</h4>
              <h5 class="keunggulan-apa">Doctors</h5>
            </div>
          </div>
          <div class="d-flex flex-row mid-keuggulan">
            <v-img
              src="@/assets/Landing Page/Keunggulan/ios-medkit-outline.svg"
              class="image-keunggulan"
              height="84"
              width="90"
            >
            </v-img>
            <div class="d-flex flex-column align-center">
              <h4 class="keunggulan-angka">+1200</h4>
              <h5 class="keunggulan-apa">Doctors</h5>
            </div>
          </div>

          <div class="d-flex flex-row">
            <v-img
              src="@/assets/Landing Page/Keunggulan/ios-medkit-outline.svg"
              class="image-keunggulan"
              height="84"
              width="90"
            >
            </v-img>
            <div class="d-flex flex-column align-center">
              <h4 class="keunggulan-angka">+1200</h4>
              <h5 class="keunggulan-apa">Doctors</h5>
            </div>
          </div>
        </div>
        <div class="d-flex flex-row container-desc-keunggulan">
          <p class="keunggulan-desc text-center">
            Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.
          </p>
          <p class="keunggulan-desc text-center">
            Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.
          </p>
          <p class="keunggulan-desc text-center">
            Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.
          </p>
        </div>
      </div>
    </section>

    <section class="layanan-khusus mt-16 pt-16">
      <div class="mx-16 px-16">
        <div class="title">
          <h2 class="layanan-title">Layanan Khusus</h2>
          <p class="layanan-desc">
            Curabitur egestas consequat lorem, vel fermentum augue porta id.
            Aliquam lobortis magna neque, gravida consequat velit venenatis at.
          </p>
        </div>
      </div>
    </section>

    <section class="layanan-khusus card">
      <div class="d-flex flex-row">
        <div class="parent-layanan">
          <v-img
            src="@/assets/Landing Page/LayananKhusus/LayananImage.svg"
            max-width="502"
            max-height="425"
            class="layanan-image"
          >
          </v-img>
          <v-img
            src="@/assets/Landing Page/LayananKhusus/OvalLayanan.svg"
            class="layanan-oval"
          >
          </v-img>
        </div>

        <div class="ml-16 container-card flex-grow-1">
          <v-card
            max-width="255"
            max-height="336"
            class="elevation-5 rounded-xl"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="168"
            ></v-img>

            <v-card-subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              pretium fermentum felis id condimentum.
            </v-card-subtitle>

            <v-card-actions class="d-flex justify-end">
              <v-btn color="success" class="ml-8 pa-5 button-layanan" dark>
                SEE DETAILS
              </v-btn>
            </v-card-actions>
          </v-card>

          <v-card
            max-width="255"
            max-height="336"
            class="elevation-5 rounded-xl"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="168"
            ></v-img>

            <v-card-subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              pretium fermentum felis id condimentum.
            </v-card-subtitle>

            <v-card-actions class="d-flex justify-end">
              <v-btn color="success" class="ml-8 pa-5 button-layanan" dark>
                SEE DETAILS
              </v-btn>
            </v-card-actions>
          </v-card>

          <v-card
            max-width="255"
            max-height="336"
            class="elevation-5 rounded-xl"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="168"
            ></v-img>

            <v-card-subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              pretium fermentum felis id condimentum.
            </v-card-subtitle>

            <v-card-actions class="d-flex justify-end">
              <v-btn color="success" class="ml-8 pa-5 button-layanan" dark>
                SEE DETAILS
              </v-btn>
            </v-card-actions>
          </v-card>

          <v-card
            max-width="255"
            max-height="336"
            class="elevation-5 rounded-xl"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="168"
            ></v-img>

            <v-card-subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              pretium fermentum felis id condimentum.
            </v-card-subtitle>

            <v-card-actions class="d-flex justify-end">
              <v-btn color="success" class="ml-8 pa-5 button-layanan" dark>
                SEE DETAILS
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </section>

    <section class="Appointment my-16">
      <div class="d-flex flex-row justify-space-between">
        <div class="Appointment-container d-flex flex-column">
          <h2 class="Appointment-title">Janji Temu Dengan Dokter Spesialis</h2>

          <p class="Appointment-desc">
            Hanya dengan beberapa Klik, anda bisa konsultasi dengan dokter
            spesialis yang sudah bergabung di website kami.
          </p>

          <v-btn color="success" class="medicine-btn py-5" rounded>
            Cari Dokter Sekarang</v-btn
          >
        </div>
        <v-img
          src="@/assets/Landing Page/Appointment/Appointment.svg"
          max-width="746.15"
          max-height="481.43"
          class="Appointment-image"
        ></v-img>
      </div>
    </section>

    <section class="medicine pt-16 ma-16 px-16">
      <div class="d-flex flex-row justify-space-around">
        <v-img
          src="@/assets/Landing Page/Medicine/MedicineImage.svg"
          class="medicine-image"
          max-width="604"
          max-height="459"
        ></v-img>
        <div class="d-flex flex-column medicine-text">
          <h2 class="medicine-title">Cari Obat</h2>
          <p class="medicine-desc">
            Penuhi kebutuhan obat anda dengan mengunjungi E-commerce kami yang
            memiliki lebih dari 100 macam obat.
          </p>
          <v-btn color="success" class="medicine-btn py-5" rounded>
            Kunjungi Toko</v-btn
          >
        </div>
      </div>
    </section>

    <section class="article mt-8 mx-8">
      <div class="d-flex flex-row justify-space-between align-center">
        <h2 class="article-header-title">Baca Artikel Seputar Kesehatan</h2>
        <a class="article-header-link"> Lihat semua</a>
      </div>

      <div class="button-group mt-8">
        <v-btn
          outlined
          rounded
          class="button-group-child"
          width="207px"
          height="47"
        >
          Pengelihatan
        </v-btn>
        <v-btn
          outlined
          rounded
          class="button-group-child"
          width="207px"
          height="47"
        >
          Pengelihatan
        </v-btn>
        <v-btn
          outlined
          rounded
          class="button-group-child"
          width="207px"
          height="47"
        >
          Pengelihatan
        </v-btn>
        <v-btn
          outlined
          rounded
          class="button-group-child"
          width="207px"
          height="47"
        >
          Pengelihatan
        </v-btn>
        <v-btn
          outlined
          rounded
          class="button-group-child"
          width="207px"
          height="47"
        >
          Pengelihatan
        </v-btn>
      </div>

      <div
        class="article-container d-flex flex-row align-center justify-space-between"
      >
        <v-card max-width="325" class="article-card">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            class="article-img"
          ></v-img>

          <!-- <v-card-title> Top western road trips </v-card-title> -->

          <v-card-subtitle class="card-desc">
            “Jerawat papula berwarna kemerahan dan meradang. Jenis jerawat ini
            bisa diatasi dengan beberapa jenis kandungan yang ada dalam skin
            care.”
          </v-card-subtitle>
          <v-card-text>Sumber Superideal.id</v-card-text>
        </v-card>

        <v-card max-width="325" class="article-card">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            class="article-img"
          ></v-img>

          <!-- <v-card-title> Top western road trips </v-card-title> -->

          <v-card-subtitle class="card-desc">
            “Jerawat papula berwarna kemerahan dan meradang. Jenis jerawat ini
            bisa diatasi dengan beberapa jenis kandungan yang ada dalam skin
            care.”
          </v-card-subtitle>
          <v-card-text>Sumber Superideal.id</v-card-text>
        </v-card>
        <v-card max-width="325" class="article-card">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            class="article-img"
          ></v-img>

          <!-- <v-card-title> Top western road trips </v-card-title> -->

          <v-card-subtitle class="card-desc">
            “Jerawat papula berwarna kemerahan dan meradang. Jenis jerawat ini
            bisa diatasi dengan beberapa jenis kandungan yang ada dalam skin
            care.”
          </v-card-subtitle>
          <v-card-text>Sumber Superideal.id</v-card-text>
        </v-card>
        <v-card max-width="325" class="article-card">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            class="article-img"
          ></v-img>

          <!-- <v-card-title> Top western road trips </v-card-title> -->

          <v-card-subtitle class="card-desc">
            “Jerawat papula berwarna kemerahan dan meradang. Jenis jerawat ini
            bisa diatasi dengan beberapa jenis kandungan yang ada dalam skin
            care.”
          </v-card-subtitle>
          <v-card-text>Sumber Superideal.id</v-card-text>
        </v-card>
        <v-card max-width="325" class="article-card">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            class="article-img"
          ></v-img>

          <!-- <v-card-title> Top western road trips </v-card-title> -->

          <v-card-subtitle class="card-desc">
            “Jerawat papula berwarna kemerahan dan meradang. Jenis jerawat ini
            bisa diatasi dengan beberapa jenis kandungan yang ada dalam skin
            care.”
          </v-card-subtitle>
          <v-card-text>Sumber Superideal.id</v-card-text>
        </v-card>
      </div>
    </section>
    <router-view />

    <!-- <Footer /> -->
  </v-app>
</template>
<script>
// import OvalTop from "@/components/HeaderImage/HeaderImage.vue";
// import NavBar from "@/components/Navbar/Navbar.vue";
// import Footer from "@/components/Footer/Footer.vue";
export default {
  components: {
    // Footer,
    // NavBar,
  },

  data: () => ({
    show: false,
  }),
  name: "HomeView",
};
</script>

<style>
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

<style>
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

<style>
/* .v-responsive {
  flex: 0 auto !important;
} */

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

<style>
.parent-layanan {
  position: relative;
  top: 0;
  left: 0;
}
.layanan-title {
  font-weight: 800;
  font-size: 2.5rem;
  margin-bottom: 2rem;
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
.button-layanan {
  margin-right: -0.5rem;
  border-radius: 1.5rem 0;
  font-weight: 600;
  font-size: 0.9rem;
}
</style>

<style>
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

.button-1 {
  gap: 2rem;
}
.button-2 {
  gap: 3rem;
}
</style>

<style>
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

.medicine-btn {
  font-size: 1.5rem;
  font-weight: 600 !important;
  margin-top: 2rem;
  width: 25%;
}
</style>

<style>
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

<style>
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
