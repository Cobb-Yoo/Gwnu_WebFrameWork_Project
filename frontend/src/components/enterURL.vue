<template>
  <v-container>
    <v-row>
      <v-col>
        <div>
          <v-text-field
            label="Main input"
            :rules="rules"
            hide-details="auto"
          ></v-text-field>
          <v-text-field label="Another input"></v-text-field>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "enterURL",
};
</script>
