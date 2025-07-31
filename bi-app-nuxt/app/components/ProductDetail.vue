<script setup>

defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(["updateCart"]);
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
    <div class="hidden lg:block">
    </div>

    <div class="col-span-1 md:col-span-2 lg:col-span-1">
      <a href="#" class="group block">
        <img
            :src="product.imageURL"
            :alt="product.imageAlt"
            class="h-auto w-full object-cover"
        />
      </a>
    </div>

    <div class="col-span-1 md:col-span-2 lg:col-span-1 lg:col-start-3 me-4 border-2 p-4">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">
          {{ product.name }}
        </h2>
        <p class="mt-3 text-sm text-gray-500">
<!--          {{ product.description }}-->
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
          dicta incidunt est ipsam, officia dolor fugit natus?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
          dicta incidunt est ipsam, officia dolor fugit natus?
        </p>
        <p class="mt-3 text-lg font-semibold text-gray-900">
          {{ product.price }} KZT
        </p>
      </div>

      <div class="mt-6">
        <button
            @click="emit('updateCart', product)"
            class="px-6 py-1 bg-teal-600 text-white text-sm font-medium rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
          TO CART
        </button>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>