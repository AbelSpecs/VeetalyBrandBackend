const { Schema, model } = require('mongoose');

const BoxSchema = new Schema({
    units: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
        required: true
    },
    price: {
        type: Number,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    shortDescription: {
        type: String,
        trim: true,
        required: true
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    }
})

BoxSchema.methods.toJSON = function() {
    const { __v, created, ...box } = this.toObject();
    box.id = box._id;
    delete box._id;

    return box;
}

module.exports = model('Box', BoxSchema);