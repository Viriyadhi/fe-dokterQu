<template>
  <v-app>
    <v-container fluid class="px-16 py-10">
      <v-row class="main-row">
        <v-col cols="3" class="left-col">
          <div class="wrapper-left">
            <v-img
              src="@/assets/ECommerce/product-img.png"
              max-height="200"
              contain
            ></v-img>

            <div class="product-cathegory">
              <p class="cath-title">Kategori</p>
              <p class="cath-name">{{ detailData.category }}</p>
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
        <v-col cols="5" class="middle-col">
          <div class="wrapper-middle">
            <v-img
              src="@/assets/ECommerce/product-img.png"
              max-height="200"
              contain
              class="middle-image-product"
            ></v-img>

            <p class="product-name">
              {{ detailData.name }}
            </p>
            <div class="product-cathegory">
              <p class="cath-title">Kategori</p>
              <p class="cath-name">{{ detailData.category }}</p>
            </div>
            <p class="product-price">{{ detailData.price }}</p>
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

            <div class="buttons-wrap d-flex justify-space-between">
              <div class="left-wrap">
                <v-btn
                  block
                  class="add-to-cart text-capitalize"
                  @click="updateCartItem"
                  >+ Keranjang</v-btn
                >
                <v-btn
                  @click="checkoutNow()"
                  block
                  outlined
                  class="buy-product text-capitalize"
                  >Beli Sekarang</v-btn
                >
              </div>
              <div class="d-flex align-center">
                <button
                  class="btn btn--minus"
                  @click="decrementCounter"
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
                  @click="incrementCounter"
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
                  {{ detailData.desc }}
                </p>
              </div>
              <div class="wrap">
                <p class="detail-title">Indikasi umum</p>
                <p class="detail-content mb-0">
                  {{ detailData.desc }}
                </p>
              </div>
              <div class="wrap">
                <p class="detail-title">Cara penyimpanan</p>
                <p class="detail-content mb-0">
                  {{ detailData.desc }}
                </p>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="4" class="right-col">
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
  </v-app>
</template>

<script>
import axios from "axios";
import { EventBus } from "../../../event-bus.js";
export default {
  name: "ProductDetail",
  data: () => ({
    counter: null,
    detailData: [],
    updateLink: null,
  }),
  created() {
    this.$watch(
      () => {
        this.$route;
        return {};
      },
      async () => {
        this.detailData = [];
        this.updateLink = null;
        await this.getDetailProduct();
      }
    );
  },
  async mounted() {
    await this.getDetailProduct();
  },
  computed: {},
  methods: {
    incrementCounter: function () {
      this.counter += 1;
      !isNaN(this.counter) && this.counter > 0
        ? this.counter
        : (this.counter = 0);
      this.$emit("getCount", this.counter);
      if (this.incrementUrl) {
        axios.post(`${this.$api + this.incrementUrl}`);
      }
    },
    decrementCounter: function () {
      this.counter -= 1;
      !isNaN(this.counter) && this.counter > 0
        ? this.counter
        : (this.counter = 0);
      this.$emit("geCcount", this.counter);
      if (this.decrementUrl) {
        axios.post(`${this.$api + this.decrementUrl}`);
      }
    },
    async getDetailProduct() {
      try {
        EventBus.$emit("startLoading");
        var route = this.$route.params;
        const detailProduct = await axios.get(
          `${this.$api}/${route.shop}/${route.product}/${route.slug}`
        );
        this.detailData = detailProduct.data.data;
        this.counter = this.detailData.user.in_cart;
        const updateCart = detailProduct.data.data.links.cart.update_cart;
        this.updateLink = updateCart;
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
    async updateCartItem() {
      try {
        EventBus.$emit("startLoading");
        const addProduct = await axios.post(
          `${this.$api}${this.updateLink}${this.counter}`
        );
        EventBus.$emit("updateCartCount");
        if (addProduct.status == 200) {
          const message = addProduct.data.message;
          EventBus.$emit("showSnackbar", message, "primary");
          console.log(addProduct);
        }
      } catch (err) {
        var error = err;
        if (err.response.data.message) {
          error = err.response.data.message;
          console.log(error);
          this.$router.push("/register-login/login");
          EventBus.$emit(
            "showSnackbar",
            "Silahkan login terlebih dahulu",
            "red"
          );
        }
      }
      EventBus.$emit("stopLoading");
    },
    checkoutNow() {
      const arr = [
        {
          quantity: this.counter,
          product: {
            id: this.detailData.id,
            name: this.detailData.name,
            price: this.detailData.price_min,
            price_int: this.detailData.price_int,
            images: this.detailData.image,
          },
        },
      ];
      // arr.push(this.detailData);
      console.log(arr);
      localStorage.setItem("selected", JSON.stringify(arr));
      this.$router.push({ name: "CheckoutView" });
    },
  },
};
</script>

<style scoped>
@media (max-width: 450px) {
  .buttons-wrap {
    flex-direction: column;
  }
  .left-wrap {
    width: 100% !important;
  }
}
@media (max-width: 800px) {
  .main-row {
    justify-content: center;
    gap: 32px;
  }
  .left-col {
    display: none;
  }
  .middle-col {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .right-col {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .left-wrap {
    flex: 1;
  }
}
@media (min-width: 800px) {
  .middle-image-product {
    display: none;
  }
  .product-cathegory {
    display: none;
  }
  .buttons-wrap {
    justify-content: flex-start !important;
  }
}
.right-wraps {
  height: 40px;
  display: flex;
  margin-left: 2rem;
}
.quantity {
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
  color: #4caf50;
  cursor: pointer;
}
button:focus,
input:focus {
  outline: 0;
}
.custom-btn {
  border: 1px solid black !important;
}
.wrapper-left .product-cathegory {
  margin-bottom: 2rem;
}
.cath-title {
  font-size: 1.2rem;
  margin-bottom: 0;
  margin-top: 1rem;
}
.cath-name {
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
  gap: 32px;
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
  display: flex;
  margin-left: 2rem;
}
.quantity {
  width: 40px;
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
