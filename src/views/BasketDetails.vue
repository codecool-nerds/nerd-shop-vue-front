<template>
  <v-container>
    <ProductsGrid :products=basket></ProductsGrid>
  </v-container>
</template>

<script>
    import ProductsGrid from "../components/ProductsGrid";
    export default {
      name: "BasketDetails",
      components: {ProductsGrid},
      props: [
          'basket'
      ]
    }
</script>

<style scoped>

</style>