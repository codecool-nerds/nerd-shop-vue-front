<template>
  <v-container class="py-0">
    <BasketSummary :basket="basket"></BasketSummary>
    <ProductsGrid
      :displayMode="'basket'"
      :products="basket"
      @removeFromCart="removeFromCart"
    ></ProductsGrid>
  </v-container>
</template>

<script>
import ProductsGrid from "../components/ProductsGrid";
import BasketSummary from "../components/BasketSummary";
export default {
  name: "BasketDetails",
  components: {BasketSummary, ProductsGrid },
  props: ["basket"],
  methods: {
    removeFromCart(id) {
      let basket = this.basket;
      for (let i = 0; i < basket.length; i++) {
        if (basket[i].id === id) {
          basket.splice(i, 1);
          return;
        }
      }
    }
  }
};
</script>

<style scoped></style>
