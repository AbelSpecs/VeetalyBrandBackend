const { request, response } = require("express");
const Category = require('../models/category');

const GetCategories = async(req = request, res = response) => {
    try {
        const { limit = 5 } = req.query;
        
        const [categories, total] = await Promise.all([
            Category.find({state: true}).limit(Number(limit)).populate('user', 'id name email'),
            Category.countDocuments()
        ]) 
                            
        res.json({total, categories});
    } catch (error) {
        throw new Error(error);
    }
}

const GetCategory = async(req = request, res = response) => {
    try {
        const { id } = req.params;

        const category = await Category.findById(id, {state: true}).populate('user', 'id name email');

        if(!category){
            return res.status(400).json({msg: 'Category does not exist'});
        }
                            
        res.json(category);
    } catch (error) {
        throw new Error(error);
    }
}

const PostCategory = async(req = request, res = response) => {
    try {

        const categoryName = req.body.name;
        const categoryExist = await Category.findOne({name : categoryName});

        if(categoryExist){
            return res.status(400).json({msg: 'Category already exist'});
        }

        const { name, user } = req.body;
        const category = new Category({name, user}); 

        await category.save();
        res.json(category);

    } catch (error) {
        throw new Error(error);
    }
}

const PutCategory = async(req = request, res = response) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const category = await Category.findByIdAndUpdate(id, {name: name}, { new: true });

        if(!category){
            return res.status(400).json({msg: 'Category does not exist'});
        }

        res.json(category);
    } catch (error) {
        throw new Error(error);
    }

}

const DeleteCategory = async(req = request, res = response) => {
    try {
        const { id } = req.params;

        const category = await Category.findByIdAndUpdate(id, {state: false}, { new: true });

        if(!category){
            return res.status(400).json({msg: 'Category does not exist'});
        }

        res.json(category);
    } catch (error) {
        throw new Error(error);
    }

}

module.exports = {
    PostCategory,
    GetCategories,
    GetCategory,
    PutCategory,
    DeleteCategory
}