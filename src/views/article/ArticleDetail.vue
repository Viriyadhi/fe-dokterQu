<template>
  <v-app>
    <v-container>
      <div v-for="(detailArt, i) in detailArticle" :key="i">
        <div v-html="detailArt.title" class="detailart-title"></div>
        <v-img class="detailart-thumbnail" :src="detailArt.thumbnail"></v-img>
        <div v-html="detailArt.body" class="detailart-body"></div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import { EventBus } from "../../../event-bus.js";

export default {
  name: "ArticleDetail",

  data: () => ({
    detailArticle: [],
  }),

  async mounted() {
    await this.getArticleList();
  },

  methods: {
    async getArticleList() {
      try {
        EventBus.$emit("startLoading");

        var route = this.$route.params;
        const res = await axios.get(`${this.$api}/article/post/${route.slug}`);
        const data = res.data.data;
        this.detailArticle.push(data);
      } catch (err) {
        var error = err;
        if (err.response.data.errors) {
          error = err.response.data.errors;
          for (const key in error) {
            console.log(`${error[key]}`);
            EventBus.$emit("showSnackbar", error[key], "red");
          }
          console.log(error);
        }
      }
      EventBus.$emit("stopLoading");
    },
  },
};
</script>

<style scoped>
.detailart-title {
  font-size: 2rem;
  font-weight: bold;
  width: 60%;
}
.detailart-thumbnail {
  width: 60%;
  height: 500px;
  margin: 2rem 0 2rem 0;
}
.detailart-body {
  font-size: 1.5rem;
  line-height: 2rem;
  width: 60%;
}
</style>
