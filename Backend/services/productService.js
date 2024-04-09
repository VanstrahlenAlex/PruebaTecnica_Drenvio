import Product from '../models/productSchema';
import Client from '../models/clientSchema';

async function getProductPriceForClient(userId, productName) {
    try {
        // Paso 1: Buscar el cliente en la base de datos utilizando el userId proporcionado
        const client = await Client.findOne({ userId });

        // Paso 2: Verificar si el cliente tiene un precio especial para el producto especificado
        if (client && client.specialPrices && client.specialPrices.has(productName)) {
            // Paso 3: Si el cliente tiene un precio especial, devolver ese precio
            return client.specialPrices.get(productName);
        } else {
            // Paso 4: Si el cliente no tiene un precio especial, buscar el precio base del producto en la base de datos
            const product = await Product.findOne({ nombre: productName });
            if (product) {
                // Paso 5: Devolver el precio base del producto
                return product.precio;
            } else {
                // Manejar el caso cuando el producto no existe en la base de datos
                throw new Error('El producto no existe');
            }
        }
    } catch (error) {
        // Manejar errores y lanzar excepciones
        throw new Error('Error al obtener el precio del producto para el cliente');
    }
}

exports = {
    getProductPriceForClient
};
