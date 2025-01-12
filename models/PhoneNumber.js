const mongoose = require('mongoose');

const PhoneNumberSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['business', 'personal'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    features: [{
        type: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('PhoneNumber', PhoneNumberSchema);
