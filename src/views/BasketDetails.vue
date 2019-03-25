<template>
  <v-container>
    <ProductsGrid
            :displayMode="'basket'"
            :products=basket
    ></ProductsGrid>
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