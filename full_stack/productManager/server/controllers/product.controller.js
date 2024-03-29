const { Product } = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({message: 'Hello World!'})
}

module.exports.createProduct = (req, res) => {
    const {title, price, description} = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

module.exports.getOne = (req, res) => {
    Product.findById(req.params.id)
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete({ _id: req.params.id})
        .then(confirmDeletion => res.json(confirmDeletion))
        .catch(err => res.json(err))
}