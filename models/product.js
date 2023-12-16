const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Product name is Required'
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        trim: true,
        required: 'Price is Required'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    ingredients: {
        type: [Schema.Types.ObjectId],
        ref: 'Ingredient',
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

ProductSchema.methods.toJSON = function() {
    const { __v, created, user, ...product } = this.toObject();
    product.id = product._id;
    delete product._id;

    return product;
}

module.exports = model('Product', ProductSchema);