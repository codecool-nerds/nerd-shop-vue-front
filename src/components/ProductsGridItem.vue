<template>
  <v-card>
    <v-layout row>
      <v-flex>
        <v-img
                :src="imgUrl"
                height="100px"
                width="100px"
                aspect-ratio="1"
        ></v-img>
      </v-flex>
      <v-flex>
        <v-card-title>{{product.name}}</v-card-title>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
    export default {
        name: "ProductsGridItem",
        props: ['product'],
        computed: {
            imgUrl() {
                return this.product.imageURL || "https://picsum.photos/300/300?random";
            }
        }
    }
</script>

<style scoped>

</style>