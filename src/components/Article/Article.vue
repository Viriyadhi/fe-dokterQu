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

      <div v-if="!routeHasSlug">
        <div class="big-line"></div>
        <h2 class="mt-6 mb-12 font-weight-black">Artikel Terpopuler</h2>

        <section class="main">
          <v-row>
            <v-col cols="12" md="7">
              <div v-for="(hero, i) in articleHero" :key="i">
                <router-link :to="{ path: `${hero.links['self']}` }">
                  <v-card class="elevation-0">
                    <v-img
                      height="565"
                      class="rounded-lg"
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
                </router-link>
              </div>
            </v-col>
            <v-col cols="12" md="5">
              <div
                class="d-flex flex-column"
                v-for="(top, i) in articleTop"
                :key="i"
              >
                <router-link :to="{ path: `${top.links['self']}` }">
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
                </router-link>
                <div :class="i == 2 ? 'd-none' : 'small-line'"></div>
              </div>
            </v-col>
          </v-row>
        </section>
      </div>

      <div v-if="routeHasSlug">
        <section class="main">
          <v-row>
            <v-col cols="12" md="7">
              <div v-for="(detailArt, i) in detailArticle" :key="i">
                <v-card class="elevation-0">
                  <v-card-title
                    v-html="detailArt.title"
                    class="text-h4 font-weight-bold"
                  ></v-card-title>

                  <div class="d-flex flex-row">
                    <v-chip color="secondary" class="rounded-lg">
                      {{ detailArt.created_at }}
                    </v-chip>
                  </div>

                  <v-img class="rounded-lg" :src="detailArt.thumbnail"></v-img>
                  <v-card-text
                    v-html="detailArt.body"
                    class="text-h6 font-weight-regular black--text detail-text"
                  ></v-card-text>
                </v-card>
              </div>
            </v-col>
            <v-col cols="12" md="5">
              <div
                class="d-flex flex-column"
                v-for="(top, i) in articleTop"
                :key="i"
              >
                <router-link :to="{ path: `${top.links['self']}` }">
                  <v-card
                    class="elevation-0 card-container border-bottom"
                    :class="i == 0 ? 'pt-16 mt-10 pb-8' : 'py-8'"
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
                </router-link>
                <div :class="i == 2 ? 'd-none' : 'small-line'"></div>
              </div>
            </v-col>
          </v-row>
        </section>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import moment from "moment";

import { EventBus } from "../../../event-bus.js";

export default {
  name: "ArticleComponent",

  data: () => ({
    articleList: [],
    articleTop: [],
    articleHero: [],
    detailArticle: [],
    routeHasSlug: false,
  }),

  created() {
    this.$watch(
      async () => {
        this.$route;
        await this.showContentBaseOnRoute();
        return {};
      },
      async () => {
        this.detailArticle = [];
        this.articleList = [];
        this.articleTop = [];
        this.articleHero = [];
        await this.getListArticlesPopular();
      }
    );
  },

  async mounted() {
    await this.getListArticlesPopular();
  },

  methods: {
    async getArticleList() {
      try {
        EventBus.$emit("startLoading");
        var route = this.$route.params;
        const res = await axios.get(`${this.$api}/article/post/${route.slug}`);
        const data = res.data.data;
        this.detailArticle.push(data);

        var artCreated = moment(res.data.data.created_at).format("YYYY-MM-DD ");

        for (let i = 0; i < this.detailArticle.length; i++) {
          this.detailArticle[i].created_at = artCreated;
        }

        console.log(artCreated);
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

    async getListArticlesPopular() {
      try {
        EventBus.$emit("startLoading");
        const response = await axios.get(
          `${this.$api}/article/post?type=popular`
        );
        const dataArticle = response.data.data.articles;

        var artCreated = moment(dataArticle.created_at).format("YYYY-MM-DD ");

        for (let i = 0; i < dataArticle.length; i++) {
          dataArticle[i].created_at = artCreated;
        }

        for (let i = 0; i < 3; i++) {
          this.articleTop.push(dataArticle[i]);
        }

        let i = 4;
        this.articleHero.push(dataArticle[i]);
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

    async showContentBaseOnRoute() {
      var route = this.$route;
      if (route.params.slug) {
        this.routeHasSlug = true;
        await this.getArticleList();
      }
      this.routeHasSlug !== this.routerHasSlug;
      console.log(this.routeHasSlug);
    },
  },
};
</script>

<style></style>
