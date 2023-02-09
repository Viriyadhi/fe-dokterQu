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
          cols="12 "
          lg="2"
          class="px-2 py-0 mx-0"
        >
          <v-card
            :loading="loading"
            class="mx-auto my-12 pt-2 rounded-lg"
            max-width="240"
            max-height="400"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              class="mx-auto rounded-lg mt-2"
              height="200"
              width="200"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>

            <v-card-title class="font-weight-bold text-h5 ps-5"
              >Cafe Badilico</v-card-title
            >

            <v-card-title class="pt-0 ps-5">Rp 7.500</v-card-title>

            <v-card-actions class="align-center justify-center">
              <v-btn
                width="200"
                rounded
                color="primary"
                class="rounded-lg mb-2"
                outlined
                @click="reserve"
              >
                Tambah
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-app>
</template>

<script>
export default {
  name: "E-Commerce",

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
    items: [
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
      {
        title: "Pengelihatan",
      },
    ],
  }),

  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped>
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
