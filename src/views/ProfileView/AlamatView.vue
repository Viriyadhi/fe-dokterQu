<template>
  <v-container>
    <div class="container-profile mx-auto">
      <v-card class="form--logreg">
        <div class="d-flex felx-row justify-space-between">
          <h2>Alamat Saya</h2>
          <div class="text-center">
            <v-dialog v-model="dialog" width="900" height="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  @click="setDialog"
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                >
                  Tambah Alamat
                </v-btn>
              </template>

              <v-card class="form--logreg">
                <v-card-title class="text-h5 pb-8">
                  Tambah Alamat
                </v-card-title>

                <v-form ref="form" @submit.prevent>
                  <div class="form--logreg__group w-100">
                    <v-row>
                      <v-col
                        cols="12"
                        sm="12"
                        md="6"
                        lg="6"
                        v-for="(data, i) in formAlamat"
                        :key="i"
                        class="py-0"
                      >
                        <p>
                          {{ data.label }}
                        </p>

                        <v-text-field
                          v-if="data.type === 'text'"
                          :prepend-inner-icon="data.prepend_inner_icon"
                          :rules="[(v) => !!v || `${data.label} Harus diisi`]"
                          :required="data.required"
                          v-model="models[data.name]"
                          color="284860"
                          clearable
                          single-line
                          outlined
                        >
                        </v-text-field>
                      </v-col>

                      <v-col cols="12" sm="12" md="12" lg="12">
                        <div class="map" v-if="mapReady && dialog">
                          <l-map
                            :zoom="zoom"
                            :center="center"
                            @click="handleMapClick"
                          >
                            <l-tile-layer :url="url"></l-tile-layer>
                            <l-marker
                              ref="marker"
                              v-if="markerLocation"
                              :lat-lng="markerLocation"
                            >
                              <l-popup :content="popupText"></l-popup>
                            </l-marker>
                          </l-map>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </v-form>
              </v-card>
            </v-dialog>
          </div>
        </div>
        <v-divider class="mt-4"></v-divider>

        <AddressCard
          recipient="userAddress.recipient"
          label="userAddress.label"
          address="userAddress.address"
          phone="userAddress.phone"
          province="userAddress.province"
          city="userAddress.city"
        >
        </AddressCard>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import L from "vue2-leaflet";
import "leaflet.markercluster";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import AddressCard from "@/components/E-commerce/Checkout/AddressCard.vue";

export default {
  components: {
    AddressCard,
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data: () => ({
    // etc.
    dialog: false,
    models: {},
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    zoom: 4,
    center: [-2.4513996546223473, 121.02539062500001],
    markerLocation: null,
    popupText: "",
    popup: "",
    mapReady: false,
    formAlamat: [
      {
        label: "Label",
        name: "label",
        type: "text",
        required: true,
      },
      {
        label: "Alamat",
        name: "address",
        type: "text",
        required: true,
      },
      {
        label: "Nama Penerima",
        name: "recipient",
        type: "text",
        required: true,
      },
      {
        label: "Nomor Telepon",
        name: "phone",
        type: "text",
        required: true,
      },
      {
        label: "Lattitude",
        name: "latitude",
        type: "text",
        required: true,
      },
      {
        label: "Longitude",
        name: "longitude",
        type: "text",
        required: true,
      },

      {
        label: "Provinsi",
        name: "province_id",
        type: "text",
        required: true,
      },
    ],
  }),
  mounted() {
    this.$L = L;
    this.$nextTick(() => {
      // Access the marker component using $refs
      const marker = this.$refs.marker;

      // Check if the marker component is defined
      if (marker) {
        // Call the bindPopup method on the marker component
        marker.bindPopup(this.popup);
      }
    });
  },
  methods: {
    handleMapClick(e) {
      const { lat, lng } = e.latlng;
      this.markerLocation = [lat, lng];
      this.popupText = `Lat: ${lat}, Lng: ${lng}`;
      const popup = L.popup().setLatLng([lat, lng]).setContent(this.popupText);
      const marker = this.$refs.marker;
      marker.setLatLng([lat, lng]);
      marker.bindPopup(popup);
    },
    handleMarkerPopupOpen() {
      const marker = this.$refs.marker;
      const popup = marker.getPopup();
      popup.setContent(this.popupText);
    },

    setDialog() {
      this.dialog = true;
      if (this.dialog) {
        setTimeout(() => {
          this.mapReady = true;
        }, 1000);
      }
    },
  },
};
</script>

<style scoped>
.container-profile {
  width: 70%;
}

.map {
  height: 50vh;
}
</style>
