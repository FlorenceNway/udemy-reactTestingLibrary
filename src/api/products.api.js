import api from './api';

const productsApi = {
    getProducts: async() => {
        const response = await api.get('/products')
        console.log(response)
        return response.data;
    },
    postProducts: async(values) => {
        const response = await api.post('/products',values)
        return response.data;
    },
    updateProducts: async(id, values) => {
        const response = await api.patch(`/products/${id}`, values)
        return response.data;
    },
    deleteProducts: async(id) => {
        const response = await api.delete(`/products/${id}`)
        return response.data;
    }
}

export default productsApi;