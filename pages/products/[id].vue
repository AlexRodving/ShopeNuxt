<template>
  <v-container>
    <h1>{{ product.title }}</h1>
    <v-img :src="product.images[0]" height="264px"></v-img>
    <p>{{ product.description }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.brand }}</p>
  </v-container>
</template>

<script setup>
    const { id } = useRoute().params
    const url = 'https://dummyjson.com/products/' + id

    const { data:product } = await useFetch(url, { key: id })

    definePageMeta({
        layout: 'default'
    })
</script>

<style scoped>

</style>