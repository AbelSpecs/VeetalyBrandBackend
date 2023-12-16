const { Schema, model } = require('mongoose');

const CartItemSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'Cart',
        required: true
    }, 
    askedQuantity: {
        type: Number,
        default: 1,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

CartItemSchema.methods.toJSON = function() {
    const { __v, created, ...cartItem } = this.toObject();
    cartItem.id = cartItem._id;
    delete cartItem._id;

    return cartItem;
}

module.exports = model('CartItem', CartItemSchema);