import {getAllProducts, getProduct } from "../services/api.js";

export function useProduct() {
    const products = ref([])

    const handleFetchProducts = async () => {
        try {
            const response =  await getAllProducts()
            products.value = response
        } catch (err) {
            console.log(err);
        }
    }

    const handleFetchProductById = async (id) => {
        try {
            return await getProduct(id)
        } catch (err) {
            console.log(err);
        }
    }

    return {
        products,
        handleFetchProductById,
        handleFetchProducts,
    }
}