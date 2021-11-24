<template>
  <v-container class="contentsLayout">
    <v-row justify="center">
      <v-col cols="4">
        <router-link to="/txtPage">
          <v-card class="choiceCard ma-4 text-center">
            텍스트
          </v-card>
        </router-link>
      </v-col>

      <v-col cols="4">
        <router-link to="/imgPage">
          <v-card class="choiceCard ma-4 justify-center">
            이미지
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "choicePage",
};
</script>

<style>
.contentsLayout {
  position: relative;
  top: 100px;
}
.choiceCard {
  height: 316px;
}
</style>
