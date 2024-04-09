import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
		type: 'string',
		required: true,
		trim: true,
	},
    price:{
		type: 'number',
		required: true,
		trim: true,
	},
    inStock: {
		type: 'boolean',
		required: true,
		trim: true,
	},
    // Otros campos necesarios
});

const Product = mongoose.model('Product', productSchema);
export default Product;
