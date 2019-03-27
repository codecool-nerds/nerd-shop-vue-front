<template>
  <v-app>
    <Header :basketCapacity="basketCapacity"></Header>
    <NavBar
      @categoryChosen="loadProductsOfCategory"
      style="max-height: max-content;"
    ></NavBar>
    <v-content>
      <v-container fluid>
        <router-view
          :products="products"
          :basket="basket"
          :loading="isLoadingProducts"
          @addToCart="addToCart"
        ></router-view>
      </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import * as axios from "axios";
export default {
  name: "App",
  components: {
    Footer,
    NavBar,
    Header
  },
  data() {
    return {
      basket: [],
      products: [],
      isLoadingProducts: false
    };
  },
  computed: {
    basketCapacity() {
      let capacity = 0;
      for (let product of this.basket) {
        capacity += product.quantity;
      }
      return capacity;
    }
  },
  methods: {
    addToCart(productToAdd) {
      for (let product of this.basket) {
        if (product.id === productToAdd.id) {
          product.quantity += productToAdd.quantity;
          return;
        }
      }
      this.basket.push(productToAdd);
    },
    loadProductsOfCategory(category) {
      this.isLoadingProducts = true;
      let requestURL = `${this.$apiAdress}/products`;

      if (category !== "all") {
        requestURL += `?category=${category}`;
      }

      axios
        .get(requestURL)
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.isLoadingProducts = false;
        });
    }
  }
};
</script>
