<template>
  <div>
    <v-container fluid class="px-16 py-10">
      <v-row>
        <v-col cols="3">
          <div class="wrapper-left">
            <v-img
              src="@/assets/ECommerce/product-img.png"
              max-height="200"
              contain
            ></v-img>

            <div class="product-cathegory">
              <p class="cath-title">Kategory</p>
              <p class="cath-name">Hidung</p>
            </div>

            <div class="product-info">
              <div class="wrap">
                <v-img
                  src="@/assets/ECommerce/pharmacy.png"
                  max-width="25px"
                  max-height="25px"
                  contain
                ></v-img>
                <p>Dikirim dari apotek resmi</p>
              </div>
              <div class="wrap">
                <v-img
                  src="@/assets/ECommerce/24-hour-delivery.png"
                  max-width="25px"
                  max-height="25px"
                  contain
                ></v-img>
                <p>Pengiriman 24 Jam</p>
              </div>
              <div class="wrap">
                <v-img
                  src="@/assets/ECommerce/secure-packaging.png"
                  max-width="25px"
                  max-height="25px"
                  contain
                ></v-img>
                <p>Kemasan aman & personal</p>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="5">
          <div class="wrapper-middle">
            <p class="product-name">
              Afrin Oxymetazoline HCI 15mL (semprot hidung)
            </p>
            <p class="product-price">Rp. 42.500,00</p>
            <div class="product-warning">
              <v-img
                src="@/assets/ECommerce/warning.png"
                max-width="20px"
                max-height="20px"
                contain
              ></v-img>

              <p class="my-0">
                Produk ini hanya dapat dibeli dengan resep digital setelah
                konsultasi
              </p>
            </div>

            <div class="buttons-wrap">
              <div class="left-wrap">
                <v-btn block class="add-to-cart text-capitalize"
                  >+ Keranjang</v-btn
                >
                <v-btn block outlined class="buy-product text-capitalize"
                  >Beli Sekarang</v-btn
                >
              </div>

              <div class="right-wraps">
                <button
                  class="btn btn--minus"
                  @click="changeCounter('-1')"
                  type="button"
                  name="button"
                >
                  -
                </button>
                <input
                  class="quantity"
                  type="text"
                  name="name"
                  :value="counter"
                />
                <button
                  class="btn btn--plus"
                  @click="changeCounter('1')"
                  type="button"
                  name="button"
                >
                  +
                </button>
              </div>
            </div>

            <div class="details-product">
              <div class="wrap">
                <p class="detail-title">Deskripsi</p>
                <p class="detail-content mb-0">
                  Afrin adalah sediaan semprot hidung yang mengandung
                  oxymetazoline. Obat Afrin digunakan untuk membantu meringankan
                  hidung tersumbat yang disebabkan oleh flu, alergi serbuk sari,
                  ataupun sinusitis.
                </p>
              </div>
              <div class="wrap">
                <p class="detail-title">Indikasi umum</p>
                <p class="detail-content mb-0">
                  Manfaat obat Afrin adalah untuk mengatasi hidung tersumbat
                  yang berkaitan dengan alergi saluran pernapasan.
                </p>
              </div>
              <div class="wrap">
                <p class="detail-title">Cara penyimpanan</p>
                <p class="detail-content mb-0">
                  Simpan pada suhu antara 20-25 derajat celcius, di tempat
                  kering dan sejuk
                </p>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="wrapper-right">
            <p class="consultation-title">Konsultasi Dokter</p>
            <v-card class="elevation-2 rounded-lg pa-4 consult-card">
              <div class="doctor-info">
                <v-img
                  src="@/assets/ECommerce/doctor.jpg"
                  max-width="65px"
                  max-height="65px"
                  cover
                  class="doctor-photo"
                ></v-img>
                <div class="wrap-right">
                  <p class="doctor-name">Dr. Elizabeth DeSanta</p>
                  <p class="doctor-specification">
                    Dokter Spesialis Pernapasan
                  </p>
                </div>
              </div>

              <p class="doctor-rating">Terpercaya</p>
              <p class="doctor-desc">
                <span>Dr. Elizabeth DeSanta</span> adalah Pernapasan Spesialis
                Sistem pernapasan; diagnosa, pencegahan dan pengobatan berbagai
                jenis penyakit pernapasan
              </p>

              <v-btn block outlined class="consult text-capitalize"
                >Konsultasi</v-btn
              >
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1,
    };
  },
  methods: {
    changeCounter: function (num) {
      this.counter += +num;
      console.log(this.counter);
      !isNaN(this.counter) && this.counter > 0
        ? this.counter
        : (this.counter = 0);
    },
  },
  computed: {},
};
</script>

