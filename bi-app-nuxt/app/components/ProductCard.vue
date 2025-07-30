<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <a href="#" class="group block overflow-hidden">
    <img
        :src="product.imageURL"
        :alt="product.imageAlt"
        class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
    />

    <div class="relative bg-white p-3">
      <h3
          class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
      >
        {{ product.name }}
      </h3>

      <p class="mt-1">
        <span class="tracking-wider text-gray-900 text-lg"> {{ product.price }} KZT </span>
      </p>

    </div>
  </a>
</template>

<style scoped>

</style>