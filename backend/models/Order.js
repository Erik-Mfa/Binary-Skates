const mongoose = require('mongoose');
const Schema = mongoose.Schema

const orderSchema = new Schema({
    id: Number,
    price: Number,    
    product: {type: mongoose.Types.ObjectId, ref: "product", required: true},
    user: {type: mongoose.Types.ObjectId, ref: "user", required: true},
    datetime: {
        type: Date, 
        required: true
    },
    status: { 
        type: String, 
        default: "Waiting payment"
    }
})

module.exports = mongoose.model('order', orderSchema); 