const { Schema, model } = require('mongoose');

const CitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    province: {
        type: Schema.Types.ObjectId,
        ref: 'Province',
        required: true
    },
    shipping: {
        type: Number,
        required: true
    },    
    status: {
        type: Boolean,
        default: true,
        required: true
    }
})

CitySchema.methods.toJSON = function() {
    const { __v, created, ...city } = this.toObject();
    city.id = city._id;
    delete city._id;

    return city;
}

module.exports = model('City', CitySchema);