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

                <v-form ref="form">
                  <div class="form--logreg__group w-100">
                    <v-row>
                      <v-col
                        cols="12"
                        sm="12"
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
                          v-model="models[data.name]"
                          color="284860"
                          single-line
                          outlined
                        >
                        </v-text-field>

                        <v-text-field
                          v-if="data.type === 'readonly'"
                          readonly
                          :prepend-inner-icon="data.prepend_inner_icon"
                          v-model="models[data.name]"
                          color="284860"
                          single-line
                          outlined
                        >
                        </v-text-field>

                        <v-text-field
                          v-if="data.name === 'phone'"
                          :prepend-inner-icon="data.prepend_inner_icon"
                          v-model="models[data.name]"
                          color="284860"
                          single-line
                          outlined
                        >
                        </v-text-field>

                        <v-select
                          v-if="data.name === 'province_id'"
                          :items="provinceData"
                          v-model="models[data.name]"
                          color="284860"
                          item-text="label"
                          item-value="value"
                          single-line
                          outlined
                        >
                        </v-select>

                        <v-select
                          v-if="data.name === 'city_id'"
                          :items="cityData"
                          v-model="models[data.name]"
                          color="284860"
                          item-text="label"
                          item-value="value"
                          single-line
                          outlined
                          @input="(cityId) => changeScopeMap(cityId)"
                        >
                        </v-select>
                      </v-col>

                      <v-col cols="12" sm="12" md="12" lg="12">
                        <div class="map" v-if="mapReady && dialog">
                          <l-map
                            :zoom="zoom"
                            :center="center"
                            @click="handleMapClick"
                            ref="map"
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

                <div class="d-flex justify-space-between align-center mt-8">
                  <v-checkbox
                    v-model="checkbox"
                    :label="`Jadikan Alamat Utama?`"
                  ></v-checkbox>
                  <v-btn
                    color="primary"
                    @click="isEditing ? submitData(true) : submitData(false)"
                  >
                    {{ isEditing ? "Edit Data" : "Add Data" }}
                  </v-btn>
                </div>
              </v-card>
            </v-dialog>
          </div>
        </div>
        <v-divider class="my-4"></v-divider>
        <div class="d-flex flex-column justify-center align-start">
          <AddressCard
            width="100rem"
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

                <!-- <v-btn
                  color="primary"
                  class="mr-2"
                  @click.stop="
                    deletesDialogs = true;
                    deleteId = Address.id;
                    deleteData(deleteId);
                  "
                >
                  <v-icon small> mdi-delete </v-icon>
                </v-btn> -->
              </div>
            </template>
          </AddressCard>
        </div>
      </v-card>
      <!-- <v-dialog v-model="deletesDialogs" max-width="290">
        <v-card>
          <v-card-title class="text-h5">
            Use Google's location service?
          </v-card-title>

          <v-card-text>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" @click="closeDialog"> Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog> -->
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
    center: [-2.539206932564609, 119.31152343750001],
    markerLocation: null,
    popupText: "",
    popup: "",
    mapReady: false,
    userAddresses: [],
    cityData: [],
    provinceData: [],
    checkbox: false,
    deletesDialogs: false,
    deleteId: "",
    formAlamat: [
      {
        label: "Label",
        name: "label",
        type: "text",
      },
      {
        label: "Alamat",
        name: "address",
        type: "text",
      },
      {
        label: "Nama Penerima",
        name: "recipient",
        type: "text",
      },
      {
        label: "Nomor Telepon",
        name: "phone",
        type: "phone",
      },
      {
        label: "Provinsi",
        name: "province_id",
        type: "select",
        options: [],
      },
      {
        label: "Kota",
        name: "city_id",
        type: "select",
        options: [],
      },
      {
        label: "Lattitude",
        name: "latitude",
        type: "readonly",
      },
      {
        label: "Longitude",
        name: "longitude",
        type: "readonly",
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

  watch: {
    "models.province_id": {
      deep: true,
      handler: async function () {
        try {
          this.cityData = [];
          const res = await axios.get(
            `${this.$api}/location/cities?province_id=${this.models.province_id}}`
          );
          const dataCity = res.data.data;

          dataCity.forEach((item) => {
            item["label"] = item.city_name;
            item["value"] = item.city_id;
          });

          this.cityData = dataCity;
        } catch (error) {
          console.log(error);
        }
      },
    },
  },

  computed: {},

  methods: {
    clearData() {
      this.models = {};
      this.markerLocation = null;
    },

    async initData() {
      this.clearData();
      await this.getProvince();
      await this.getAddresses();
    },
    handleMapClick(e) {
      const { lat, lng } = e.latlng;
      this.markerLocation = [lat, lng];
      this.popupText = `Lat: ${lat}, Lng: ${lng}`;
      this.models.latitude = lat;
      this.models.longitude = lng;
    },

    handleMarkerPopupOpen() {
      const marker = this.$refs.marker;
      const popup = marker.getPopup();
      popup.setContent(this.popupText);
    },

    async openDialog(address) {
      await this.getProvince();
      this.clearData();
      this.dialog = true;
      if (address) {
        console.log(address);
        this.isEditing = true;
        const res = await axios.get(
          `${this.$api}/user/customer/address/${address}`
        );
        const data = res.data.data;
        console.log(data);
        this.markerLocation = [data.latitude, data.longitude];
        this.center = [data.latitude, data.longitude];
        this.models = data;
        this.checkbox = this.models["is_default"];
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

    async submitData(address) {
      try {
        EventBus.$emit("startLoading");

        if (address) {
          const obj = this.models;
          obj["default"] = this.checkbox;
          console.log(this.models);
          const res = await axios.post(
            `${this.$api}/user/customer/address/${this.models.id}/update`,
            obj
          );
          if (res.status) {
            this.dialog = false;
            EventBus.$emit("showSnackbar", "Edit Data Berhasil", "primary");
            await this.getAddresses();
          }
        }

        if (!address) {
          const obj = this.models;
          obj["default"] = this.checkbox;
          console.log(this.models);
          const res = await axios.post(
            `${this.$api}/user/customer/address`,
            obj
          );
          if (res.status) {
            this.dialog = false;
            EventBus.$emit("showSnackbar", "Edit Data Berhasil", "primary");
            await this.getAddresses();
          }
        }
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

    async getProvince() {
      try {
        const res = await axios.get(`${this.$api}/location/provinces`);
        const dataProvince = res.data.data;

        dataProvince.forEach((item) => {
          item["label"] = item.prov_name;
          item["value"] = item.prov_id;
        });

        this.provinceData = dataProvince;
      } catch (error) {
        console.log(error);
      }
    },

    async deleteData(addressId) {
      console.log(addressId);

      // try {
      //   EventBus.$emit("startLoading");
      //   const res = await axios.delete(
      //     `${this.$api}/user/customer/address/${addresId}/delete`
      //   );
      //   console.log(res);
      // } catch (err) {
      //   var error = err;
      //   if (err.response.data.message) {
      //     error = err.response.data.message;
      //     console.log(error);
      //     EventBus.$emit("showSnackbar", error, "red");
      //   }
      // }
      // EventBus.$emit("stopLoading");
    },
    async changeScopeMap(cityId) {
      try {
        let citySelected = this.cityData
          .filter((city) => city.city_id === cityId)
          .map((city) => city.city_name)
          .find((citySelected) => citySelected);
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${citySelected}`
        );
        if (response.data.length > 0) {
          this.$refs.map.mapObject.setView(
            [response.data[0].lat, response.data[0].lon],
            10
          );
        }
      } catch (error) {
        console.log(error);
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
