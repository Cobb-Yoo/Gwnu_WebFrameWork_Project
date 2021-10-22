<template>
  <v-container>
    <v-layout class="contentsLayout">
      <v-row>
        <v-col>
          <v-card>
            <v-card-title class="green">
              scriptBlocks
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="2">
          <v-card
            ><v-card-title class="green">
              scriptBlocks
            </v-card-title>

            <v-text-field class="ma-4" label="scriptBlocks" outlined />
          </v-card>
        </v-col>

        <v-col cols="8" align="center">
          <v-card class="primary" dark>
            <v-card-title class="green">
              scriptBlocks
            </v-card-title>

            <v-text-field class="ma-4" label="scriptBlocks" outlined />
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "scriptBlocks",
  data() {},
};
</script>

<style>
.contentsLayout {
  position: relative;
  top: 250px;
}
</style>
