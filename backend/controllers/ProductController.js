const productModel = require('../models/Product');
const categoryModel = require('../models/Category');

class ProductController{
    async post(req, res){
        try{
            var product = req.body;
            const max = await productModel.findOne({}).sort({ id: -1 });
            product.id = max == null ? 1 : max.id + 1;

            if(req.file){
                product.image = req.file.path
            } 
            
            const category = await categoryModel.findOne({ id: product.category });
            product.category = category._id;

            const result = await productModel.create(product);
            res.status(201).json(result);
        }
        catch(err){
            console.log(err);
        }
    }

    async update(req, res) {
        const id = req.params.id;
        var product = req.body;

        if(req.file){
            product.image = req.file.path
        } 

        const _id = String((await productModel.findOne({ 'id': id }))._id);

        const category = await categoryModel.findOne({ id: product.category });
        product.category = category._id;

        await productModel.findByIdAndUpdate(String(_id), product);
        res.status(200).send();
    }

    async find(req, res){
        const result = await productModel.find({}).populate('category');;
        res.status(200).json(result);
    }

    async findById(req, res) {
        const id = req.params.id;
        const result = await productModel.findOne({ 'id': id });
        res.status(200).json(result);
    }

    async delete(req, res) {
        const id = req.params.id;
        const _id = String((await productModel.findOne({ 'id': id }))._id);
        await productModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new ProductController;