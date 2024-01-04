const { Schema, model } = require('mongoose');

const IngredientSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Ingredient is Required'
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

IngredientSchema.methods.toJSON = function() {
    const { __v, created, ...ingredient } = this.toObject();
    ingredient.id = ingredient._id;
    delete ingredient._id;

    return ingredient;
}

module.exports = model('Ingredient', IngredientSchema);