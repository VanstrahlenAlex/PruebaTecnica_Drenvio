import Product from '../models/productSchema.js';
import Client from '../models/clientSchema.js';

async function getProductPriceForClient(userId, productName) {
    try {

        const client = await Client.findOne({ userId });
        if (client && client.specialPrices && client.specialPrices.has(productName)) {

            return client.specialPrices.get(productName);
        } else {
            const product = await Product.findOne({ nombre: productName });
            if (product) {

                return product.precio;
            } else {
                throw new Error('El producto no existe');
            }
        }
    } catch (error) {
        throw new Error('Error al obtener el precio del producto para el cliente');
    }
}

export default {
    getProductPriceForClient
};
