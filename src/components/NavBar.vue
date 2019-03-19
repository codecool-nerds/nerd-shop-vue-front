<template>
  <div>
    <h1>Categories here</h1>
    <router-link to="/">Go to home</router-link>
    <br>
    <router-link to="/shop">Go to shop</router-link>
    <br>
    <router-link to="/product/1">Go to product details</router-link>
    <br>
    <router-link to="/basket">Go to basket</router-link>
  </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>

</style>