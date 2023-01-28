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
            <v-card class="elevation-0">
              <v-img
                height="515"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
              <v-card-title>
                <h1>Article Title</h1>
              </v-card-title>
              <v-card-text>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptas, quod, quia, quae voluptates quibusdam voluptatibus
                  doloremque quas quidem quos voluptatum. Quisquam, quae.
                  Quisquam quae, quod quibusdam voluptas quos.
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="5">
            <div class="d-flex flex-column">
              <v-card class="elevation-0">
                <v-card-title>
                  <h1>Related Articles</h1>
                </v-card-title>
                <v-card-text>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis voluptas, quod, quia, quae voluptates quibusdam
                    voluptatibus doloremque quas quidem quos voluptatum.
                    Quisquam, quae. Quisquam quae, quod quibusdam voluptas quos.
                  </p>
                </v-card-text>
              </v-card>
              <div class="small-line"></div>
              <v-card class="elevation-0">
                <v-card-title>
                  <h1>Related Articles</h1>
                </v-card-title>
                <v-card-text>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis voluptas, quod, quia, quae voluptates quibusdam
                    voluptatibus doloremque quas quidem quos voluptatum.
                    Quisquam, quae. Quisquam quae, quod quibusdam voluptas quos.
                  </p>
                </v-card-text>
              </v-card>
              <div class="small-line"></div>
              <v-card class="elevation-0">
                <v-card-title>
                  <h1>Related Articles</h1>
                </v-card-title>
                <v-card-text>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis voluptas, quod, quia, quae voluptates quibusdam
                    voluptatibus doloremque quas quidem quos voluptatum.
                    Quisquam, quae. Quisquam quae, quod quibusdam voluptas quos.
                  </p>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </section>
      <div class="big-line"></div>
      <section class="main-2">
        <v-row align-content="center ">
          <v-col
            cols="12"
            md="3"
            v-for="(articleData, i) in articleList"
            :key="i"
          >
            <v-card :loading="loading" class="my-8 mx-auto" max-width="374">
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
                <div>
                  {{ articleData.desc }}
                </div>
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
  }),

  async mounted() {
    await this.getListArticles();
  },

  methods: {
    async getListArticles() {
      try {
        EventBus.$emit("startLoading");
        const response = await axios.get(`${this.$api}/article/post`);
        this.articleList = response.data.data.articles;
        console.log(this.articleList);
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
.article-title {
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
  margin: 2rem 0;
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
