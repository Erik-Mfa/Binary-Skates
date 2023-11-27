const categoryModel = require('../models/Category');

class CategoryController{

    async post(req, res){
        let category = req.body;
        const max = await categoryModel.findOne({}).sort({ id: -1 });
        category.id = max == null ? 1 : max.id + 1;

        const result = await categoryModel.create(category);
        res.status(201).json(result);
        console.log(result);
    }

    async update(req, res) {
        const id = req.params.id;
        const _id = String((await categoryModel.findOne({ 'id': id }))._id);
        await categoryModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async find(req, res){
        const result = await categoryModel.find({});
        res.status(200).json(result);
    }

    async findById(req, res) {
        const id = req.params.id;
        const result = await categoryModel.findOne({ 'id': id });
        res.status(200).json(result);
    }

    async delete(req, res) {
        const id = req.params.id;
        const _id = String((await categoryModel.findOne({ 'id': id }))._id);
        await categoryModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new CategoryController;