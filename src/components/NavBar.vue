<template>
  <v-container class="pa-0" :key="navBarKey">
    <v-layout align-start justify-space-around row>
      <v-flex v-for="(category, i) in categories" :key="i">
        <v-btn
          block
          @click="chooseCategory(category)"
          :class="{
            orange:
              $router.currentRoute.name === 'shop' &&
              selectedCategory === category
          }"
          >{{ category }}</v-btn
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    categories: ["GAME", "MOUSE", "KEYBOARD", "HEADSET", "OTHER"],
    selectedCategory: "",
    navBarKey: 0
  }),
  computed: {
    isShopTheCurrentRoute() {
      return this.$router.currentRoute.path === "/shop";
    },
    route() {
      return this.$router.currentRoute.path;
    }
  },
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
  }
};
</script>

<style scoped>
.highlight {
  background-color: #ffa71a;
}
</style>
