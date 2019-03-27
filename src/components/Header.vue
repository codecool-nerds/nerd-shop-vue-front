<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-toolbar color="primary">
    <v-toolbar-title class="ml-1 mr-3 white--text">Nerd Shop</v-toolbar-title>
    <v-text-field
            class="mx-4"
            background-color="white"
            color="secondary"
            v-model="searchText"
            label="Search on the page"
            append-icon="search"
            @click:append="search"
            @keyup="searchIfEnterPressed"
            single-line
    ></v-text-field>

    <v-menu offset-y
            open-on-hover
    >
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" flat class="white--text">
          <v-avatar size="36px" class="mx-2">
            <img src="https://picsum.photos/300/300?random" />
          </v-avatar>
          Harry Potter
        </v-btn>
      </template>
      <v-list>
        <v-list-tile @click="goToBasket">
          <v-list-tile-title
            >Basket ({{ this.basketCapacity }})</v-list-tile-title
          >
          <v-icon>shopping_cart</v-icon>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-title>Logout</v-list-tile-title>
          <v-icon>settings_power</v-icon>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: "Header",
  props: ["basketCapacity"],
  data: () => ({
    searchText: "",
    drawer: null
  }),
  methods: {
    search() {
      this.searchText = "";
    },
    searchIfEnterPressed(event) {
      if (event.keyCode == 13) {
        this.search();
      }
    },
    goToBasket() {
      this.$router.push("/basket");
    }
  }
};
</script>

<style scoped></style>
