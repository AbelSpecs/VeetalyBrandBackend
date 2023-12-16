const { Schema, model } = require('mongoose');

const CartSchema = new Schema({
    purchased:{
        type: Boolean,
        default: false,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

CartSchema.methods.toJSON = function() {
    const { __v, created, ...cart } = this.toObject();
    cart.id = cart._id;
    delete cart._id;

    return cart;
}

module.exports = model('Cart', CartSchema);