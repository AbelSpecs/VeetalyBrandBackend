const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Category name is Required'
    },
    status:{
        type: Boolean,
        default: true,
        required: true
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
    },
    products: {
        type: [Schema.Types.ObjectId],
        ref: 'Product'
    }
})

CategorySchema.methods.toJSON = function() {
    const { __v, created, ...category } = this.toObject();
    category.id = category._id;
    delete category._id;

    return category;
}

module.exports = model('Category', CategorySchema);