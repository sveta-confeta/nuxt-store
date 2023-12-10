import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
    state: () => ({
        cart: [],
    }),
    // добавление товаров в корзину: в параметрах обьект и колличество. В обьекте передаем информацию о продукте
    actions: {
        addToCart(product, count) {
            const cartIndex = this.cart.findIndex((el) => el.id === product.id);
            if (cartIndex === -1) {
                this.cart.push({ ...product, count });
            }
        },
    },
});