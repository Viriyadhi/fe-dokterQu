<template>
  <v-app class="">
    <v-container>
      <section>
        <div class="button-group mt-8 custom-scroll">
          <v-btn
            v-for="(item, i) in buttonGroup"
            :key="i"
            outlined
            rounded
            class="button-group-child custom-top-button"
            width="120"
          >
            {{ item.title }}
          </v-btn>
        </div>
      </section>

      <section class="product-view mt-5 mt-sm-8 mt-sm-1">
        <v-row>
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
            sm="6"
            md="3"
            lg="2"
          >
            <v-card
              :loading="loading"
              class="mb-sm-8 pa-2 px-lg-5 rounded-lg"
              height="360"
            >
              <router-link :to="{ path: `/commerce${item.links['self']}` }">
                <v-img
                  class="mx-auto rounded-lg mt-2"
                  max-height="180"
                  max-width="180"
                  :src="item.image"
                ></v-img>

                <v-chip class="mt-2 rounded-lg" color="secondary">
                  {{ item.category }}
                </v-chip>
                <div class="container-text">
                  <v-card-text class="py-2 px-0 black--text title-product">
                    {{ item.name }}
                  </v-card-text>
                </div>
                <v-card-text
                  class="pt-0 px-0 font-weight-bold black--text container-price-card custom-card-text"
                  >{{ item.price }}
                </v-card-text>
              </router-link>
            </v-card>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";

import { EventBus } from "../../../event-bus.js";

export default {
  name: "CommerceView",

  components: {},

  data: () => ({
    loading: false,
    selection: 1,
    buttonGroup: [
      {
        title: "Semua",
      },
      {
        title: "Mata",
      },
      {
        title: "Hidung",
      },
      {
        title: "Telinga",
      },
      {
        title: "Mulut",
      },
      {
        title: "Kulit",
      },
    ],
    items: [],
    addCartLink: [],
  }),

  created() {},
  async mounted() {
    await this.getAllProducts();
  },
  methods: {
    async getAllProducts() {
      try {
        EventBus.$emit("startLoading");
        var route = this.$route.params;
        const products = await axios.get(
          `${this.$api}/${route.shop}/${route.product}`
        );
        const data = products.data.data.products;
        const dataL = data.length;
        var link;
        for (let i = 0; i < dataL; i++) {
          link = data[i].links.cart.add_cart;
          this.addCartLink.push(link);
        }
        this.items = data;
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

    // setTotalItem(value, id) {
    //   const item = this.items.find((item) => item.id === id);
    //   if (item) item.quantity = value;
    // },

    // async addToCart(addCartLink) {
    //   try {
    //     EventBus.$emit("startLoading");
    //     const products = await axios.post(`${this.$api}${addCartLink}`);
    //     EventBus.$emit("updateCartCount");
    //     setTimeout(() => {
    //       window.location.reload();
    //     }, 1000);
    //     if (products.status == 200) {
    //       const message = products.data.message;
    //       EventBus.$emit("showSnackbar", message, "primary");
    //       console.log(products);
    //     }
    //   } catch (err) {
    //     var error = err;
    //     if (err.response.data.message) {
    //       error = err.response.data.message;
    //       console.log(error);
    //       EventBus.$emit("showSnackbar", error, "red");
    //     }
    //   }
    //   EventBus.$emit("stopLoading");
    // },
  },

  watch: {},
};
</script>

<style scoped>
.custom-card-text {
  font-size: 1.06rem !important;
}

.title-product {
  min-height: 4.5rem !important;
}

@media (min-width: 0px) {
  .custom-scroll {
    overflow-x: scroll;
  }
  .button-group {
    display: flex;
    flex-direction: row;
    height: auto;
    gap: 1rem;
  }
}
@media (min-width: 600px) {
  .custom-scroll {
    overflow-x: auto;
  }
  .button-group {
    display: flex;
    flex-direction: row;
    height: auto;
    gap: 2rem;
  }
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

.button-group-child:active {
  background: #4caf50 !important;
  color: white !important;
}
</style>
