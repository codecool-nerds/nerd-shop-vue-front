<template>
  <v-container grid-list-lg>
    <v-layout v-if="loading" row justify-center>
      <v-progress-circular
              indeterminate
              color="primary"
              size="100"
              width="10"
      ></v-progress-circular>
      <v-flex v-if="displayMode==='shop'">
        <v-alert
                :value="!isProductsListAvailable"
                type="error"
                color="error"
                transition="scale-transition"
        >
          Cannot retrieve products of this category.
        </v-alert>
      </v-flex>
      <v-flex v-else>
        <v-alert
                :value="!isProductsListAvailable"
                type="info"
                color="info"
                transition="scale-transition"
        >
          Your basket is empty.
        </v-alert>
      </v-flex>
    </v-layout>
    <v-layout v-else row justify-start wrap>
      <v-flex v-for="product in products" :key="product.id"
              v-if="product.id !== 12">
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
  props: ["displayMode", "products", "loading"],
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
