<template>
  <v-app>
    <SideBarApotik />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import SideBarApotik from "@/components/Admin/SideBarApotik.vue";
export default {
  data: () => ({ drawer: false }),
  methods: {},
  components: { SideBarApotik },
};
</script>

<style scoped>
.v-list-item {
  margin-top: 200px;
}
p {
}
</style>
