<template>
  <v-container>
    <ProductsGrid
      :displayMode="'basket'"
      :products="basket"
      @removeFromCart="removeFromCart"
    ></ProductsGrid>
  </v-container>
</template>

<script>
import ProductsGrid from "../components/ProductsGrid";
export default {
  name: "BasketDetails",
  components: { ProductsGrid },
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
