const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
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
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'completed'],
        default: 'pending'
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
