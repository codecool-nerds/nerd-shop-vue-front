<template>
  <v-container class="py-0">
    <ProductsGrid
      :displayMode="'shop'"
      :products="products"
      @addToCart="$emit('addToCart', $event)"
    ></ProductsGrid>
  </v-container>
</template>

<script>
import ProductsGrid from "../components/ProductsGrid";
export default {
  name: "Shop",
  components: { ProductsGrid },
  props: ["products"]
};
</script>

<style scoped></style>
