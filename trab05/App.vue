<template>
  <div id="container">

    <div id="sidebar">
      <div id="sidebar-header">
        <img src="https://i.pravatar.cc/40?img=12" class="avatar" />
        <span>Chat</span>
      </div>
      <div class="contact">
        <img src="https://i.pravatar.cc/40?img=53" class="avatar" />
        <div>
          <p class="name">Lucas</p>
          <p class="preview">{{ lastMsg }}</p>
        </div>
      </div>
      <div class="contact">
        <img src="https://i.pravatar.cc/40?img=15" class="avatar" />
        <div>
          <p class="name">João</p>
          <p class="preview">Bom dia</p>
        </div>
      </div>
      <div class="contact">
        <img src="https://i.pravatar.cc/40?img=22" class="avatar" />
        <div>
          <p class="name">Ana</p>
          <p class="preview">Tchau</p>
        </div>
      </div>
    </div>

    <div id="chat">
      <div id="chat-header">
        <img src="https://i.pravatar.cc/40?img=53" class="avatar" />
        <span>Lucas</span>
      </div>

      <div id="messages" ref="messages">
        <div v-for="(msg, i) in messages" :key="i" class="message">
          {{ msg.text }}
          <div class="time">{{ msg.time }}</div>
        </div>
      </div>

      <div id="input-area">
        <input
          v-model="text"
          placeholder="Digite uma mensagem..."
          @keydown.enter="send"
        />
        <button @click="send">Enviar</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      lastMsg: "",
      messages: []
    };
  },
  methods: {
    send() {
      if (this.text.trim() === "") return;

      var now = new Date();
      var h = String(now.getHours()).padStart(2, "0");
      var m = String(now.getMinutes()).padStart(2, "0");

      this.messages.push({ text: this.text, time: h + ":" + m });
      this.lastMsg = this.text;
      this.text = "";

      this.$nextTick(() => {
        this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight;
      });
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

html, body, #app {
  height: 100%;
  background: #dadbd3;
}

#container {
  display: flex;
  height: 100vh;
}

#sidebar {
  width: 280px;
  background: #fff;
  border-right: 1px solid #ddd;
}

#sidebar-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  height: 55px;
  background: #ededed;
  font-weight: bold;
}

.contact {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 15px;
  border-bottom: 1px solid #f0f0f0;
}

.name {
  font-weight: bold;
  font-size: 14px;
}

.preview {
  font-size: 12px;
  color: #999;
  margin-top: 2px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

#chat {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #e5ddd5;
}

#chat-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  height: 55px;
  background: #ededed;
  font-weight: bold;
}

#messages {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.message {
  max-width: 60%;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  align-self: flex-end;
  background: #dcf8c6;
}

.time {
  font-size: 10px;
  color: #999;
  text-align: right;
  margin-top: 3px;
}

#input-area {
  display: flex;
  gap: 8px;
  padding: 10px 15px;
  background: #ededed;
}

#input-area input {
  flex: 1;
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  outline: none;
}

#input-area button {
  padding: 8px 20px;
  background: #128c7e;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
}
</style>
