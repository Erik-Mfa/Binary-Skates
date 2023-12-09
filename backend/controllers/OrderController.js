const orderModel = require('../models/Order');
const userModel = require('../models/User');
const productModel = require('../models/Product');
const auth = require('../middlewares/auth/auth.js');

class OrderController {
    async save(req, res) {
        const order = req.body;
        const max = await orderModel.findOne({}).sort({ id: -1 });
        order.id = max == null ? 1 : max.id + 1;
        
        const user = await userModel.findOne({ id: order.user });
        order.user = user._id;
        

        const product = await productModel.findOne({ id: order.product });
        order.product = product._id;

        const result = await orderModel.create(order);
        
        res.status(201).json(result);
    }

    async find(req, res) {
        const result = await orderModel.find({}).populate('user').populate('product');
        res.status(200).json(result);
    }

    async findById(req, res) {
        const { userId, id } = req.params;
        const result = await orderModel.findOne({ 'id': id, 'userId': userId }).populate('product').populate('user');
        res.status(200).json(result);
    }

    async update(req, res) {
        const id = req.params.id;
        const _id = String((await userModel.findOne({ 'id': id }))._id);
        await userModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async delete(req, res) {
        const id = req.params.id;
        const _id = String((await orderModel.findOne({ 'id': id }))._id);
        await orderModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}


module.exports = new OrderController;