<template>
  <div class="container">
    <div class="header row">
      <div class="row mt-3">
        <div class="row">
          <v-btn class="btn-left" icon color="white">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <div class="text-h4 bolder ml-10">Dr. Mariana Carlos, MARS</div>
        </div>
        <div>
          <v-btn
            class="btn-accept mb-3"
            readonly
            rounded="pill"
            color="#4CAF50"
            outlined
            >Accepted</v-btn
          >
        </div>
      </div>
    </div>
    <v-divider class="black mt-3" inset></v-divider>

    <div class="room">
      <div class="row">
        <div class="col-6"></div>
        <div class="col-6 d-flex flex-row-reverse">
          <v-card class="patient-msg rounded-xl blue" max-width="344">
            <div class="text-h6 msg-1">
              Hi, Selamat Siang Dokter Mariana Carlos... :)
            </div>
            <div class="text-caption text-right">13.35</div>
          </v-card>
        </div>
      </div>
      <!-- =============== -->
      <div class="row">
        <div class="col-6"></div>
        <div class="col-6 d-flex flex-row-reverse">
          <v-card class="patient-msg rounded-xl blue" max-width="344">
            <div class="text-h6 msg-1">
              Saya Matthew, saya mempunyai keluhan dengan gigi saya dok...
            </div>
            <div class="text-caption text-right">13.35</div>
          </v-card>
        </div>
      </div>
      <!-- ========== -->
      <!-- =============== -->
      <div class="row">
        <div class="col-6 row">
          <v-card class="doctor-msg rounded-xl grey lighten-1" max-width="344">
            <div class="text-h6 msg-2">Halo, Selamat siang juga Matthew</div>
            <div class="text-caption time-2 text-right">13.35</div>
          </v-card>
          <v-btn large class="btn-reply my-auto" icon color="black">
            <v-icon>mdi-reply</v-icon>
          </v-btn>
        </div>

        <div class="col-6"></div>
      </div>
      <!-- ========== -->
      <!-- =============== -->
      <div class="row">
        <div class="col-6 row">
          <v-card class="doctor-msg rounded-xl grey lighten-1" max-width="344">
            <div class="text-h6 msg-2">
              Bisakah anda memberi tahu saya lebih detail tentang keluhan yang
              kamu rasakan sekarang, jadi saya bisa mengenali masalahnya
            </div>
            <div class="text-caption time-2 text-right">13.35</div>
          </v-card>
          <v-btn large class="btn-reply my-auto" icon color="black">
            <v-icon>mdi-reply</v-icon>
          </v-btn>
        </div>

        <div class="col-6"></div>
      </div>
      <!-- ========== -->
      <!-- =======MSG IMAGE======== -->
      <div class="row">
        <div class="col-6"></div>
        <div class="col-6 d-flex flex-row-reverse">
          <v-card class="patient-msg rounded-xl blue" max-width="544">
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="280"
              max-width="459"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
            <div class="text-caption time-1 text-right">13.35</div>
          </v-card>
        </div>
      </div>
      <!-- ========== -->
      <div class="msg-input row">
        <v-text-field
          v-model="message"
          outlined
          clearable
          placeholder="Ketikan sesuatu disini....."
          type="text"
        >
          <template v-slot:prepend>
            <v-btn class="btn-emote" icon color="black">
              <v-icon>mdi-emoticon</v-icon>
            </v-btn>
          </template>
          <template v-slot:append>
            <v-btn class="btn-cam" icon color="black">
              <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
            <v-btn class="btn-cam" icon color="black">
              <v-icon>mdi-camera</v-icon>
            </v-btn>
          </template>
        </v-text-field>
        <v-btn class="btn-voice blue" large icon color="white">
              <v-icon>mdi-microphone</v-icon>
            </v-btn>
      </div>
    </div>
  </div>
</template>

<style>
.btn-left {
  background-color: black;
}
.btn-voice{
  margin-left: 1%;
  margin-top: 5px;
}

.header {
  /* border-bottom: solid;
  border-color: black; */
  /* border-style: solid; */
  padding: 10px;
}
.patient-msg {
  padding: 15px;
  margin-top: 20px;
}
.msg-1 {
  color: white;
}
.doctor-msg {
  padding: 15px;
  margin-top: 20px;
}
.msg-2 {
  color: black;
}
.time-2 {
  color: white;
}
.msg-input {
  margin-top: 5%;
}
.btn-cam {
  margin-top: -5px;
}
.btn-reply {
  background-color: #bdbdbd;
  margin-left: 1%;
}
</style>

<script>
export default {
  data: () => ({
    loading: false,
  }),

  methods: {
    clickMe() {
      this.loading = true;
      this.message = "Wait for it...";
      setTimeout(() => {
        this.loading = false;
        this.message = `You've clicked me!`;
      }, 2000);
    },
  },
};
</script>
