<template>
  <v-app>
    <v-container class="container-detail-article">
      <ArticleComponent @get-links="setUrlComment" />
      <div class="mt-7 container-comment">
        <div class="row mt-md-8">
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
            v-on:keyup.enter="postComment"
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
        <div class="comment overflow-x-auto overflow-x-hidden">
          <v-card
            class="my-3"
            v-for="(comment, i) in commentData"
            :key="i"
            elevation="0"
          >
            <v-row>
              <div class="col-1">
                <v-avatar>
                  <img :src="comment.user.photo" alt="John" />
                </v-avatar>
              </div>
              <div class="col-11 pl-7">
                <div class="title-comment">
                  {{ comment.user.name }}
                </div>
                <div class="text-subtitle1 comment-content">
                  {{ comment.body }}
                </div>
                <div class="d-flex flex-row status-comment my-1 black--text">
                  <div class="mr-8">{{ comment.created_at }}</div>
                  <!-- <div class="mr-8">{{ comment }} Suka</div> -->
                  <div class="mr-8 reply" @click="showReplyField(comment)">
                    Balas
                  </div>
                  <div
                    v-if="comment.links.child_comment"
                    class="reply"
                    @click="
                      showChildComment(comment);
                      getComment(comment);
                    "
                  >
                    Lihat Balasan ({{ comment.child_comment_count }})
                  </div>
                </div>
                <div v-if="comment.clicked">
                  <v-text-field
                    outlined
                    placeholder="Tulis Balasan..."
                    dense
                    v-model="bodyReply"
                    v-on:keyup.enter="replyComment"
                  >
                    <v-btn
                      class="btn"
                      dense
                      icon
                      slot="append"
                      color="black"
                      @click="replyComment"
                    >
                      <v-icon>mdi-send </v-icon>
                    </v-btn>
                  </v-text-field>
                </div>

                <div class="mt-4" v-if="hasChild && comment.clickedChild">
                  <v-card
                    flat
                    v-for="(child, i) in commentChild['comments']"
                    :key="i"
                  >
                    <v-row>
                      <v-col lg="1">
                        <v-avatar>
                          <img :src="child.user.photo" alt="John" />
                        </v-avatar>
                      </v-col>

                      <v-col lg="11">
                        <div class="text-body1 title-comment">
                          {{ child.user.name }}
                        </div>
                        <div class="text-subtitle1 comment-content">
                          {{ child.body }}
                        </div>
                        <div class="d-flex flex-row status-comment my-1">
                          <div class="mr-8">{{ child.created_at }}</div>
                          <div class="mr-8">
                            {{ child.child_comment_count }} Suka
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                  <!-- <div
                    v-if="hasMoreLink"
                    @click="loadMoreComment(commentChild)"
                    class="reply mt-4"
                  >
                    Muat Lebih
                  </div> -->
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
    commentChild: [],
    lengthComment: null,
    body: "",
    bodyReply: "",
    urlComment: "",
    isReplying: false,
    replyLink: null,
    hasChild: false,
    hasMoreLink: "",
    parentChild: "",
  }),

  created() {
    this.$watch(
      async () => {
        this.$route;

        return {};
      },
      async () => {
        await this.getComment();
        this.body = null;
      }
    );
    // this.getComment();
  },

  async mounted() {},

  methods: {
    async getComment(dataComment) {
      try {
        // console.log("get comment jalan");

        if (!dataComment) {
          const comment = await axios.get(`${this.$api}${this.urlComment}`);
          this.commentData = comment.data.data.comments.map((tipe) => {
            return { ...tipe, clicked: false, clickedChild: false };
          });
          const data = comment.data.data.comments;
          const commentLength = data;
          const length = commentLength.length;
          this.lengthComment = length;
        }

        if (dataComment.links.child_comment && dataComment.clickedChild) {
          console.log("ini data comment: ", dataComment);
          this.hasChild = true;
          const childLink = dataComment.links.child_comment;
          const ChildComment = await axios.get(`${this.$api}${childLink}`);
          const comment = ChildComment.data.data;
          this.commentChild = comment;

          if (comment.next_page) {
            const link = comment.next_page;
            this.hasMoreLink = link;
            console.log("ini link: ", this.hasMoreLink);
          }
        }
      } catch (err) {
        var error = err;
        if (err.response.data.message) {
          error = err.response.data.message;
          console.log(error);
          EventBus.$emit("showSnackbar", error, "red");
        }
      }
    },

    // async loadMoreComment() {
    //   try {
    //   } catch (error) {}
    // },

    async replyComment() {
      try {
        console.log("reply comment jalan");
        const reply = await axios.post(`${this.$api}${this.replyLink}`, {
          body: this.bodyReply,
        });
        if (reply.data.status == true) {
          this.bodyReply = null;
          await this.getComment();
        }
      } catch (err) {
        var error = err;
        if (err.response.data.message) {
          error = err.response.data.message;
          console.log(error);
          EventBus.$emit("showSnackbar", error, "red");
        }
      }
    },

    async postComment() {
      try {
        console.log("post comment jalan");
        const postComment = await axios.post(
          `${this.$api}${this.urlComment}/reply`,
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
    },

    showReplyField(data) {
      console.log("ini data: ", data);
      console.log("show reply field jalan");
      this.commentData.forEach((item) => {
        if (item.id !== data.id) {
          item.clicked = false;
        }
        if (data.id == item.id) {
          const replyComment = item.links.reply_comment;
          this.replyLink = replyComment;
          // console.log("ini reply: ", replyComment);
        }
      });
      data.clicked = !data.clicked;
    },

    showChildComment(data) {
      this.commentData.forEach((item) => {
        if (item.id !== data.id) {
          item.clickedChild = false;
        }
        // if (data.id == item.id) {
        //   const childComment = item.links.child_comment;
        //   this.replyLink = childComment;
        //   // console.log("ini reply: ", replyComment);
        // }
      });
      data.clickedChild = !data.clickedChild;
    },

    setUrlComment(value) {
      this.urlComment = value.comment;
      this.getComment();
    },
  },
};
</script>

<style>
.container-comment {
  max-width: 55%;
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

.reply {
  cursor: pointer;
}

@media only screen and (max-width: 1263px) {
  .container-comment {
    max-width: 100%;
  }
}
</style>
