<template>
  <v-layout>
    <v-btn v-for="category in categories"
           block
           @click="selectCategory(category)"
    >{{ category }}</v-btn>
  </v-layout>
</template>

<script>
    export default {
        name: "NavBar",
        data: () => ({
            categories: ['GAME', 'MOUSE', 'KEYBOARD', 'HEADSET', 'OTHER']
        }),
        methods: {
            selectCategory(category) {
                this.$emit('categoryChosen', category);
                this.$router.push('/shop');
            }
        }
    }
</script>

<style scoped>

</style>