<template>
  <v-app>
    <div class="d-flex">
      <div class="d-flex flex-column container-title">
        <h2 class="header-title">Seputar Kesehatan Indra</h2>
        <p class="header-desc">
          Chat dokter, kunjungi rumah sakit, beli obat, cek lab, dan update
          informasi seputar kesehatan,.
        </p>
        <div class="d-flex flex-row align-center">
          <a class="header-link">MORE INFO</a>
          <div class="text-center">
            <v-btn
              to="/registerpopup"
              rounded
              color="success"
              class="ml-5 ml-md-12 pa-5 button-header-custom"
              dark
              width="321"
            >
              Daftar Sekarang
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
    </div>

    <v-row class="px-5 px-md-10 mt-10 mt-sm-16" style="z-index: 2">
      <v-col
        cols="12"
        sm="6"
        md="4"
        class="d-flex flex-row"
        v-for="item in our_advantage"
        :key="item"
      >
        <v-divider vertical></v-divider>
        <div class="d-flex flex-column pl-5">
          <h4 class="three-title font-weight-bold text-h4 mb-2">
            {{ item?.title }}
          </h4>
          <p class="three-desc">{{ item?.description }}</p>
        </div>
      </v-col>
    </v-row>

    <v-row
      class="px-3 px-md-15 mt-10 mt-sm-16 pt-sm-10 white"
      style="z-index: 2"
    >
      <v-col
        cols="12"
        sm="6"
        md="4"
        class="d-flex flex-row justify-center px-5 mt-10 mt-md-0"
        v-for="item in our_advantage_2"
        :key="item"
      >
        <div>
          <v-row class="justify-center align-center" style="gap: 8px">
            <div>
              <v-img
                src="@/assets/Landing Page/Keunggulan/ios-medkit-outline.svg"
                height="84"
                width="90"
              />
            </div>
            <div class="d-flex flex-column align-center">
              <h4 class="keunggulan-angka">+{{ item?.count }}</h4>
              <h5 class="keunggulan-apa">Doctors</h5>
            </div>
          </v-row>
          <v-row class="justify-center">
            <div class="text-center mt-5 px-5" style="max-width: 75%">
              {{ item?.description }}
            </div>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <section class="layanan-khusus mt-16 pt-16">
      <div class="px-8 px-sm-16 mx-md-16 px-md-16">
        <div class="title">
          <h2 class="layanan-title">Layanan Khusus</h2>
          <p class="layanan-desc">
            DokterQ menghadirkan layanan khusus yang dapat menunjang seputar
            kesehatan indra seperti mata, telinga, mulut, kulit, hidung.
          </p>
        </div>
      </div>
    </section>

    <section class="mx-0">
      <div class="custom-layanan-container">
        <div class="parent-layanan">
          <v-img
            src="@/assets/Landing Page/LayananKhusus/LayananImage.svg"
            class="layanan-image custom-layanan-image-size"
          >
          </v-img>
          <v-img
            src="@/assets/Landing Page/LayananKhusus/OvalLayanan.svg"
            class="layanan-oval custom-layanan-oval-size"
          >
          </v-img>
        </div>
        <v-row class="mt-3 px-5">
          <v-col
            cols="12"
            sm="6"
            md="4"
            class="pa-5 pa-sm-3"
            v-for="(item, i) in 3"
            :key="i"
          >
            <v-card
              class="custom-card-konsultasi rounded-lg justify-space-between"
            >
              <div>
                <v-img
                  class="rounded-t-lg"
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="170"
                ></v-img>

                <v-card-subtitle class="black--text pa-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus pretium fermentum felis id condimentum.
                </v-card-subtitle>
              </div>
              <v-card-actions class="d-flex justify-end align-end pa-0">
                <v-btn color="success" class="pa-5 custom-button-layanan" dark>
                  SEE DETAILS
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </section>

    <section class="my-16">
      <v-row class="mt-10 mt-sm-16">
        <v-col cols="12" md="6" class="d-flex align-center">
          <div class="px-8 px-sm-12 px-md-16 d-flex flex-column">
            <h2 class="Appointment-title">
              Janji Temu Dengan Dokter Spesialis
            </h2>

            <p class="Appointment-desc">
              Hanya dengan beberapa Klik, anda bisa konsultasi dengan dokter
              spesialis yang sudah bergabung di website kami.
            </p>
            <v-row class="px-3">
              <v-btn color="success" class="custom-medicine-btn py-5" rounded>
                Cari Dokter Sekarang</v-btn
              >
            </v-row>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="d-flex flex-row justify-center px-10 mt-10 mt-sm-2"
        >
          <v-img
            src="@/assets/Landing Page/Appointment/Appointment.svg"
            max-width="746.15"
            max-height="481.43"
            class="appointment-image-size"
          ></v-img>
        </v-col>
      </v-row>
    </section>

    <section class="my-14">
      <v-row class="mt-10 mt-sm-16">
        <v-col
          cols="12"
          md="7"
          class="d-flex flex-row justify-center px-10 mt-10 mt-sm-2"
        >
          <v-img
            src="@/assets/Landing Page/Medicine/MedicineImage.svg"
            max-width="604"
            max-height="459"
            class="appointment-image-size"
          ></v-img>
        </v-col>
        <v-col cols="12" md="5">
          <div class="px-8 px-sm-12 px-md-16 d-flex flex-column">
            <h2 class="Appointment-title">Cari Obat</h2>

            <p class="Appointment-desc">
              Penuhi kebutuhan obat anda dengan mengunjungi E-commerce kami yang
              memiliki lebih dari 100 macam obat.
            </p>
            <v-row class="px-3">
              <v-btn color="success" class="custom-medicine-btn py-5" rounded>
                Kunjungi Toko</v-btn
              >
            </v-row>
          </div>
        </v-col>
      </v-row>
    </section>

    <section class="article mt-8 px-3 px-sm-10 px-md-16">
      <div class="d-flex flex-row justify-space-between align-center">
        <h2 class="article-header-title">Baca Artikel Seputar Kesehatan</h2>
        <router-link :to="{ name: 'ArticleView' }" class="article-header-link">
          Lihat semua</router-link
        >
      </div>

      <div class="button-group mt-8">
        <v-btn
          v-for="(category, i) in categoryArticle"
          :key="i"
          outlined
          rounded
          class="button-group-child button-group-child-size"
          height="47"
          @click="getArticleByCategory(category.links.article)"
        >
          {{ category.name }}
        </v-btn>
      </div>

      <v-row class="mt-3">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="pa-5 pa-sm-3"
          v-for="(articleData, i) in articleList"
          :key="i"
        >
          <v-card max-height="fit-content" class="article-card rounded-lg">
            <router-link :to="{ path: `${articleData.links['self']}` }">
              <div class="">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="200px"
                  class="article-img rounded-t-lg"
                ></v-img>
              </div>

              <v-card-text class="px-5 py-0 pt-4">
                <v-chip color="secondary" class="rounded-lg"> mata </v-chip>
              </v-card-text>

              <v-card-subtitle class="card-desc2"> 2023-02-16 </v-card-subtitle>

              <v-card-text class="font-weight-bold pb-0 px-5">
                Mengenal Kondisi Flat Foot, Berbahaya atau Tidak?
              </v-card-text>

              <v-card-text class="pt-0 px-5">
                “Flat foot merupakan kondisi ketika telapak kaki lurus alias
                tidak memiliki lengkungan. Anak dengan flat foot akan mudah
                lelah dan tersandung saat berjalan atau berlari.”
              </v-card-text>
            </router-link>
          </v-card>
        </v-col>
      </v-row>
    </section>
    <router-view />
  </v-app>
