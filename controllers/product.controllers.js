const { request, response } = require("express");
const Product = require('../models/product');

const GetProducts = async(req = request, res = response) => {
    try {
        const products = await Product.find().populate('ingredients', '-_id name')
                                            .populate('boxTypes', '-__v');
        res.json(products);
    } catch (error) {
        throw new Error(error);
    }
}

const PostProduct = async(req = request, res = response) => {
    try {
        const product = new Product(req.body);
        
        await product.save();
        res.json(product);

    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    PostProduct,
    GetProducts
}