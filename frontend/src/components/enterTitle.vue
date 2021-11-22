<template>
  <v-container class="contentsLayout">
    <v-row justify="center">
      <v-col cols="5" align="center" class="mt-15">
        <v-card class="primary" dark>
          <v-card-title class="green">
            Title
          </v-card-title>

          <v-text-field
            class="ma-4"
            label="Title은 저장한 파일 혹은 폴더의 이름이 됩니다."
            v-model="crowingTitle"
            outlined
          ></v-text-field>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="setTitle(crowingTitle)"> </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "enterTitle",
  data() {
    return {
      crowingTitle: "",
    };
  },
  methods: {
    ...mapActions(["setTitle"]),
  },
};
</script>
