const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const Schema = mongoose.Schema

const userSchema = new Schema({
    id: Number,
    name: String,    
    phone: Number,
    adress: String,
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    image: {
        type: String
    },
    level: {
      type: String  ,
      required: true
    },
    registerDate: {
        type: Date,
        default: Date.now
    },
    token: {
        type: String,
        select: false
    }
})

userSchema.pre('save', async function (next) {
    const hash = await bcryptjs.hash(this.password, 10);
    this.password = hash;
    next();
  });

module.exports = mongoose.model('users', userSchema);