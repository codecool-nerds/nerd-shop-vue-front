<template>
  <v-footer height="auto">
    <v-card class="flex secondary text-xs-center white--text">
      <v-card-title class="py-0">
        <v-spacer></v-spacer>
        <strong class="accent--text">Adrian:</strong>
        <v-btn class="mx-3 white--text"
               icon
               href="https://www.linkedin.com/in/adrian-ostromęcki"
        >
          <v-icon>fab fa-linkedin</v-icon>
        </v-btn>
        <v-btn icon
               class="white--text"
               href="https://github.com/adrianOstromecki"
        >
          <v-icon>fab fa-github</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <strong>Get connected with us on social networks!</strong>
        <v-spacer></v-spacer>
        <strong class="accent--text">Rafał:</strong>
        <v-btn class="mx-3 white--text"
               icon
               href="https://www.linkedin.com/in/rafa%C5%82-becla-967bab137/"
        >
          <v-icon>fab fa-linkedin</v-icon>
        </v-btn>
        <v-btn icon
               class="white--text"
               href="https://github.com/Paprok"
        >
          <v-icon>fab fa-github</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-actions class="primary justify-center">
        &copy;2019 — <strong>Nerds</strong>
        <v-btn icon class="white--text"
          href="https://github.com/codecool-nerds"
        >
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
