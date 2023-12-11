<template>
  <div class="products-list__item">
    <NuxtLink :to="`/furniture/${product.id}`">
      <img :src="product.img" class="products-list__item-img" :alt="product.title">
      <h4 class="products-list__item-title">{{ product.title }}</h4>
      <span class="products-list__item-price">£{{ product.price }}</span>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type:Object,
    required: true,
  }
});
</script>

<style lang="scss" scoped>
.products-list__item {
  &-img {
    margin-bottom: 24px;
    object-fit: cover;
  }

  &-title {
    margin-bottom: 8px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    color:#2A254B;
  }

  &-price {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color:#2A254B;
  }
}
</style>