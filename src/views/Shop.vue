<template>
  <div>
    <h1>{{ selectedCategory }}</h1>
  </div>
</template>

<script>
    export default {
        name: "Shop",
        props: [
            'selectedCategory'
        ]
    }
</script>

<style scoped>

</style>