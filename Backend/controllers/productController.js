import Product from "../models/productSchema.js";
import Client from "../models/clientSchema.js";

//Obtiene todos los productos
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Obtiene todos los productos inStock
const getProductsInStock = async(req, res) => {
    try {
        const products = await Product.find({ inStock: true });
        res.status(200).json(products);
    } catch (error) {
		console.log("Error al obtener los productos en stock: ", error.message);
        res.status(500).json({ message: error.message });
    }
};

const createClient = async(req, res) => {
    try {
        const client = await Client.create(req.body);
		const clientSaved = await producto.save()
		res.json(clientSaved);
        res.status(201).json(client);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
	getProducts,
	getProductsInStock,
	createClient
}