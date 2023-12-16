const { request, response } = require("express");
const Cart = require('../models/cart');
const CartItem = require('../models/cartItems');

const GetCart = async(req = request, res = response) => {
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

// const GetCategory = async(req = request, res = response) => {
//     try {
//         const { id } = req.params;

//         const category = await Category.findById(id, {state: true}).populate('user', 'id name email');

//         if(!category){
//             return res.status(400).json({msg: 'Category does not exist'});
//         }
                            
//         res.json(category);
//     } catch (error) {
//         throw new Error(error);
//     }
// }

const PostCart = async(req = request, res = response) => {
    try {
        const { user, product, quantity } = req.body;

        const cart = new Cart(user); 
        await cart.save();

        const cartItem = new CartItem({cart, product, quantity});
        await cartItem.save();

        res.json({cart, cartItem});

    } catch (error) {
        throw new Error(error);
    }
}

const PutCart = async(req = request, res = response) => {
    try {
        const { id: cart } = req.params;
        const { product, quantity } = req.body;

        const cartItem = new CartItem({cart, product, quantity});

        await cartItem.save();

        res.json(cartItem);
    } catch (error) {
        throw new Error(error);
    }

}

// const DeleteCategory = async(req = request, res = response) => {
//     try {
//         const { id } = req.params;

//         const category = await Category.findByIdAndUpdate(id, {state: false}, { new: true });

//         if(!category){
//             return res.status(400).json({msg: 'Category does not exist'});
//         }

//         res.json(category);
//     } catch (error) {
//         throw new Error(error);
//     }

// }

module.exports = {
    PostCart,
    GetCart,
    PutCart
}