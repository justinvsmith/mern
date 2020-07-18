const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            'Please enter a title'
        ]
    },
    price: {
        type: String,
        required: [
            true,
            'Please provide a price'
        ]
    },
    description: {
        type: String,
        required: [
            true,
            'Please provide a description of the prodcuct'
        ]
    }
}, {
    timestamps: true
})

module.exports.Product = mongoose.model('Product', ProductSchema);