<template>
    <v-container>
        <v-row>
            <v-col v-for="product in products" :key="product.id"  sm="6" md="4">
                <ProductCard :product="product" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import ProductCard from '~/components/ProductCard.vue';
definePageMeta({
    layout: 'default'
})
const { data: products } = await useFetch('https://dummyjson.com/products',{
    transform:(_data) => _data.products,
})


</script>


<style scoped>

</style>