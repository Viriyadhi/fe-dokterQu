<template>
  <div>
    <v-card class="mb-4" max-width="800" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="mb-4">
            <v-card-title class="pa-0">
              {{ title }}
            </v-card-title>
          </div>
          <v-list-item-subtitle class="black--text">
            {{ address }}
          </v-list-item-subtitle>

          <v-list-item-subtitle class="black--text">
            {{ location }},
            {{ distance }}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey">
          <v-img :src="imageSrc"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ApotikCard",
  props: {
    title: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },

    location: {
      type: String,
    },

    distance: {
      type: String,
    },

    imageSrc: {
      type: String,
    },
  },
};
</script>

<style></style>