</template>
<script>
import axios from "axios";
import moment from "moment";
import { EventBus } from "../../../event-bus.js";

// import CommentPatientComponent from "@/components/home/CommentPatientComponent.vue";

export default {
  // name: "CommentPatientComponent",

  components: {
    // CommentPatientComponent,
  },

  data: () => ({
    show: false,
    articleList: [],
    categoryArticle: [],
    ArticleByCategory: [],
    articleLink: [],
    our_advantage: [
      {
        title: "Mudah",
        description: "Hanya dengan beberapa klik",
      },
      {
        title: "Efisien",
        description: "Aplikasi yang terpercaya",
      },
      {
        title: "Terpercaya",
        description: "Semua dokter kami pastikan ber-sertifikat",
      },
    ],
    our_advantage_2: [
      {
        count: "1200",
        description:
          "Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.",
      },
      {
        count: "1200",
        description:
          "Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.",
      },
      {
        count: "1200",
        description:
          "Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.",
      },
    ],
  }),

  created() {
    this.$watch(
      async () => {
        this.$route;
        return {};
      },
      async () => {
        this.categoryArticle = [];
        this.articleList = [];
      }
    );
  },

  async mounted() {
    await this.getCategoryArticle();
    await this.getArticleByCategory(this.categoryArticle[0].links.article);
    // await this.getArticleLink();
  },

  methods: {
    async getCategoryArticle() {
      try {
        EventBus.$emit("startLoading");
        const response = await axios.get(`${this.$api}/article/category`);
        const dataCategory = response.data.data;
        this.categoryArticle = dataCategory;
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
      EventBus.$emit("stopLoading");
    },

    async getArticleByCategory(articleLink) {
      try {
        this.articleList = [];
        // const artLink = await axios.get(`${this.$api}/article/category`);
        EventBus.$emit("startLoading");

        const response = articleLink
          ? await axios.get(`${this.$api}${articleLink}`)
          : await axios.get(`${this.$api}/article/post?type=latest`);
        const dataArticle = response.data.data.articles;
        var artCreated = moment(dataArticle.created_at).format("YYYY-MM-DD ");

        for (let i = 0; i < dataArticle.length; i++) {
          dataArticle[i].created_at = artCreated;
        }
        for (let i = 0; i < 5; i++) {
          this.articleList.push(dataArticle[i]);
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
      EventBus.$emit("stopLoading");
    },

    // async getArticleLink() {
    //   try {
    //     const res = await axios.get(`${this.$api}/article/category`);
    //     var finalLink = res.data.data;

    //     // var fLength = finalLink.length;
    //     // var linkValue = [];

    //     // for (let i = 0; i < fLength; i++) {
    //     //   finalLink = finalLink[i];
    //     //   console.log("a");
    //     // }
    //     // console.log("as");
    //   } catch (err) {
    //     var error = err;
    //     if (err.response.data.errors) {
    //       error = err.response.data.errors;
    //       for (const key in error) {
    //         console.log(`${error[key]}`);
    //         EventBus.$emit("showSnackbar", error[key], "red");
    //       }
    //       console.log(error);
    //     }
    //   }
    // },
  },
};
</script>

<style scoped>
.parent {
  position: relative;
  top: 0;
  right: 0;
}

.oval-top {
  width: 62rem !important;
  height: 31rem !important;
  margin-top: -4rem;
  position: relative;
  z-index: 1;
}

.banner {
  position: absolute;
  top: 2rem;
  right: 0;
}

.oval-transparent {
  position: absolute;
  top: -4rem;
  right: 0;
  z-index: 1 !important;
}

.index-2 {
  z-index: 2 !important;
}
</style>

<style>
@media (min-width: 0px) {
  .custom-layanan-container {
    display: flex;
    flex-direction: column;
  }
  .container-title {
    margin-left: 2rem;
    margin-top: 3.5rem;
  }
  .header-desc {
    width: 80%;
    font-size: 1.25rem;
    font-weight: 400 !important;
  }
  .header-title {
    font-size: 3rem !important;
    font-weight: 600;
    width: 400px;
  }
  .layanan-desc {
    font-weight: 400;
    font-size: 1.25rem;
    width: 80% !important;
  }
  .layanan-image-size {
    width: 300px;
    height: 250px;
  }
  .layanan-oval-size {
    width: 305px;
    height: 400px;
  }
  .Appointment-title {
    font-weight: 800;
    width: 85% !important;
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  .custom-medicine-btn {
    font-size: 1.5rem;
    font-weight: 600 !important;
    margin-top: 2rem;
  }
  .appointment-image-size {
    width: 400px;
  }
  .button-group-child-size {
    width: 180px;
  }
}

@media (min-width: 600px) {
  .button-group-child-size {
    width: 200px;
  }
  .appointment-image-size {
    width: 700.15px;
  }
  .container-title {
    margin-left: 7rem;
    margin-top: 4rem;
  }
  .header-desc {
    width: 80%;
    font-size: 1.25rem;
    font-weight: 400 !important;
  }
  .layanan-desc {
    font-weight: 400;
    font-size: 1.25rem;
    width: 50% !important;
  }
  .layanan-image-size {
    width: 452px;
    height: 385px;
  }
  .layanan-oval-size {
    width: auto;
    height: auto;
  }
  .Appointment-title {
    font-weight: 800;
    width: 75% !important;
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  .custom-layanan-image-size {
    width: 352px;
    height: 285px;
  }
  .custom-layanan-oval-size {
    width: 452px;
    height: 595px;
  }
}

@media (min-width: 900px) {
  .layanan-desc {
    font-weight: 400;
    font-size: 1.25rem;
    width: 40% !important;
  }
}
@media (min-width: 1200px) {
  .custom-layanan-container {
    display: flex;
    flex-direction: row;
  }
}

.header-title {
  font-size: 3rem !important;
  font-weight: 600;
}

.header-link {
  font-size: 1.25rem !important;
  color: #03acf2 !important;
}

.button-header-custom {
  color: white !important;
  font-size: 1rem !important;
  width: 13rem !important;
  height: 2.25rem !important;
}

.header-banner {
  margin-top: 4rem;
  margin-right: 7rem;
  width: 50rem !important;
  height: 30rem !important;
  z-index: 1;
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
  color: #00579b;
  font-weight: 600;
}

.three-desc {
  font-weight: 400;
  font-size: 1.1rem;
  width: 110%;
}
</style>

<style>
/* .v-responsive {
  flex: 0 auto !important;
} */

.keunggulan-apa {
  font-weight: 600;
  font-size: 1.25rem !important;
}

.keunggulan-angka {
  font-weight: 800;
  font-size: 2.5rem;
  margin-bottom: -1rem;
  color: #357a38;
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

.container-card1 {
  display: flex;
  flex-direction: row;
  gap: 5rem;
}
.custom-button-layanan {
  border-radius: 8px 0 !important;
  font-weight: 600;
  font-size: 0.9rem;
}
.button-layanan {
  margin-right: -0.5rem;
  border-radius: 1.5rem 0;
  font-weight: 600;
  font-size: 0.9rem;
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
  height: auto;
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

/* .article-img {
  border-radius: 1rem 1rem 0 0 !important;
} */

.card-desc {
  color: black !important;
  font-size: 15px;
  max-width: fit-content;
  font-weight: lighter;
  padding-left: 20px;
  padding-right: 25px;
  padding-bottom: 20px;
}

.card-desc1 {
  max-width: fit-content;
  padding-left: 20px;
  padding-bottom: 5px;
  color: black !important;
  font-weight: bold;
  font-size: 20px;
}

.card-desc2 {
  color: black !important;
  font-weight: lighter;
  padding-left: 20px;
}

.card-desc3 {
  color: white !important;
  border-radius: 5px;
  font-size: 15px;
  max-width: fit-content;
  font-weight: lighter;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 5px;
}

.article-card {
  background: #ffffff !important;
  box-shadow: 0px 16px 40px rgba(154, 170, 207, 0.2) !important;
}
</style>