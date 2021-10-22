<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link to="/">
        <span class="router-span pa-3 ma-1"> title </span>
      </router-link>

      <router-link to="/enterURL">
        <span class="router-span pa-3 ma-1"> url </span>
      </router-link>

      <router-link to="/scriptBlocks">
        <span class="router-span pa-3 ma-1"> scriptBlocks </span>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>

<style>
.router-span {
  color: black;
  background-color: red;
}
</style>
