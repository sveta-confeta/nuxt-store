<template>
<h1>Одежда</h1>
  <div v-for="p in products">
<ProductCard :product="p"/>
  </div>
</template>

<script setup>
const {data:products} = await useFetch('https://fakestoreapi.com/products');
//SEO описание каждой страницы 1 вариант
useHead({
  title: 'Online_store | Merch',
  meta: [
    {
      name: 'description',
      content: 'Nuxt-3 merch',
    }
  ],
})
</script>

<style scoped>

</style>