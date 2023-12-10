<template xmlns="http://www.w3.org/1999/html">
  <div>
<!--    //SEO описание каждой страницы 2 вариант-->
    <Head>
      <Title>Online_store | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"/>
    </Head>
  <ProductDetails :product="product"/>
  </div>
</template>

<script setup lang="ts">
export interface ProductType {
 id:number,
  title:string,
  description:string,
  category:string,
  image: string,
  rating:RaitingType,

}

type RaitingType ={
  rate: number,
  count:120,
}

const { params } = useRoute();//достаем id из url
const id = params?.id;
const uri= `https://fakestoreapi.com/products/${id}`;
const response = await useFetch(uri, { key: id as string });
const product = response.data.value as ProductType[];

if(!product) {
  throw createError({ statusCode:404, statusMessage: 'Product not found'})
}

</script>
<style lang="scss" scoped>

</style>
