<template>
  <div class="d-flex container-whatsapp justify-center">
    <div class="sideBar justify-center align-center">
      <div class="sideBar__body">
        <SideBarHeader />
        <SideBar
          v-for="(message, index) in indexes"
          :key="index"
          :activeMessage="index == activeIndex"
          :userPhoto="message.image"
          :userName="message.user"
          :lastMessage="message.messages[0].content"
          :lastMessageTime="message.messages[0].time"
          v-on:click.native="activeIndex = index"
        />
      </div>
    </div>
    <div class="messageView">
      <div class="messageView__header">
        <div class="messageView__user">
          <img v-bind:src="indexes[activeIndex].image" alt="" />
          <span>{{ indexes[activeIndex].user }}</span>
        </div>
        <div class="messageView__headerIcons">
          <!-- <font-awesome-icon
            class="messageView__headerIcon"
            icon="fa-solid fa-magnifying-glass"
          /> -->
          <font-awesome-icon
            class="messageView__headerIcon"
            icon="fa-solid fa-ellipsis-vertical"
          />
        </div>
      </div>
      <div class="messageView__body">
        <MessageViewBody
          :content="message.content"
          :time="message.time"
          :send="message.send"
          v-for="(message, index_) in indexes[activeIndex].messages"
          :key="index_"
        />
      </div>
      <div class="messageView__footer py-2 pb-3 px-6 d-flex align-center">
        <div class="messageView__footerIcons">
          <!-- <EmojiButton /> -->
          <v-menu
            :close-on-content-click="false"
            transition="scale-transition"
            :close-on-click="false"
            origin="center center"
            :offset-y="offset"
            top
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon color="primary" dark v-bind="attrs" v-on="on">
                <font-awesome-icon
                  class="messageView__footerIcon"
                  icon="fa-solid fa-face-laugh-beam"
                />
                <!-- {{ attrs }} -->
              </v-btn>
            </template>
            <v-list>
              <div class="emoji_picker">
                <div class="picker_container">
                  <div
                    class="category"
                    v-for="category in categories"
                    :key="`category_${category}`"
                  >
                    <span>{{ category }}</span>
                    <div class="emojis_container">
                      <button
                        v-for="(emoji, index) in category_emojis(category)"
                        :key="`emoji_${index}`"
                        v-on:click="contentSend += emoji"
                      >
                        {{ emoji }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </v-list>
          </v-menu>

          <!-- <AttachmentButotn /> -->
          <v-menu
            :close-on-content-click="false"
            transition="scale-transition"
            :close-on-click="false"
            origin="center center"
            :offset-y="offset"
            top
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon color="primary" v-bind="attrs" v-on="on">
                <font-awesome-icon
                  class="messageView__footerIcon"
                  icon="fa-solid fa-paperclip"
                />
              </v-btn>
            </template>
            <v-list>
              <AttachmentButton v-for="(icon, i) in attachmentIcon" :key="i">
                <v-icon>{{ icon.icon }}</v-icon>
              </AttachmentButton>
            </v-list>
          </v-menu>
        </div>
        <div class="messageView__input flex-grow-1">
          <input
            type="text"
            v-on:keyup.enter="sendMessage"
            placeholder="Tuliskan Pesan..."
            v-model="contentSend"
          />
        </div>
        <!-- <font-awesome-icon
          class="messageView__footerIcon"
          icon="fa-solid fa-microphone"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/assets/ChatDokter/js/emojis-data.json";
import AttachmentButton from "@/components/ChatRoom/AttachmentButton.vue";
// import EmojiButton from "@/components/ChatRoom/EmojiPicker.vue";
import SideBarHeader from "@/components/ChatRoom/SideBarHeader.vue";
import SideBar from "@/components/ChatRoom/SideBar.vue";
import messagesIndexes from "@/assets/ChatDokter/js/messages.js";
import MessageViewBody from "@/components/ChatRoom/MessageViewBody.vue";
export default {
  name: "App",
  data: function () {
    return {
      indexes: messagesIndexes,
      activeIndex: 0,
      contentSend: "",
      offset: true,
      AttachMenu: false,
      emojiMenu: false,
      attachmentIcon: [
        {
          icon: "mdi-file-document",
        },
        {
          icon: "mdi-file-image",
        },
        {
          icon: "mdi-file-video",
        },
      ],
    };
  },
  components: {
    AttachmentButton,
    SideBarHeader,
    SideBar,
    MessageViewBody,
    // EmojiButton,
  },
  computed: {
    categories() {
      return Object.keys(data);
    },
    category_emojis: () => (category) => {
      return Object.values(data[category]);
    },
  },

  methods: {
    sendMessage: function () {
      let presentTime = new Date().getHours() + ":" + new Date().getMinutes();
      let newMessage = {
        time: presentTime,
        content: this.contentSend,
        send: true,
      };
      this.indexes[this.activeIndex].messages.push(newMessage);
      this.contentSend = "";
    },
    handleEmojiClick(e, emoji) {
      e.preventDefault();
      this.$emit("emoji_click", emoji);
    },
  },
};
</script>

<style>
.container-whatsapp {
  width: 75% !important;
  margin: auto !important;
  height: 100vh;
  overflow-y: scroll;
}

.sideBar {
  width: 500px;
  font-family: "Inter", sans-serif;
  background-color: #111b21;
}

.sideBar__search {
  display: flex;
  background-color: #111b21;
  border-bottom: 1px solid #202c33;
  padding: 10px 15px;
}

.sideBar__searchArea {
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #202c33;
  width: 100%;
  display: flex;
}

.sideBar__searchArea input {
  background: none;
  border: none;
  resize: none;
  outline: none;
  width: 100%;
  margin-left: 30px;
  color: #ffffff !important;
  font-weight: 100;
  font-size: 13px;
}

.sideBar__searchIcon {
  font-size: 15px;
  color: #aebac1;
  cursor: pointer;
}

.sideBar_searchFilter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5px;
  margin-left: 20px;
  cursor: pointer;
}

.sideBar__item {
  background-color: #111b21;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #202c33;
  cursor: pointer;
}
.sideBar__item:hover {
  background-color: #202c33;
}
.sideBar__senderInfo {
  display: flex;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  padding: 0;
}
.sideBar__senderPhoto img {
  width: 50px;
  border-radius: 55px;
}
.sideBar__senderContent {
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.--senderName {
  color: #fff;
}

.--senderMessage {
  color: #a7a9ac;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.2px;
  margin-top: 5px;
}

.--senderTime {
  color: #a7a9ac;
  font-size: 12px;
  font-weight: 200;
}

.--MessageSenderName {
  margin-left: 10px;
  font-size: 15px;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.3px;
}

.active {
  background-color: #2a3942;
}
</style>

<style scoped>
.emoji_picker {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 20rem;
  max-width: 100%;
}
.emoji_picker,
.bottom_arrow {
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
}
.emoji_picker,
.picker_container {
  border-radius: 0.5rem;
  background: white;
}
.picker_container {
  position: relative;
  padding: 1rem;
  overflow: auto;
  z-index: 1;
}
.category {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  color: rgb(169, 169, 169);
}
.emojis_container {
  display: flex;
  flex-wrap: wrap;
}
.category button {
  margin: 0.5rem;
  margin-left: 0;
  background: inherit;
  border: none;
  font-size: 1.75rem;
  padding: 0;
}
.bottom_arrow {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0.75rem;
  height: 0.75rem;
  transform: translate(-50%, 50%) rotate(45deg);
  background: white;
}
</style>
