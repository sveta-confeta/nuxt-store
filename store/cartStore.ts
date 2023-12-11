import { defineStore } from "pinia";

export interface ProductThingsType {
    id:string,
    title:string,
    description:string,
    category:string,
    image: string,
    rating:RaitingType

}

type RaitingType ={
    rate: number,
    count:number,
}

export const useCartStore = defineStore("cartStore", {
    state: () => ({
        cart: []  as ProductThingsType[],
    }),
    // добавление товаров в корзину: в параметрах обьект и колличество. В обьекте передаем информацию о продукте
    actions: {
        addToCart(product:ProductThingsType, count:number) {
            const cartIndex = this.cart.findIndex((el) => el.id === product.id);
            if (cartIndex === -1) {
                // @ts-ignore
                this.cart.push({ ...product, count});
            }
        },
    },
});