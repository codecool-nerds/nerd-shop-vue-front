<template>
  <v-container class="py-0">
    <ProductsGrid
      :displayMode="'shop'"
      :products="products"
      :loading="loading"
      @addToCart="$emit('addToCart', $event)"
    ></ProductsGrid>
  </v-container>
</template>

<script>
import ProductsGrid from "../components/ProductsGrid";
export default {
  name: "Shop",
  components: { ProductsGrid },
  props: ["products", "loading"]
};
</script>

<style scoped></style>
