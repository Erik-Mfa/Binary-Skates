const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = new Schema({
    id: Number,
    name: String,    
    description: String,
    price: Number,
    category: {type: mongoose.Types.ObjectId, ref: "category"},
    image: {
        type: String
    }

})

module.exports = mongoose.model('product', productSchema); 