const { Schema, model } = require('mongoose');

const ProvinceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: Schema.Types.ObjectId,
        ref: 'Country',
        required: true
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    }
})

ProvinceSchema.methods.toJSON = function() {
    const { __v, created, ...province } = this.toObject();
    province.id = province._id;
    delete province._id;

    return province;
}

module.exports = model('Province', ProvinceSchema);