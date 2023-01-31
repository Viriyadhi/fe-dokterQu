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

<style scoped>
.custom-article-container {
  width: 55% !important;
}
.article-title {
  line-height: 1.5rem;
}

.article-title-big {
  line-height: 1.5rem;
}

.big-line {
  border: 2px solid #c4c7d0;
  width: 100%;
  margin: 3rem 0 0 0;
}

.small-line {
  width: 100%;
  border: 1.5px solid #c4c7d0;
}

.category-bg {
  background-color: #4caf50;
  width: 57%;
  color: white;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin: 0 0 1rem 0;
}

.detail-text {
  line-height: 2.25rem;
}
</style>
