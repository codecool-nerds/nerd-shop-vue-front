<template>
  <v-footer height="auto">
    <v-card class="flex secondary text-xs-center">
      <v-card-text class="pb-0 justify-center">
        <strong>Get connected with us on social networks!</strong>
      </v-card-text>
      <v-card-title class="py-0">
        <v-spacer></v-spacer>
        <strong>Adrian:</strong>
        <v-btn class="mx-3 white--text" icon>
          <v-icon>fab fa-linkedin</v-icon>
        </v-btn>
        <v-btn icon class="white--text">
          <v-icon>fab fa-github</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <strong>Rafał:</strong>
        <v-btn class="mx-3 white--text" icon>
          <v-icon>fab fa-linkedin</v-icon>
        </v-btn>
        <v-btn icon class="white--text">
          <v-icon>fab fa-github</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-actions class="accent justify-center">
        &copy;2019 — <strong>Nerds</strong>
        <v-btn icon class="white--text">
          <v-icon>fab fa-github</v-icon>
        </v-btn>
        <strong> (Adrian & Rafał)</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped></style>
