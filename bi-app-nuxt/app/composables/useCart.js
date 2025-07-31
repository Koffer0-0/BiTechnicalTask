import {ref, watch} from 'vue';
const cartItems = ref([]);

export function useCart() {
    const addToCart = (product) => {
        const existingItem = cartItems.value.find(item => item.id === product.id)

        if (existingItem) {
            existingItem.quantity += 1
        } else {
            cartItems.value.push({
                id: product.id,
                name: product.name,
                price: product.price,
                imageURL: product.imageURL,
                quantity: 1
            })
        }

        saveToLocalStorage()
    }

    function removeFromCart(productId) {
        const index = cartItems.value.findIndex((item) => item.id === productId);
        if (index !== -1) {
            cartItems.value.splice(index, 1);
            saveToLocalStorage()
        }
    }

    function updateQuantity(productId, quantity) {
        const product = cartItems.value.find((item) => item.id === productId);
        if (product) {
            product.quantity = quantity;
            saveToLocalStorage()
        }
    }

    const saveToLocalStorage = () => {
        try {
            localStorage.setItem('cart', JSON.stringify(cartItems.value))
        } catch (error) {
            console.error('Ошибка сохранения корзины в localStorage:', error)
        }
    }

    const loadFromLocalStorage = () => {
        try {
            const saved = localStorage.getItem('cart')
            if (saved) {
                const parsed = JSON.parse(saved)
                // Валидация данных
                if (Array.isArray(parsed)) {
                    cartItems.value = parsed.filter(item =>
                        item &&
                        typeof item.id !== 'undefined' &&
                        typeof item.name === 'string' &&
                        typeof item.price === 'number' &&
                        typeof item.quantity === 'number' &&
                        item.quantity > 0
                    )
                }
            }
        } catch (error) {
            console.error('Ошибка загрузки корзины из localStorage:', error)
            cartItems.value = []
        }
    }

    const clearCart = () => {
        cartItems.value = []
        saveToLocalStorage()
    }

    watch(cartItems, saveToLocalStorage, { deep: true })

    const initCart = () => {
        loadFromLocalStorage()
    }

    return {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        initCart
    }
}