const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define a schema for items
const itemSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},

});

// Define a schema for categories
const categorySchema = new Schema({
	name: {
		type: String,
		required: true
	},
	items: [itemSchema], // Embed itemSchema inside categorySchema
	// Add other required fields as needed
});

// Define a schema for services
const serviceSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	categories: [categorySchema], // Embed categorySchema inside serviceSchema
	// Add other required fields as needed
});

// Create a model for services using the serviceSchema
const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
