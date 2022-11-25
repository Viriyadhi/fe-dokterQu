<template>
  <v-app>
    <div class="d-flex">
      <v-img src="@/assets/Header/Oval.svg" class="oval-top"> </v-img>
      <v-img src="@/assets/Header/Banner1.svg" class="banner"> </v-img>
      <v-img src="@/assets/Header/OvalTransparent.svg" class="oval-transparent">
      </v-img>
    </div>

    <ThreeDivider />
  </v-app>
</template>

<script>
import ThreeDivider from "@/components/ThreeDivider/ThreeDivider.vue";

export default {
  components: {
    ThreeDivider,
  },

  name: "OvalTop",
};
</script>

<style>
.parent {
  position: relative;
  top: 0;
  left: 0;
}
.oval-top {
  width: 54rem !important;
  height: 27rem !important;
  margin-top: -4rem;
  position: relative;
}

.banner {
  position: absolute;
  top: 2rem;
  left: 14rem;
}
.oval-transparent {
  position: absolute;
  top: -4rem;
  left: 14rem;
}
</style>
