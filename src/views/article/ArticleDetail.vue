<template>
  <v-app>
    <v-container>
      <ArticleComponent />
      <h4>3 Komentar</h4>
    </v-container>
  </v-app>
</template>

<script>
import ArticleComponent from "@/components/Article/Article.vue";

export default {
  name: "ArticleDetail",

  components: {
    ArticleComponent,
  },
};
</script>

<style scoped></style>
