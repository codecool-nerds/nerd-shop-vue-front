<template>
  <v-app>
    <v-content>
      <Header></Header>
      <NavBar></NavBar>
      <router-view></router-view>
      <Footer></Footer>
    </v-content>
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
      //
    }
  }
}
</script>
