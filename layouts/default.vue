<template>
  <v-app>
    <v-app-bar :elevation="10" rounded>
      <v-toolbar-title class="text-h4 font-weight-bold">
        <nuxt-link to="/" class="text-decoration-none">Xiver</nuxt-link>
      </v-toolbar-title>
      <div class="d-flex align-center">
        <v-btn class="mr-4" @click="toggleTheme"> {{ theme }}</v-btn>
        <v-btn class="mr-4" variant="outlined" to="/">Главная</v-btn>
        <v-btn class="mr-4" variant="outlined" to="/about">О нас</v-btn>
        <v-btn class="mr-4" variant="outlined" to="/products">Каталог</v-btn>
        <v-btn to="/basket" class="text-none" stacked>
            <v-badge :content="basketStore.productsTotal" color="error">
                <v-icon>mdi-cart-outline</v-icon>
            </v-badge>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>

    <v-footer :elevation="10" rounded>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link.name"
          variant="text"
          class="mx-2"
          rounded="xl"
          :to=link.href
        >
          {{ link.name }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Xiver</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify/lib/framework.mjs';

const basketStore = useBasketStore() //pinia


const themes = useTheme()
let theme = ref(themes.global.current.value.dark ? 'light' : 'dark')

const toggleTheme = () => { 
  themes.global.name.value = themes.global.current.value.dark ? 'light' : 'dark'
  theme = themes.global.current.value.dark ? 'light' : 'dark'
}
const links = [
    { name: 'Главная', href: '/' },
    { name: 'О нас', href: '/about' },
    { name: 'Каталог', href: '/products' },
]
</script>

<style scoped>
.text-decoration-none {
  color: grey;
}

.router-link-exact-active {
  color: #12b488;
}
</style>