<template>
  <v-app>
    <v-container>
      <ArticleComponent />
      <div class="ml-9 mt-7 container-comment">
        <div class="row">
          <div class="lines mx-2">
            <v-icon color="green darken-1">mdi-color-helper</v-icon>
          </div>
          <div class="text-h6">3 Komentar</div>
        </div>
        <div class="mt-5">
          <v-text-field outlined placeholder="Tulis Komentar..." dense>
            <v-btn class="btn" dense icon slot="append" color="black">
              <v-icon>mdi-send</v-icon>
            </v-btn>
          </v-text-field>
        </div>
        <div
          v-scroll.self="onScroll"
          class="comment overflow-x-auto overflow-x-hidden"
        >
          <v-card class="my-3" v-for="n in 5" :key="n" elevation="0">
            <v-row>
              <div class="col-1">
                <v-avatar>
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.bbRjEtula0rs46GDEb2kIQHaHa&pid=Api&P=0"
                    alt="John"
                  />
                </v-avatar>
              </div>
              <div class="col-11 pl-7">
                <div class="text-body1 title-comment">Pando Dezandro</div>
                <div class="text-subtitle1 comment-content">
                  terimakasih atas artikel ini sangat membantu saya,Quae eum et
                  harum dolor sint soluta voluptate. Aliquid neque quo
                  exercitationem. Impedit quia consectetur officia voluptatem
                  tempore aut dolores sed. Dignissimos voluptatem ut et quia et
                  quia dolor minima.
                </div>
                <div
                  class="d-flex flex-row justify-space-between status-comment my-1"
                >
                  <div class="text-caption">5 menit</div>
                  <div class="text-caption">12 suka</div>
                  <div class="text-caption">Balas</div>
                  <div class="text-caption">Laporkan</div>
                </div>
              </div>
            </v-row>
          </v-card>
        </div>
      </div>
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

<style>
.container-comment {
  max-width: 50%;
}
.btn {
  margin-top: -5px;
}
.lines {
  rotate: -90deg;
}
.status-comment {
  max-width: 50%;
  color: #bdbdbd;
}
.comment-content {
  color: black;
}
.title-comment {
  color: black;
  font-weight: 600;
}
.comment {
  max-height: 400px;
}
</style>
