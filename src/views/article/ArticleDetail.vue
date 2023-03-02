<template>
  <v-app>
    <v-container>
      <ArticleComponent />
      <div class="ml-9 mt-7 container-comment">
        <div class="row">
          <div class="lines mx-2">
            <v-icon color="green darken-1">mdi-color-helper</v-icon>
          </div>
          <div class="text-h6">{{ lengthComment }} Komentar</div>
        </div>
        <div class="mt-5">
          <v-text-field
            outlined
            placeholder="Tulis Komentar..."
            dense
            v-model="body"
          >
            <v-btn
              class="btn"
              dense
              icon
              slot="append"
              color="black"
              @click="postComment"
            >
              <v-icon>mdi-send</v-icon>
            </v-btn>
          </v-text-field>
        </div>
        <div
          v-scroll.self="onScroll"
          class="comment overflow-x-auto overflow-x-hidden"
        >
          <v-card
            class="my-3"
            v-for="(comment, i) in commentData"
            :key="i"
            elevation="0"
          >
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
                <div class="text-body1 title-comment">
                  {{ comment.user.name }}
                </div>
                <div class="text-subtitle1 comment-content">
                  {{ comment.body }}
                </div>
                <div
                  class="d-flex flex-row justify-space-between status-comment my-1"
                >
                  <div class="text-caption">{{ comment.created_at }}</div>
                  <div class="text-caption">
                    {{ comment.child_comment_count }} Suka
                  </div>
                  <!-- <div class="text-caption">Balas</div>
                  <div class="text-caption">Laporkan</div> -->
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
import axios from "axios";
import { EventBus } from "../../../event-bus";
import ArticleComponent from "@/components/Article/Article.vue";

export default {
  name: "ArticleDetail",

  components: {
    ArticleComponent,
  },

  data: () => ({
    commentData: [],
    commentModel: [],
    lengthComment: null,
    body: "",
  }),

  created() {
    this.$watch(
      async () => {
        this.$route;

        return {};
      },
      async () => {
        await this.getComment();
        this.commentModel = [];
        this.body = null;
      }
    );
    this.getComment();
  },

  async mounted() {},

  methods: {
    async getComment() {
      try {
        EventBus.$emit("startLoading");
        const comment = await axios.get(`${this.$api}/article/comment/1`);
        console.log(comment.data.data.comments);
        this.commentData = comment.data.data.comments;
        const commentLength = comment.data.data.comments;
        const length = commentLength.length;
        this.lengthComment = length;
      } catch (err) {
        var error = err;
        if (err.response.data.message) {
          error = err.response.data.message;
          console.log(error);
          EventBus.$emit("showSnackbar", error, "red");
        }
      }
      EventBus.$emit("stopLoading");
    },

    async postComment() {
      try {
        EventBus.$emit("startLoading");
        const postComment = await axios.post(
          `${this.$api}/article/comment/1/reply`,
          {
            body: this.body,
          }
        );
        if (postComment.data.status == true) {
          this.body = null;
          await this.getComment();
        }
      } catch (err) {
        var status = err.response.status;
        if (status == 401) {
          EventBus.$emit(
            "showSnackbar",
            "Silahkan Login Terlebih Dahulu",
            "red"
          );
        }
        if (status == 422) {
          EventBus.$emit("showSnackbar", "Komentar Tidak Boleh Kosong", "red");
        }
      }
      EventBus.$emit("stopLoading");
    },
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
