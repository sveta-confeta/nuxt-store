<template>
  <div class="card">
    <div class="card__img">
      <img :src="product.image" :alt="product.title">
    </div>
    <span class="card__title">{{ product.title }}</span>
    <NuxtLink :to="`/things/${product.id}`">
      <span class="card__link">View details</span>
    </NuxtLink>
  </div>

</template>

<script setup>
const {product} = defineProps(['product'])
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;

  &__img {
    width: 300px;
    height: auto;

    img {
      width: 100%;
    }
  }

  &__title {
    display: block;
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #EF4003;
  }
}

</style>