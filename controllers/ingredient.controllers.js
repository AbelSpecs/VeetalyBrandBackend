const { request, response } = require("express");
const Ingredient = require('../models/ingredient');

const GetIngredients = async(req = request, res = response) => {
    try {
        const { limit = 5 } = req.query;
        
        const [ingredients, total] = await Promise.all([
            Ingredient.find({state: true}).limit(Number(limit)).populate('user', 'id name email'),
            Ingredient.countDocuments()
        ]) 
                            
        res.json({total, ingredients});
    } catch (error) {
        throw new Error(error);
    }
}

const GetIngredient = async(req = request, res = response) => {
    try {
        const { id } = req.params;

        const ingredient = await ingredient.findById(id, {state: true}).populate('user', 'id name email');

        if(!ingredient){
            return res.status(400).json({msg: 'Ingredient does not exist'});
        }
                            
        res.json(ingredient);
    } catch (error) {
        throw new Error(error);
    }
}

const PostIngredient = async(req = request, res = response) => {
    try {

        const ingredientName = req.body.name;
        const ingredientExist = await Ingredient.findOne({name : ingredientName});

        if(ingredientExist){
            return res.status(400).json({msg: 'Ingredient already exist'});
        }

        const { name, user } = req.body;
        const ingredient = new Ingredient({name, user}); 

        await ingredient.save();
        res.json(ingredient);

    } catch (error) {
        throw new Error(error);
    }
}

const PutIngredient = async(req = request, res = response) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const ingredient = await Ingredient.findByIdAndUpdate(id, {name: name}, { new: true });

        if(!ingredient){
            return res.status(400).json({msg: 'Ingredient does not exist'});
        }

        res.json(ingredient);
    } catch (error) {
        throw new Error(error);
    }

}

const DeleteIngredient = async(req = request, res = response) => {
    try {
        const { id } = req.params;

        const ingredient = await Ingredient.findByIdAndUpdate(id, {state: false}, { new: true });

        if(!ingredient){
            return res.status(400).json({msg: 'Ingredient does not exist'});
        }

        res.json(ingredient);
    } catch (error) {
        throw new Error(error);
    }

}

module.exports = {
    PostIngredient,
    GetIngredients,
    GetIngredient,
    PutIngredient,
    DeleteIngredient
}