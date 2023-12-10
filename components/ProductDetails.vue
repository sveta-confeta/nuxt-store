<template>
  <div class="card-detail">
    <div class="card-detail__img">
      <img :src="product.image" :alt="product.title">
    </div>
    <div class="card-detail__content">
      <h2 class="card-detail__content-title"> {{ product.title }}</h2><br>
      <span class="card-detail__content-price"> {{ product.price }}$</span> <br>
      <h3 class="card-detail__content-text">Product description:</h3>
      <span class="card-detail__content-description">{{ product.description }}</span>
    </div>
  </div>


</template>

<script setup>
const {product} = defineProps(['product'])
</script>

<style lang="scss" scoped>

.card-detail {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 90vh;
  &__img {
    width: 300px;
    height: auto;
    object-fit: cover;
    align-self: center;
    justify-self: center;
    & img {
      width: 100%;
    }
  }
  &__content {
    align-self: center;
    &-title {
      font-size: 37px;
      margin-bottom: 40px;
      font-family: MONOSPACE;
    }
    &-price {
      font-size: 40px;
      display: block;
      color: darkcyan;
      font-family: Arial;
    }
    &-text {
      border-bottom: 1px solid gray;
      margin-bottom: 10px;
      padding-bottom: 10px;
      display: block;
      font-family: MONOSPACE;
    }
    &-description {
      font-family: Arial;
    }
  }
}

</style>