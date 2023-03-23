<template>
    <v-container>
        <v-row>
            <v-col v-for="cat in categories" cols="12" sm="6" md="4">
                <CategoriesCard :cat="cat" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import CategoriesCard from '~~/components/CategoriesCard.vue'
const { data: categories } = await useFetch('https://dummyjson.com/products/categories')
</script>

<style>

</style>