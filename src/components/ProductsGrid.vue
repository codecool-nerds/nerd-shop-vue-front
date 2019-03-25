<template>
  <v-container grid-list-lg>
    <v-layout row justify-center wrap>
      <v-flex
        v-for="product in products"
        :key="product.id"
      >
        <ProductsGridItem
                :displayMode="displayMode"
                :product="product"
                @addToCart="$emit('addToCart', $event)"
        ></ProductsGridItem>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    import ProductsGridItem from "./ProductsGridItem";
    export default {
        name: "ProductsGrid",
        components: {ProductsGridItem},
        props: ['displayMode', 'products']
    }
</script>

<style scoped>

</style>