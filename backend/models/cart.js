const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the user
        required: true
    },
    items: [{
        serviceId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service', // Reference to the service
            required: true
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        itemId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        quantity: {
            type: Number,
            default: 0 // Default quantity set to 0
        }
    }]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
