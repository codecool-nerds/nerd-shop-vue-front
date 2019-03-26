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
  props: ["products"],
  data: () => ({
    productsMock: [
      {
        id: 1,
        name: "Myszeczka9000",
        category: "MOUSE",
        price: 199,
        quantity: 1,
        imageURL: "https://altao.pl/foto_hd/648/A/fot_033_A48.jpg",
        description: "Troszkę tajemnicza."
      },
      {
        id: 2,
        name: "Mousik",
        category: "MOUSE",
        price: 49.9,
        quantity: 5,
        imageURL: null,
        description: null
      },
      {
        id: 3,
        name: "Blaster1000",
        category: "MOUSE",
        price: 499,
        quantity: 0,
        imageURL: null,
        description: "Przezajebista!"
      },
      {
        id: 4,
        name: "Mysz bezprzewodowa",
        category: "MOUSE",
        price: 79.9,
        quantity: 3,
        imageURL: null,
        description:
          "Jest bez kabla! To daje dużą swobodę. Jest bez kabla! To daje dużą swobodę. " +
          "Jest bez kabla! To daje dużą swobodę.Przezajebista! Jest bez kabla! To daje dużą swobodę."
      }
    ]
  })
};
</script>

<style scoped></style>
