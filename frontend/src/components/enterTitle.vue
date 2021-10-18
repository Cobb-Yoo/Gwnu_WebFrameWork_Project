<template>
  <v-container>
    <v-layout class="contentsLayout">
      <v-row justify="center">
        <v-col cols="8" align="center">
          <v-card class="primary" dark>
            <v-card-title class="green">
              Enter Crowing Title
            </v-card-title>
            <v-text-field class="ma-4" label="Title" outlined></v-text-field>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "enterTitle",
  data() {
    return {
      crowingTitle: "crowingTitle`s test txt",
    };
  },
};
</script>

<style>
.contentsLayout {
  position: relative;
  top: 250px;
}
</style>
