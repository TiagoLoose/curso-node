const mongoose = require('mongoose');
const ProductRepository = mongoose.model('product');

module.exports = {
    async index(req, res){
        const {page, limit} = req.query;
        const product = await ProductRepository.paginate({}, {page, limit: 5});

        return res.json(product);
    },

    async show(req, res){
        const product = await ProductRepository.findById(req.params.id);

        return res.json(product);
    },

    async create(req, res){
        const product = await ProductRepository.create(req.body);

        return res.json(product);
    },

    async update(req, res){
        const product = await ProductRepository.findByIdAndUpdate(req.params.id, req.body, { new: true});

        return res.json(product);
    },

    async delete(req, res){
        try{
            await ProductRepository.findByIdAndDelete(req.params.id);
            return res.send();
        }catch(error){
            console.log('ERRO: ');
            console.log(error);
            return res.status(500).send();
        }

    }
}