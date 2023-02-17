<template>
  <v-card class="mx-5 my-5">
    <div class="container-card">
      <div class="black text-h4 px-5 rounded-lg title-hospital">
        RS Edelweiss Bandung
      </div>
    </div>
    <div class="children-container">
      <div class="hospital-location mt-7">Lokasi Rumah Sakit</div>
      <div class="row mt-5">
        <div class="col-6">
          <v-img src="@/assets/JanjiTemu/locationrs.png" />
        </div>
        <div class="col-6">
          <div class="text-h6 address-map mx-auto">
            Jl. Soekarno Hatta No.550, Sekejati, Kec. Buahbatu, Kota Bandung,
            Jawa Barat
          </div>
          <div class="d-flex flex-row justify-center align-center button-group">
            <v-btn class="btn-call" color="#03ACF2" height="50" outlined
              >telepon RS</v-btn
            >
            <v-btn class="btn-location" height="50" color="#03ACF2" outlined
              >Petunjuk lokasi</v-btn
            >
          </div>
        </div>
      </div>
      <div class="text-h6 description-hospital my-10">
        RS Edelweiss Bandung merupakan rumah sakit yang berada dibawah naungan
        PT Dawa Daya Kahuripan yang berada di Kota Bandung, Jawa Barat. RS
        Edelweiss Bandung memiliki Visi Menjadi pilihan utama sebagai penyedia
        layanan kesehatan terintegrasi, yang berfokus pada pelayanan
        berkualitas. Dengan Misi Memberikan pengalaman terbaik dalam pelayanan
        dan keselamatan pasien, dengan penuh kasih sayang serta terpercaya
        sesuai dengan kebutuhan setiap pelanggan. Saat ini, RS Edelweiss Bandung
        menyediakan layanan Test COVID-19 yaitu PCR Drive Thru.
      </div>
      <div class="title-facility my-7">Fasilitas</div>
      <div class="facility text-h6">
        RS Edelweiss Bandung mempunyai beragam fasilitas, sebagai berikut :
      </div>
      <div>
        <v-list class="col">
          <div class="text-h6 list-facility" >
            <v-icon class="mx-3" size="small">
              mdi-circle
            </v-icon>
            Home Care
          </div>
          <div class="text-h6 list-facility" >
            <v-icon class="mx-3" size="small">
              mdi-circle
            </v-icon>
            Area Parkir
          </div>
          <div class="text-h6 list-facility" >
            <v-icon class="mx-3" size="small" >
              mdi-circle
            </v-icon>
            Ruang Tunggu
          </div>
          <div class="text-h6 list-facility">
            <v-icon class="mx-3" size="small" color="blue-darken-2">
              mdi-circle
            </v-icon>
            Free Wi-Fi
          </div>
        </v-list>
      </div>
    </div>
    <section class="article mt-8 mx-8">
      <div class="d-flex flex-row justify-space-between align-center">
        <h2 class="article-header-title">Pilih Dokter Yang Sesuai</h2>
        <a class="article-header-link" > Lihat semua</a>
      </div>

      <div class="button-group mt-8 mx-auto">
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
      class="article-container d-flex flex-row align-center justify-space-between col-12"
      >
        <v-card
          v-for="(cardData, index) in dataCard"
          :key="index"
          max-width="325"
          class="article-card rounded-bl-xl rounded-br-xl"
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

          <div class="d-flex flex-row align-end">
            <v-card-text class="black--text"
              >Rating: {{ cardData.rating }}</v-card-text
            >
            <v-btn
              to="/detail-dokter"
              color="success"
              height="45"
              class="rounded-tl-xl rounded-br-xl"
            >
              Buat Janji</v-btn
            >
          </div>
        </v-card>
      </div>
    </section>
  </v-card>
</template>

<script>
export default {
  name: "janjiTemu",
  data: () => ({
    

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
    ],
  }),
};
</script>
<style>
.title-hospital {
  width: fit-content;
  font-weight: bold;
  color: white;
  margin-left: 3%;
  margin-bottom: 5px;
  position: absolute;
  align-self: flex-end;
}
.container-card {
  background-image: url("@/assets/JanjiTemu/rsedel.png");
  background-size: cover;
  height: 500px;
}
.children-container {
  margin-left: 3%;
}
.hospital-location {
  font-weight: bolder;
  font-size: xx-large;
}
.address-map {
  width: 70%;
  color: #6a6a6a;
}
.button-group {
  height: 100%;
  gap: 3rem;
}
.btn-call {
  width: 30%;
  font-weight: bold;
}
.btn-location {
  width: 30%;
  font-weight: bold;
}
.description-hospital {
  color: #6a6a6a;
  width: 80%;
}
.title-facility {
  font-weight: bolder;
  font-size: xx-large;
}
.facility {
  color: #6a6a6a;
  width: 80%;
}
.list-facility{
  color:#6a6a6a;
}
.article-header-link {
  font-size: 1rem;
  color: #03acf2 !important;
  text-decoration-line: underline;
}
.article{
  margin-left: 3%;
}
</style>
