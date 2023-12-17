<template>
  <v-card rounded="xl" max-width="260" height="425" class="pa-4">
    <div class="d-flex flex-column justify-center align-center">
      <v-avatar class="ma-3" size="125" tile>
        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
      </v-avatar>
      <v-card-title class="secondary--text pt-0 font-weight-black">
        Selamat!
      </v-card-title>
    </div>

    <v-card-text class="pb-0 black--text mb-4 text-center">
      Sukses Buat Janji ! Tunggu Konfirmasi status booking dulu, ya
    </v-card-text>

    <v-card-actions class="d-flex flex-column">
      <v-btn
        width="180"
        color="secondary"
        rounded
        @click="successDialog = false"
      >
        Lihat Invoice
      </v-btn>
      <v-btn
        width="180"
        color="secondary"
        rounded
        @click="successDialog = false"
        class="ma-0 mt-4"
      >
        Tutup
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "DialogSuccess",
  data: () => ({
    successDialog: false,
    successFunction: () => {},
  }),
  watch: {
    successDialog: function (val) {
      if (val) {
        console.log(val);
        this.successDialog = false;
      }
    },
  },
};
</script>

<style scoped>
.z-index-1 {
  z-index: 10 !important;
}
</style>
