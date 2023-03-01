<template>
  <v-app>
    <v-container>
      <ArticleComponent />
      <div class="PX-9 mt-7 container-comment">
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
            <div class="px-5 d-flex flex-row">
              <div>
                <v-avatar>
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.bbRjEtula0rs46GDEb2kIQHaHa&pid=Api&P=0"
                    alt="John"
                  />
                </v-avatar>
              </div>
              <div class="pl-3 d-flex flex-column">
                <div class="d-flex flex-column">
                  <div class="text-body1 title-comment">
                    {{ comment.user.name }}
                  </div>
                  <div class="text-subtitle1 comment-content">
                    {{ comment.body }}
                  </div>
                </div>
                <div class="d-flex flex-column">
                  <div
                    class="d-flex flex-row  my-1"
                    style="gap: 10px"
                  >
                    <div class="text-caption">{{ comment.created_at }}</div>
                    <div class="text-caption">
                      {{ comment.child_comment_count }} Suka
                    </div>
                    <!-- <div class="text-caption">Balas</div>
                  <div class="text-caption">Laporkan</div> -->
                  </div>
                </div>
              </div>
            </div>
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
@media (min-width: 0px) {
  .container-comment {
    width: 100%;
  }
}
@media (min-width: 960px) {
  .container-comment {
    max-width: 50%;
  }
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
