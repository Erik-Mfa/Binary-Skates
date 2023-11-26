const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = new Schema({
    id: Number,
    name: String,    
    description: String,
    price: Number,
    image: {
        type: String
    }

})

module.exports = mongoose.model('product', productSchema); 