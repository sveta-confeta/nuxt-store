
<template>
  <div>
    <!--    //SEO описание каждой страницы 2 вариант-->
    <Head>
      <Title>Online_store | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"/>
    </Head>
    <FurnitureCardDetail :product="product"/>
  </div>
</template>

<script setup>
const route = useRoute();
import api from "./../../server/api/api";
const productId = ref("");
const product = ref({});

onMounted(async () => {
  productId.value = route.params.id;
  product.value = await api.getProduct(productId.value);
  debugger
  if(!product) {
  throw createError({ statusCode:404, statusMessage: 'Product not found'})
}
});


</script>
<style lang="scss" scoped>

</style>
