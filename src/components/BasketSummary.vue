<template>
  <v-toolbar>
    <v-toolbar-title class="ml-1 mr-3">Basket summary:</v-toolbar-title>
    <span class="subheading mx-auto">Various products: {{ basket.length }}</span>
    <span class="subheading mx-auto">Total count: {{ basketCapacity }}</span>
    <span class="headline ml-auto">Total price: {{ totalPrice.toFixed(2) }} zł</span>
    <v-btn
            color="success"
            class="white--text"
            @click=""
            :disabled="totalPrice === 0"
    >
      <v-icon>shop</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
    export default {
        name: "BasketSummary",
        props: [
            'basket'
        ],
        computed: {
            basketCapacity() {
                let capacity = 0;
                for(let product of this.basket) {
                    capacity += product.quantity;
                }
                return capacity;
            },
            totalPrice() {
                let price = 0;
                for(let product of this.basket) {
                    price += product.price * product.quantity;
                }
                return price;
            }
        }
    }
</script>

<style scoped>

</style>