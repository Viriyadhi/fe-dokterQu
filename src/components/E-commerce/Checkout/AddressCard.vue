<template>
  <div>
    <v-card class="mb-4" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="mb-4">
            <v-card-title class="pa-0 font-weight-bold">
              {{ recipient }}
            </v-card-title>
          </div>
          <v-list-item-subtitle class="black--text">
            {{ label }}
          </v-list-item-subtitle>
          <v-list-item-subtitle class="black--text">
            {{ address }}
          </v-list-item-subtitle>
          <v-list-item-subtitle class="black--text">
            {{ phone }}
          </v-list-item-subtitle>

          <v-list-item-subtitle class="black--text">
            {{ city }},
            {{ province }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <slot name="action"></slot>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AddressCard",

  props: {
    label: {
      type: String,
    },
    address: {
      type: String,
    },
    recipient: {
      type: String,
    },
    phone: {
      type: String,
    },
    province: {
      type: String,
    },
    city: {
      type: String,
    },
  },
};
</script>

<style></style>
