<template>
  <v-container grid-list-lg>
    <v-layout row justify-center wrap>
      <v-flex v-if="displayMode==='shop'">
        <v-alert
          :value="!isProductsListAvailable"
          type="error"
          transition="scale-transition"
        >
          Cannot retrieve products of this category.
        </v-alert>
      </v-flex>
      <v-flex v-else>
        <v-alert
                :value="!isProductsListAvailable"
                type="info"
                transition="scale-transition"
        >
          Your basket is empty.
        </v-alert>
      </v-flex>
      <v-flex v-for="product in products" :key="product.id">
        <ProductsGridItem
          :displayMode="displayMode"
          :product="product"
          @addToCart="$emit('addToCart', $event)"
          @removeFromCart="$emit('removeFromCart', $event)"
        ></ProductsGridItem>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProductsGridItem from "./ProductsGridItem";
export default {
  name: "ProductsGrid",
  components: { ProductsGridItem },
  props: ["displayMode", "products"],
  computed: {
    isProductsListAvailable() {
      if (this.products) {
        return this.products.length > 0;
      }
      return false;
    }
  }
};
</script>

<style scoped></style>
