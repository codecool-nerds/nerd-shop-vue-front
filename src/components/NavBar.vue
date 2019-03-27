<template>
  <v-container class="pa-0" :key="navBarKey">
    <v-layout align-start justify-space-around row>
      <v-flex>
        <v-btn
                block
                @click="chooseCategory('all')"
                :class="{
            orange:
              $router.currentRoute.name === 'shop' &&
              selectedCategory === 'all'
          }">
          All products
        </v-btn>
      </v-flex>
      <v-flex v-for="(category, i) in categories" :key="i">
        <v-btn
          block
          @click="chooseCategory(category.name)"
          :class="{
            orange:
              $router.currentRoute.name === 'shop' &&
              selectedCategory === category.name
          }"
          >{{ category.name }}</v-btn
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as axios from "axios";

export default {
  name: "NavBar",
  data: () => ({
    categories: [],
    selectedCategory: "",
    navBarKey: 0
  }),
  methods: {
    chooseCategory(category) {
      this.selectedCategory = category;
      this.$emit("categoryChosen", category);
      this.$router.push("/shop");
    }
  },
  watch: {
    $route() {
      this.navBarKey += 1;
    }
  },
  mounted() {
    axios
      .get(`${this.$apiAdress}/categories`)
      .then(response => {
        this.categories = response.data;
      })
      .catch(error => {
        console.log(error);
      });
    this.chooseCategory('all')
  }
};
</script>

<style scoped></style>
