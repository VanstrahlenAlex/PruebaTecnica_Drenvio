import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
	userId: {
		type: 'string',
		required: true,
		trim: true,
	},
	userName: {
		type:'string',
		required: true,
		trim: true,
	},
	email: {
		type:'string',
		required: true,
		trim: true,
	},
	tel: {
		type: 'number',
		required: true,
		trim: true,
	},
	specialPrices: {
        type: Map,
        of: Number
    }
})

const Client = mongoose.model('Clients', clientSchema);
export default Client;