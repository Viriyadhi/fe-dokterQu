<template>
  <v-app>
    <SideBarApotik :items="routes()" />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { ApotikAdmin } from "@/router/admin";
// import AppBarAdmin from '@/components/Admin/SideBarApotik.vue';
import SideBarApotik from "@/components/Admin/SideBarProfile.vue";
export default {
  name: "ProfileSetting",
  data: () => ({ drawer: false }),
  methods: {
    routes() {
      return ApotikAdmin.children;
    },
  },
  components: { SideBarApotik },
};
</script>

<style scoped>
.v-list-item {
  margin-top: 200px;
}
</style>