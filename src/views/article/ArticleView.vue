<template>
  <v-app>
    <v-container>
      <ArticleComponent />
      <div class="big-line"></div>
      <h2 class="mt-6 mb-12 font-weight-black">Artikel Terbaru</h2>

      <section class="main-2">
        <v-row>
          <v-col
            cols="12"
            md="3"
            v-for="(articleData, i) in articleList"
            :key="i"
          >
            <router-link :to="{ path: `${articleData.links['self']}` }">
              <v-card class="my-8 mx-auto py-0" max-width="324">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img height="250" :src="articleData.thumbnail"></v-img>
                <v-card-text class="pb-0 px-6">
                  <v-chip color="secondary" class="rounded-lg">
                    {{ articleData.category }}
                  </v-chip>
                </v-card-text>

                <v-card-text class="py-3 px-6">
                  {{ articleData.created_at }}
                </v-card-text>

                <v-card-title class="py-0 px-6 article-title">{{
                  articleData.title
                }}</v-card-title>

                <v-card-text class="pt-3 pb-6 px-6">
                  {{ articleData.desc }}
                </v-card-text>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </v-app>
</template>

<script>
import ArticleComponent from "@/components/Article/Article.vue";
import axios from "axios";
import moment from "moment";
import { EventBus } from "../../../event-bus.js";
export default {
  name: "ArticleView",

  components: {
    ArticleComponent,
  },

  data: () => ({
    articleList: [],
    articleTop: [],
    articleHero: [],
  }),

  async mounted() {
    await this.getListArticlesLatest();
  },

  methods: {
    async getListArticlesLatest() {
      try {
        EventBus.$emit("startLoading");
        const response = await axios.get(
          `${this.$api}/article/post?type=latest`
        );

        console.log(response);
        const dataArticle = response.data.data.articles;
        var artCreated = moment(dataArticle.created_at).format("YYYY-MM-DD ");

        for (let i = 0; i < dataArticle.length; i++) {
          dataArticle[i].created_at = artCreated;
        }
        this.articleList = dataArticle;
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

<style>
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
</style>
