<template>
  <div id="app">
    <Header></Header>
    <NavBar></NavBar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
    import Header from "@/components/Header";
    import NavBar from "@/components/NavBar";
    import Footer from "@/components/Footer";
    export default {
        components: {Footer, NavBar, Header}
    }
</script>