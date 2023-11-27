const productModel = require('../models/Product');

class ProductController{
    async post(req, res){
        try{
            var product = req.body;
            const id = req.body.id;

            if(req.file){
                product.image = req.file.path
            } 
            
            const create = await productModel.create(product);

            const find = await productModel.findOne({ 'id': id });
            const result = await find.save();

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