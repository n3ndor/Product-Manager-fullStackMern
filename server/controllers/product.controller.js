const Product = require("../models/product.model");

module.exports = {

    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => console.log(err));
    },

    getAllProducts: (req, res) => {
        Product.find({})
            .then(allProducts => {
                res.json(allProducts);
            })
            .catch(err => {
                console.log(err)
            })
    },

    getOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then((oneProduct) => {
                console.log(oneProduct);
                res.json(oneProduct);
            })
    },

    updateProduct: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(updateProduct => res.json(updateProduct))
            .catch(err => res.json(err))
    },

    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.json(err))
    }

}
