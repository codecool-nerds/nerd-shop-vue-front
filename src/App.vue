<template>
  <v-app>
      <Header></Header>
      <NavBar @categoryChosen="selectedCategory = $event"></NavBar>
      <v-content>
        <v-container fluid>
          <router-view :selectedCategory="selectedCategory"></router-view>
        </v-container>
      </v-content>
      <Footer></Footer>
  </v-app>
</template>

<script>

import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {
      Footer,
      NavBar,
      Header
  },
  data () {
    return {
      selectedCategory: ''
    }
  }
}
</script>
