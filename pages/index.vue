<template>
    <v-container>
        <v-row>
            <v-col cols="2">
                <v-btn v-for="cat in categories" variant="flat" color="indigo" 
                block style="margin-top: 5px;"
                @click="funcBtn(cat)"
                >
                    {{ cat }}
                </v-btn>
            </v-col>
            <v-col>
                <v-row>
                    <v-col v-for="product in products" :key="product.id" sm="6" md="4">
                        <ProductCard :product="product" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import ProductCard from '~~/components/ProductCard.vue'
const { data: categories } = await useFetch('https://dummyjson.com/products/categories')

const basketStore = useBasketStore()

const cat = ref("smartphones")
const funcBtn = (x)=>{ 
    cat.value = x
}
const url = computed(() =>
 `https://dummyjson.com/products/category/${cat.value}`
)
const { data: products } = await useFetch(url,{
transform:(_data) => _data.products,
})
</script>

<style>

</style>