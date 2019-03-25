<template>
  <v-app>
    <Header
            :basketCapacity="basketCapacity"></Header>
    <NavBar
            @categoryChosen="selectedCategory = $event"
            style="max-height: max-content;"
    ></NavBar>
    <v-content>
      <v-container fluid>
        <router-view :selectedCategory="selectedCategory"
                     :basket="basket"
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
export default {
    name: 'App',
    components: {
        Footer,
        NavBar,
        Header
    },
    data () {
      return {
          selectedCategory: '',
          basket: []
      }
    },
    computed: {
      basketCapacity() {
          let capacity = 0;
          for(let product of this.basket) {
              capacity += product.quantity;
              console.log(product)
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
            this.basket.push(productToAdd)
        }
    }
}
</script>
