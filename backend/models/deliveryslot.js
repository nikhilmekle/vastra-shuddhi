const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define a schema for the delivery slot
const DeliverySlotSchema = new Schema({
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    maxCapacity: {
        type: Number,
        required: true,
        default: 15 // Default maximum capacity for each slot
    },
    scheduledDeliveries: {
        type: Number,
        default: 0 // Initially, there are no scheduled deliveries
    }
});

// Create a model for the delivery slot using the DeliverySlotSchema
const DeliverySlot = mongoose.model('DeliverySlot', DeliverySlotSchema);

module.exports = DeliverySlot;
