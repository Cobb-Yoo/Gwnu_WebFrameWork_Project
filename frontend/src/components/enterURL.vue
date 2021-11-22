<template>
  <v-container class="contentsLayout">
    <v-row justify="center">
      <v-col cols="5" align="center" class="pt-16 ">
        <v-card class="primary" dark>
          <v-card-title class="green">
            URL
          </v-card-title>

          <v-text-field
            class="ma-4"
            label="입력받은 URL의 데이터를 수집합니다"
            v-model="targetURL"
            outlined
          ></v-text-field>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "enterURL",
  data() {
    return {
      targetURL: "",
    };
  },
};
</script>
