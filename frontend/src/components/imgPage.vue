<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <img class="image-fit" :src="imgs[idx]" />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="6" align="center">
        <v-btn large @click="left" width="400"> left</v-btn>
      </v-col>
      <v-col cols="6" align="center">
        <v-btn large @click="right" width="400"> right</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "imgPage",
  data() {
    return {
      imgs: [
        require("../img/1.png"),
        require("../img/2.png"),
        require("../img/3.png"),
      ],
      idx: 0,
    };
  },
  methods: {
    right() {
      this.idx += 1;
      if (this.imgs.length <= this.idx) this.idx = 0;
    },
    left() {
      this.idx -= 1;
      if (this.idx < 0) this.idx = this.imgs.length - 1;
    },
  },
};
</script>

<style scoped>
.image-fit {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
