

<template>
  <div class="product container">
    <div>
      <img :src="product.image" :alt="product.name" />
    </div>
    <div>
      <h2 class="product-name">{{ product.name }}</h2>
      <span class="product-price">£{{ product.price }}</span>
      <div class="product-block product-description">
        <span class="product-block__title">Product description</span>
        <div v-html="product.description"></div>
      </div>
      <div class="product-block">
        <span class="product-block__title">Dimensions</span>
        <span
            class="product-param"
            v-for="(param, i) of product.params"
            :key="i">
          {{ param.title }}: {{ param.value }}
        </span>
      </div>
      <div class="product-block">
        <span class="product-block__title">Quantity</span>
        <div class="product-quantity">
          <span
              class="product-quantity-symbol"
              @click="changeQuantity('minus')">
            -
          </span>
          <span class="product-quantity-value">{{ quantity }}</span>
          <span class="product-quantity-symbol" @click="changeQuantity('plus')">
            +
          </span>
        </div>
      </div>
      <MyButton type="button" color="primary"  @click="cartStore.addToCart(product, quantity)">
        Add To Cart
      </MyButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {useCartStore} from "../store/cartStore.ts";
const cartStore = useCartStore();


const props = defineProps({
  product: {
    type:Object,
    required: true,
  },
});

const quantity = ref(1);

const changeQuantity = (type) => {
  if (type === "minus") {
    quantity.value === 1 ? (quantity.value = 1) : quantity.value--;
  }
  if (type === "plus") {
    quantity.value === 3 ? (quantity.value = 3) : quantity.value++;
  }
};
</script>

<style lang="scss" scoped>
.product {
  background: var(--lightgray);
  padding: 50px 80px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 500px;
  column-gap: 65px;
  margin-bottom: 65px;
  &-name {
    margin: 0 0 16px 0;
    font-family: var(--clash);
    font-size: 36px;
  }
  &-price {
    display: block;
    font-size: 24px;
    margin-bottom: 28px;
  }
  &-block {
    margin-bottom: 40px;
    &__title {
      display: block;
      font-family: var(--clash);
      margin-bottom: 14px;
    }
  }
  &-description {
    border-top: 1px solid var(--border-grey);
    padding-top: 24px;
  }
  &-param {
    display: block;
  }
  &-quantity {
    background: #fff;
    width: 122px;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    &-symbol {
      color: var(--border-grey);
      cursor: pointer;
    }
  }
}
</style>
