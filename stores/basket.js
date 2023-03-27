import { defineStore } from "pinia"

export const useBasketStore = defineStore("basket", {
    state: () => ({  
        basketContent: [],
        quantity: 0
    }),
    getters: {
        productsTotal() {
            return this.basketContent.length
        },
        getProducts() {
            return this.basketContent
        }
    },
    actions: {
        add(product) {
            if(product) {
                this.basketContent.push(product);
                this.quantity+1;
            }
        }
    }

})