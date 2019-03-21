<template>
  <v-container fluid grid-list-xs>
    <v-layout row wrap>
      <v-flex
        v-for="(product, i) in products"
        :key="i"
      >
        <ProductsGridItem :product="product"></ProductsGridItem>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    import ProductsGridItem from "./ProductsGridItem";
    export default {
        name: "ProductsGrid",
        components: {ProductsGridItem},
        props: ['products']
    }
</script>

<style scoped>

</style>