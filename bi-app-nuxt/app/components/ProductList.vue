<script setup lang="ts">

import ProductCard from "./ProductCard.vue";
import FilterPanel from "./FilterPanel.vue";

const products = ref([
  {
    id: 1,
    name: "Regular Fit Stripe Wicking Polo",
    imageURL: "https://shoptommy.scene7.com/is/image/ShopTommy/XW04387_DW5_main?wid=1487&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    imageAlt: "",
    price: 1000,
  },
  {
    id: 2,
    name: "Embroidered Tommy Logo T-Shirt\n",
    imageURL: "https://shoptommy.scene7.com/is/image/ShopTommy/78J6318_P8F_alternate1?wid=428&hei=564&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    imageAlt: "",
    price: 2300,
  },
  {
    id: 3,
    name: "Patch Pocket Classic 5\" Short\n",
    imageURL: "https://shoptommy.scene7.com/is/image/ShopTommy/XW05230_8KB_main?wid=1487&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    imageAlt: "",
    price: 1020,
  },
  {
    id: 4,
    name: "Everyday T-Shirt",
    imageURL: "https://shoptommy.scene7.com/is/image/ShopTommy/XW05857_1AA_main?wid=1487&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    imageAlt: "",
    price: 10110,
  },
  {
    id: 5,
    name: "Short-Sleeve Gold-Button Dress\n",
    imageURL: "https://shoptommy.scene7.com/is/image/ShopTommy/XW04356_YBL_main?wid=1487&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    imageAlt: "",
    price: 30000,
  },
  {
    id: 6,
    name: "Belted Chambray Midi Shirtdress\n",
    imageURL: "https://shoptommy.scene7.com/is/image/ShopTommy/78J9397_YBR_main?wid=1487&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    imageAlt: "",
    price: 11100,
  },
  {
    id: 7,
    name: "High-Rise Classic Straight Jean\n",
    imageURL: "https://shoptommy.scene7.com/is/image/ShopTommy/78JA560_100_main?wid=1487&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    imageAlt: "",
    price: 1300,
  },
  {
    id: 8,
    name: "Cable Knit Cardigan\n",
    imageURL: "https://shoptommy.scene7.com/is/image/ShopTommy/XM04543_L8Q_main?wid=1487&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    price: 42300,
  },

onMounted(() => {
  handleFetchProducts()
})
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
        <FilterPanel :products="products"/>

        <div class="lg:col-span-3">
          <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="product in products" :key="product.id">
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