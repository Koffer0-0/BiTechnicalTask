<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const { handleFetchProductById } = useProduct()
const { addToCart } = useCart();
const product = ref({})

onMounted(() => {
  const productId = route.params.id;
  productDetails(productId)
})

const productDetails = async (productId) => {
  const result = await handleFetchProductById(productId)
  product.value = result
}

const handleAddToCart = (product) => {
  addToCart(product)
}
</script>

<template>
  <ProductDetail :product="product" @updateCart="handleAddToCart"/>
</template>

<style scoped>

</style>