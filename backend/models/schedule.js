const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define a schema for the schedule
const ScheduleSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    pickupTime: {
        type: Date,
        required: true
    },
    deliverySlot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DeliverySlot',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create a model for the schedule using the ScheduleSchema
const Schedule = mongoose.model('Schedule', ScheduleSchema);

module.exports = Schedule;
