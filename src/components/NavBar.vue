<template>
  <v-container class="dupa">
    <v-layout align-start justify-space-around row>
      <v-flex v-for="(category, i) in categories"
              :key="i">
        <v-btn
               block
               @click="selectCategory(category)"
        >{{ category }}</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
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