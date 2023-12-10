<template>
  <div class="products container">
    <ul class="products-list">
      <li v-for="product of popularProducts" :key="product.id">
      <FurnitureCard :product="product"/>
        </li>
    </ul>
    <MyButton color="lightgray" type="link">
      View collection
    </MyButton>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import api from "./../../server/api/api";


const popularProducts = ref([]);
const loading = ref(true);

onMounted(async () => {
  popularProducts.value = await api.getPopularProducts();
});

</script>

<style lang="scss" scoped>
.products {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  &-list {
    margin-bottom: 48px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  &__link {
    color: var(--gray);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    padding: 16px 32px;
    background:  #F9F9F9;
    margin-bottom: 48px;
    &:hover {
      color:#239a9a;
    }
  }
}

</style>