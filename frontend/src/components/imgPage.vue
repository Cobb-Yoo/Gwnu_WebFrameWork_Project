<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <img class="image-fit" :src="imgs[idx]" />
      </v-col>

      <v-btn @click="left"> left</v-btn>
      <v-btn @click="right"> right</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "imgPage",
  data() {
    return {
      test: require("../img/a.jpg"),
      imgs: [
        require("../img/a.jpg"),
        require("../img/b.jpg"),
        require("../img/c.jpg"),
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
