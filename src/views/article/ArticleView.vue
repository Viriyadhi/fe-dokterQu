<template>
  <v-app>
    <v-container>
      <section class="headers my-8">
        <v-text-field
          append-icon="mdi-magnify"
          label="Search"
          single-line
          outlined
          hide-details
        ></v-text-field>
      </section>

      <div class="big-line"></div>
      <h2 class="mt-6 mb-12 font-weight-black">Artikel Terpopuler</h2>

      <section class="main">
        <v-row>
          <v-col cols="12" md="7">
            <div v-for="(hero, i) in articleHero" :key="i">
              <v-card class="elevation-0">
                <v-img
                  height="565"
                  class="rounded"
                  :src="hero.thumbnail"
                ></v-img>
                <v-card-text class="px-0 py-0">
                  <v-chip color="secondary" class="rounded-lg">
                    {{ hero.category }}
                  </v-chip>
                </v-card-text>
                <v-card-text class="py-3 px-0">
                  {{ hero.created_at }}
                </v-card-text>
                <v-card-title
                  class="pt-0 px-0 article-title-big font-weight-bold text-h3"
                >
                  {{ hero.title }}
                </v-card-title>
                <v-card-text class="px-0 text-h6">
                  {{ hero.desc }}
                </v-card-text>
              </v-card>
            </div>
          </v-col>
          <v-col cols="12" md="5">
            <div
              class="d-flex flex-column"
              v-for="(top, i) in articleTop"
              :key="i"
            >
              <v-card
                class="elevation-0 card-container border-bottom"
                :class="i == 0 ? 'pt-0 pb-8' : 'py-8'"
              >
                <div class="d-flex flex-row">
                  <v-img
                    height="250"
                    width="20"
                    class="rounded-lg"
                    :src="top.thumbnail"
                  ></v-img>

                  <div class="d-flex flex-column custom-article-container">
                    <v-card-text class="pt-0 pb-0 px-6">
                      <v-chip color="secondary" class="rounded-lg">
                        {{ top.category }}
                      </v-chip>
                    </v-card-text>
                    <v-card-text class="py-3">
                      {{ top.created_at }}
                    </v-card-text>
                    <v-card-title
                      class="pt-0 article-title-big font-weight-bold"
                    >
                      {{ top.title }}
                    </v-card-title>
                  </div>
                </div>
              </v-card>
              <div :class="i == 2 ? 'd-none' : 'small-line'"></div>
            </div>
          </v-col>
        </v-row>
      </section>
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
            <v-card class="my-8 mx-auto" max-width="374">
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
          </v-col>
        </v-row>
      </section>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import { EventBus } from "../../../event-bus.js";
export default {
  name: "ArticleView",

  data: () => ({
    articleList: [],
    articleTop: [],
    articleHero: [],
  }),

  async mounted() {
    await this.getListArticlesPopular();
    await this.getListArticlesLatest();
  },

  methods: {
    async getListArticlesPopular() {
      try {
        EventBus.$emit("startLoading");
        const response = await axios.get(
          `${this.$api}/article/post?type=popular`
        );
        const dataArticle = response.data.data.articles;

        for (let i = 0; i < 3; i++) {
          this.articleTop.push(dataArticle[i]);
        }

        let i = 4;
        this.articleHero.push(dataArticle[i]);

        console.log("articleTop", this.articleTop);
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

    async getListArticlesLatest() {
      try {
        EventBus.$emit("startLoading");
        const response = await axios.get(
          `${this.$api}/article/post?type=latest`
        );
        const dataArticle = response.data.data.articles;
        this.articleList = dataArticle;
        console.log("articleAll", this.articleList);
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
