<template>
      <v-card width="25vw">
        <v-img
                :src="imgUrl"
                height="300px"
        >
          <v-container
            fill-height
            fluid
            pa-2
          >
            <v-layout fill-height>
              <v-flex>
                <span class="headline pa-1 grey--text text--lighten-3 elevation-5"
                      style="text-shadow: 0px 0px 4px rgba(0, 0, 0, 1);"
                      v-text="product.name"></span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title style="position: relative;">
          <v-btn
                  v-if="displayMode === 'shop'"
                  fab
                  color="orange"
                  class="white--text"
                  top
                  right
                  absolute
                  @click="addProductToCart"
                  :disabled="this.product.quantity < 1"
          >
            <v-icon>shopping_cart</v-icon>
          </v-btn>
          <div>
            <span class="grey--text text--darken-1">Category: {{ product.category.toLowerCase() }}</span><br>
            <v-divider light></v-divider>
            <span v-if="displayMode==='shop'">Price: <strong>{{ product.price.toFixed(2) }} zł</strong></span>
            <span v-else>Price: <strong>{{ this.priceOfAllItems.toFixed(2) }} zł</strong> ({{ this.product.price.toFixed(2) }} zł each)</span><br>
            <span v-if="displayMode==='shop'">Available: <strong :class="`${availabilityColor}--text`">{{ available }}</strong></span>
            <span v-else>Quantity: <strong>{{ this.product.quantity }}</strong></span><br>
          </div>
        </v-card-title>
        <v-card-text>
          <span>{{ this.description }}</span>
        </v-card-text>

      </v-card>
</template>

<script>
    export default {
        name: "ProductsGridItem",
        props: ['displayMode', 'product'],
        computed: {
            imgUrl() {
                return this.product.imageURL || "https://picsum.photos/300/300?random";
            },
            description() {
                return this.product.description || "No description added.";
            },
            available() {
                return this.product.quantity > 0 ? "yes" : "no";
            },
            availabilityColor() {
              return this.available==='yes' ? "green" : "red";
            },
            priceOfAllItems() {
                return this.product.quantity * this.product.price;
            }
        },
        methods: {
            addProductToCart(){
                let productToAdd = Object.assign({}, this.product);
                productToAdd.quantity = 1;
                this.$emit('addToCart', productToAdd);
            }
        }
    }
</script>

<style scoped>

</style>