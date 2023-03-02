<template>
  <div class="message" v-bind:class="{ send: send }">
    {{ content }}
    <span>{{ time }}</span>
  </div>
</template>
<script>
export default {
  name: "MessageViewBody",
  props: ["content", "time", "send"],
};
</script>

<style>
.message {
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 0.5px 0px;
  background: #202c33;
  margin: 5px 100px;
  padding: 5px 10px;
  border-radius: 5px;
  width: fit-content;
  color: white;
}
.message.send {
  background: #005c4b;
  align-self: flex-end;
  color: white;
}
.message span {
  margin-left: 25px;
  font-size: 11px;
  color: rgb(201, 201, 201);
}

.messageView {
  display: flex;
  flex-direction: column;
  background-color: #0a1014;
  width: 1500px;
  font-family: "Inter", sans-serif;
  border-left: 1px solid #344249;
}

.messageView__header {
  background-color: #202c33;
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
}

.messageView__user {
  display: flex;
}

.messageView__user img {
  width: 45px;
  height: 45px;
  border-radius: 55px;
}

.messageView__user span {
  color: white;
  font-size: 15px;
  margin-top: 12px;
  margin-left: 15px;
}

.messageView__headerIcons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50px;
  padding-right: 20px;
}

.messageView__headerIcon {
  font-size: 20px;
  color: #aebac1;
  cursor: pointer;
  margin-top: 10px;
}

.messageView__body {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 0;
  height: 100%;
}

.messageView__footer {
  background-color: #2a3942;
  gap: 2rem;
}

.messageView__footerIcons {
  display: flex;
  justify-content: space-between;
  width: 70px;
}

.messageView__footerIcon {
  font-size: 25px;
  color: #aebac1;
  cursor: pointer;
}

.messageView__input input {
  padding: 15px 20px;
  background-color: #202c33;
  border: none;
  resize: none;
  outline: none;
  border-radius: 10px;
  color: white;
  width: 100%;
}
</style>
