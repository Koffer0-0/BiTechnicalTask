<script setup lang="ts">

const displayCart = ref(false)

function showCart() {
  displayCart.value = !displayCart.value
}

</script>

<template>
  <header class="bg-white relative">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <a class="block text-teal-600" href="#">
            <span>Home</span>
          </a>

        </div>
        <div class="relative md:flex md:items-center md:gap-12">
            <button class="border border-teal-600 hover:border-teal-800 rounded-2xl p-1" @click="showCart">
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                   width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
              </svg>
            </button>
          <div
              v-if="displayCart"
              class="absolute right-0 top-full mt-2 z-50 w-96 max-w-[90vw]"
          >
            <Cart @close="displayCart = false" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>