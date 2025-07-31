<script setup lang="ts">

defineProps({
  products: Array
})

const minPrice = ref('')
const maxPrice = ref('')
const searchQuery = ref('')
const sortOption = ref('');

const {
  products,
  handleFetchProducts,
  filterProducts,
  searchProducts,
} = useProduct()

const resetFilters = async () => {
  minPrice.value = '';
  maxPrice.value = '';
  searchQuery.value = '';
};

async function applySort() {
  if (!sortOption.value) return;
  const [sortByRaw, orderRaw] = sortOption.value.split(',');
  const sortBy = sortByRaw.trim().toLowerCase();
  const order = orderRaw.trim().toLowerCase();

  await filterProducts({
    minPrice: minPrice.value,
    maxPrice: maxPrice.value,
    sortBy,
    order,
    search: searchQuery.value,
  });
}

watch([minPrice, maxPrice], ([newMin, newMax]) => {
  setTimeout(async () => {
    await filterProducts({
      minPrice: newMin,
      maxPrice: newMax,
      sortBy: sortOption.value?.split(',')[0]?.trim().toLowerCase(),
      order: sortOption.value?.split(',')[1]?.trim().toLowerCase(),
      search: searchQuery.value,
    });
  }, 500);
});

watch(searchQuery, (newSearch) => {
  setTimeout(async () => {
    await filterProducts({
      minPrice: minPrice.value,
      maxPrice: maxPrice.value,
      sortBy: sortOption.value?.split(',')[0]?.trim().toLowerCase(),
      order: sortOption.value?.split(',')[1]?.trim().toLowerCase(),
      search: newSearch,
    });
  }, 500);
});

</script>

<template>
  <div class="hidden space-y-4 lg:block">
    <label
        for="productSearch"
        class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <input
          type="email"
          id="productSearch"
          placeholder="search"
          v-model="searchQuery"
          class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
      />

      <span class="flex absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
               <span class="ml-2">
                Search Product
              </span>
            </span>
    </label>
    <div>
      <label for="SortBy" class="block text-xs font-medium text-gray-700"> Sort By </label>

      <select id="SortBy" class="h-10 rounded border-gray-300 text-sm" v-model="sortOption" @change="applySort">
        <option>Sort By</option>
        <option value="Title, DESC">Title, DESC</option>
        <option value="Title, ASC">Title, ASC</option>
        <option value="Price, DESC">Price, DESC</option>
        <option value="Price, ASC">Price, ASC</option>
      </select>
    </div>

    <div>
      <p class="block text-xs font-medium text-gray-700">Filters</p>

      <div class="mt-1 space-y-2">
        <details
            class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary
              class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
          >
            <span class="text-sm font-medium"> Price </span>

            <span class="transition group-open:-rotate-180">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-4 w-4"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
          </summary>

          <div class="border-t border-gray-200 bg-white">
            <div class="border-t border-gray-200 p-4">
              <div class="flex justify-between gap-4">
                <label for="FilterPriceFrom" class="flex items-center gap-2">
                  <input
                      type="number"
                      id="FilterPriceFrom"
                      placeholder="From"
                      v-model="minPrice"
                      class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                  <span class="text-sm text-gray-600">KZT</span>
                </label>

                <label for="FilterPriceTo" class="flex items-center gap-2">
                  <input
                      type="number"
                      id="FilterPriceTo"
                      placeholder="To"
                      v-model="maxPrice"
                      class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                  <span class="text-sm text-gray-600">KZT</span>
                </label>
              </div>
              <header class="flex items-center justify-between p-4">
                <button type="button" class="text-sm text-gray-900 underline underline-offset-4"
                        @click="resetFilters">
                  Reset
                </button>
              </header>
            </div>
          </div>
        </details>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>