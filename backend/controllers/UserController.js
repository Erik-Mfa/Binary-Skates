const userModel = require('../models/User');
const bcryptjs = require('bcryptjs');
const auth = require('../middlewares/auth/auth.js');

class UserController{

    async post(req, res){
        let user = req.body;
        //generate new id
        const max = await userModel.findOne({}).sort({ id: -1 });
        user.id = max == null ? 1 : max.id + 1;

        if (await userModel.findOne({ 'email': user.email })) {
            res.status(400).send({ error: 'User already exists!' });
        }

        if(req.image){
            user.image = req.image.path
        } 

        const result = await userModel.create(user);
        
        await auth.includeToken(result);
        res.status(201).json(result);
        console.log(result);
        
    }

    async update(req, res) {
        const id = req.params.id;
        const _id = String((await userModel.findOne({ 'id': id }))._id);

        if (req.body.password) {
            const hash = await bcryptjs.hash(String(req.body.password), 10);
            req.body.password = hash;
        }

        await userModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async find(req, res){
        const result = await userModel.find({});
        res.status(200).json(result);
    }

    async findById(req, res) {
        const id = req.params.id;
        const result = await userModel.findOne({ 'id': id });
        res.status(200).json(result);
    }

    async delete(req, res) {
        const id = req.params.id;
        const _id = String((await userModel.findOne({ 'id': id }))._id);
        await userModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new UserController;