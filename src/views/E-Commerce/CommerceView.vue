<template>
  <v-app class="pa-10 mx-16">
    <section class="button-group">
      <div class="button-group mt-8">
        <v-btn
          v-for="(item, i) in buttonGroup"
          :key="i"
          outlined
          rounded
          class="button-group-child"
          width="147px"
          height="47"
        >
          {{ item.title }}
        </v-btn>
      </div>
    </section>

    <section class="product-view">
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
          lg="2"
          class="px-2 py-0 mx-0"
        >
          <router-link :to="{ path: `/commerce${item.links['self']}` }">
            <v-card
              :loading="loading"
              class="mx-auto my-12 pt-2 px-5 rounded-lg"
              max-width="240"
              max-height="500"
            >
              <!-- <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template> -->

              <v-img
                class="mx-auto rounded-lg mt-2"
                max-height="160"
                max-width="160"
                :src="item.image"
              ></v-img>

              <v-chip class="mt-2 rounded-lg" color="secondary">
                {{ item.category }}
              </v-chip>
              <div class="container-text">
                <v-card-text class="py-2 px-0 black--text">
                  {{ item.name }}
                </v-card-text>
              </div>
              <v-card-text
                class="pt-0 px-0 font-weight-bold black--text container-price-card custom-card-text"
                >{{ item.price }}</v-card-text
              >
              <v-card-actions class="align-center justify-center">
                <v-btn
                  width="200"
                  rounded
                  color="primary"
                  class="rounded-lg"
                  outlined
                >
                  Tambah
                </v-btn>
              </v-card-actions>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </section>
  </v-app>
</template>

<script>
import axios from "axios";
import { EventBus } from "../../../event-bus.js";

export default {
  name: "CommerceView",

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
  }),

  created() {},
  async mounted() {
    await this.getAllProducts();
  },
  methods: {
    // reserve() {
    //   try {.loading = false), 2000);
    // },

    async getAllProducts() {
      try {
        EventBus.$emit("startLoading");
        var route = this.$route.params;
        const products = await axios.get(
          `${this.$api}/${route.shop}/${route.product}`
        );
        const data = products.data.data.products;
        this.items = data;
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
  },
};
</script>

<style scoped>
.custom-card-text {
  font-size: 1.06rem !important;
}

.container-text {
  height: 4.5rem !important;
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
</style>