<style scoped>
.wrapper-left .product-cathegory {
  margin-bottom: 2rem;
}

.wrapper-left .product-cathegory .cath-title {
  font-size: 1.2rem;
  margin-bottom: 0;
  margin-top: 1rem;
}

.wrapper-left .product-cathegory .cath-name {
  /* font-size: 1.5rem; */
  color: #4caf50;
}

.wrapper-left .product-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.wrapper-left .product-info .wrap {
  display: flex;
  gap: 10px;
  align-items: center;
}
.wrapper-left .product-info p {
  margin: 0;
}

.wrapper-middle .product-name {
  font-size: 1.4rem;
  font-weight: 600;
  height: 3rem;
}

.wrapper-middle .product-price {
  font-size: 1.1rem;
  font-weight: 900;
}

.wrapper-middle .product-warning {
  width: fit-content;
  border-radius: 10px;
  background-color: rgba(76, 175, 80, 0.23);
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.wrapper-middle .buttons-wrap {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 1rem;
}

.wrapper-middle .buttons-wrap .left-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 55%;
}

.wrapper-middle .buttons-wrap .left-wrap .add-to-cart {
  background-color: #4caf50;
  color: white;
  font-weight: 700;
  border-radius: 10px;
  letter-spacing: 0.2px;
}

.wrapper-middle .buttons-wrap .left-wrap .buy-product {
  background: #ffffff;
  border: 2px solid #4caf50;
  border-radius: 10px;
  font-weight: 700;
  color: #4caf50;
  letter-spacing: 0.2px;
}

.wrapper-middle .details-product {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
}

.wrapper-middle .details-product .detail-title {
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 700;
}

.right-wraps {
  height: 40px;
  display: flex;
  margin-left: 2rem;
}

.quantity {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 40px;
  height: 30px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.54);
}

.btn {
  border: 1px solid #4caf50;
  width: 40px;
  height: 30px;
  background-color: white;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 800;
  /*   border-radius: 6px; */
  cursor: pointer;
}
button:focus,
input:focus {
  outline: 0;
}

.wrapper-right .consultation-title {
  font-weight: 800;
  font-size: 1.3rem;
}
.wrapper-right .consult-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.wrapper-right .consult-card p {
  margin-bottom: 0;
}
.wrapper-right .consult-card .doctor-rating {
  font-weight: 600;
}
.wrapper-right .consult-card .doctor-desc {
  font-weight: 400;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
}
.wrapper-right .consult-card .consult {
  background: #ffffff;
  border: 2px solid #4caf50;
  border-radius: 10px;
  font-weight: 700;
  color: #4caf50;
  letter-spacing: 0.2px;
}
.wrapper-right .consult-card .doctor-desc span {
  font-weight: 600;
}
.wrapper-right .consult-card .doctor-info {
  display: flex;
  gap: 10px;
  align-items: center;
}
.wrapper-right .consult-card .doctor-info .doctor-photo {
  border-radius: 100px;
}

.wrapper-right .consult-card .doctor-info .doctor-name {
  margin-bottom: 0;
}
.wrapper-right .consult-card .doctor-info .doctor-specification {
  margin-bottom: 0;
  font-size: 14px;
  color: #4caf50;
}
</style>
