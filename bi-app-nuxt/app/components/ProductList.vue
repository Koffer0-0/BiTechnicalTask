<script setup lang="ts">

import ProductCard from "./ProductCard.vue";
import FilterPanel from "./FilterPanel.vue";

const { products, handleFetchProducts } = useProduct()
const filteredProducts = ref([])

onMounted(() => {
  initList()
})

async function initList() {
  await handleFetchProducts()
  filteredProducts.value = [...products.value]
}

const handleFilterChange = (newFilteredList: any[]) => {
  filteredProducts.value = newFilteredList
}
</script>

<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Catalog</h2>

        <p class="mt-4 max-w-md text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
          dicta incidunt est ipsam, officia dolor fugit natus?
        </p>
      </header>

      <div class="mt-8 block lg:hidden">
        <button
            class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
        >
          <span class="text-sm font-medium"> Filters & Sorting </span>

          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4 rtl:rotate-180"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div class="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
        <FilterPanel :products="products"
                     @filter-change="handleFilterChange"
        />
        <div class="lg:col-span-3">
          <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="product in filteredProducts" :key="product.id">
              <ProductCard :product="product" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>