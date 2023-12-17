<template>
  <v-app>
    <ProfileSideBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import ProfileSideBar from "@/components/Profile/ProfileSideBar.vue";
export default {
  components: {
    ProfileSideBar,
  },
};
</script>

<style></style>
