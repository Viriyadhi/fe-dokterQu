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
                  @click="openDialog()"
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                >
                  Tambah Alamat
                </v-btn>
              </template>

              <v-card class="form--logreg">
                <v-card-title class="text-h5 pb-8">
                  {{ isEditing ? "Edit Data" : "Add Data" }}
                </v-card-title>

                <v-form ref="form" @v-on:submit.prevent>
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
        <v-divider class="my-4"></v-divider>

        <AddressCard
          v-for="(Address, i) in userAddresses"
          :key="i"
          :recipient="Address.recipient"
          :label="Address.label"
          :address="Address.address"
          :phone="Address.phone"
          :province="Address.province"
          :city="Address.city"
        >
          <template v-slot:action>
            <div class="d-flex align-center justify-end mb-2">
              <v-btn
                @click="openDialog(Address.id)"
                color="primary"
                class="mr-8"
              >
                <v-icon small> mdi-pencil </v-icon>
              </v-btn>

              <v-btn color="primary">
                <v-icon small> mdi-delete </v-icon>
              </v-btn>
            </div>
          </template>
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
import axios from "axios";
import { EventBus } from "../../../event-bus.js";
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
    isEditing: false,
    models: {},
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    zoom: 4,
    center: [null, null],
    markerLocation: null,
    popupText: "",
    popup: "",
    mapReady: false,
    userAddresses: [],

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
        label: "Provinsi",
        name: "province_id",
        type: "select",
        required: true,
        options: [],
      },
      {
        label: "Kota",
        name: "city_id",
        type: "select",
        required: true,
        options: [],
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
    ],
  }),

  created() {},

  mounted() {
    this.initData();

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

  computed: {},

  methods: {
    clearData() {
      this.models = {};
      this.markerLocation = null;
    },

    async initData() {
      this.clearData();

      await this.getAddresses();
    },
    handleMapClick(e) {
      const { lat, lng } = e.latlng;
      this.markerLocation = [lat, lng];
      this.popupText = `Lat: ${lat}, Lng: ${lng}`;
      if (this.isEditing) {
        this.models.latitude = lat;
        this.models.longitude = lng;
      }
    },

    handleMarkerPopupOpen() {
      const marker = this.$refs.marker;
      const popup = marker.getPopup();
      popup.setContent(this.popupText);
    },

    async openDialog(address) {
      this.clearData();
      this.dialog = true;
      if (address) {
        console.log(address);
        this.isEditing = true;
        const res = await axios.get(
          `${this.$api}/user/customer/address/${address}`
        );
        const data = res.data.data;

        this.markerLocation = [data.latitude, data.longitude];
        this.center = [data.latitude, data.longitude];
        this.models = data;
      } else {
        this.isEditing = false;
      }
      if (this.dialog) {
        setTimeout(() => {
          this.mapReady = true;
        }, 800);
      }
    },

    async getAddresses() {
      try {
        EventBus.$emit("startLoading");
        const res = await axios.get(`${this.$api}/user/customer/addresses`);
        console.log(res);
        const addresses = res.data.data;
        this.userAddresses = addresses;
        console.log(this.userAddresses);
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

    async editAlamat(address) {
      try {
        EventBus.$emit("startLoading");
        console.log(address);
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
