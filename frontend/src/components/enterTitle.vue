<template>
  <v-container class="contentsLayout">
    <v-row justify="center">
      <v-col cols="5" align="center" class="pt-16 ">
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
      <v-col align="center">
        {{ crowingTitle }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "enterTitle",
  data() {
    return {
      crowingTitle: "",
    };
  },
};
</script>
