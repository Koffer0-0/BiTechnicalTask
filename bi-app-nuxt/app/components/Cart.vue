<script setup lang="ts">
const {
  cartItems,
  removeFromCart,
  updateQuantity,
  clearCart,
  initCart
} = useCart()

onMounted(() => {
  initCart()
})

const isEmpty = computed(() => {
  return cartItems.value.length <= 0
})

const emit = defineEmits(['close'])

const handleClearCart = () => {
  if (confirm('Вы уверены, что хотите очистить корзину?')) {
    clearCart()
  }
}
</script>

<template>
  <div
      class="relative w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
      aria-modal="true"
      role="dialog"
      tabindex="-1"
  >
    <button class="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
            @click="emit('close')"
    >
      <span class="sr-only">Close cart</span>

      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <div v-if="isEmpty" class="text-center py-8">
      <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zM8 6a2 2 0 114 0v1H8V6zm0 3a1 1 0 012 0 1 1 0 11-2 0zm4 0a1 1 0 012 0 1 1 0 11-2 0z" clip-rule="evenodd"></path>
      </svg>
      <p class="text-gray-500">Cart is Empty</p>
    </div>

    <div v-else class="mt-4 space-y-6">
      <ul class="space-y-4">
        <li
            v-for="item in cartItems"
            :key="item.id"
            class="flex items-center gap-4">
          <img
              :src="item.imageURL"
              :alt="item.name"
              class="size-16 rounded-sm object-cover"
          />

          <div class="flex-1">
            <h3 class="text-sm text-gray-900">{{ item.name }}</h3>

            <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
              <div>
                <dt class="inline">Price:</dt>
                <dd class="inline">{{ item.price }}</dd>
              </div>
            </dl>
          </div>

          <div class="flex flex-1 items-center justify-end gap-2">
            <form @submit.prevent>
              <label for="Line1Qty" class="sr-only"> Quantity </label>

              <input
                  :value="item.quantity"
                  @input="updateQuantity(item.id, parseInt($event.target.value) || 1)"
                  type="number"
                  min="1"
                  class="h-8 w-12 rounded-sm border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-hidden [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              />
            </form>

            <button class="text-gray-600 transition hover:text-red-600"
                    @click="removeFromCart(item.id)"
            >
              <span class="sr-only">Remove item</span>

              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </li>

      </ul>

      <div class="space-y-4 text-center">
        <a
            href="#"
            class="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
        >
          Checkout
        </a>
        <button
            @click="handleClearCart"
            class="w-full text-xs text-gray-500 hover:text-red-600 transition-colors"
        >
          Clear cart
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>