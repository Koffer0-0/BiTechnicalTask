import {getAllProducts, getFilteredProducts, getProduct, makeSearch} from "../services/api.js";

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

    const searchProducts = async (params) => {
        try {
            const response = await makeSearch(params)
            products.value = response
        } catch (err) {
            console.log(err);
        }
    }
    const filterProducts = async ({
                                      minPrice = '',
                                      maxPrice = '',
                                      sortBy = '',
                                      order = '',
                                      search = ''
                                  } = {}) => {
        try {
            const response = await getFilteredProducts({
                minPrice,
                maxPrice,
                sortBy,
                order,
                search,
            });
            products.value = response;
        } catch (err) {
            console.log(err);
        }
    };

    return {
        products,
        handleFetchProductById,
        handleFetchProducts,
        filterProducts,
        searchProducts,
    }
}