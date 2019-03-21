<template>
  <v-container>
    <div>
      <h1>{{ selectedCategory }}</h1>
    </div>
    <ProductsGrid></ProductsGrid>
  </v-container>
</template>

<script>
    import ProductsGrid from "../components/ProductsGrid";
    export default {
        name: "Shop",
        components: {ProductsGrid},
        props: [
            'selectedCategory'
        ]
    }
</script>

<style scoped>

</style>