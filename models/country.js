const { Schema, model } = require('mongoose');

const CountrySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    }
})

CountrySchema.methods.toJSON = function() {
    const { __v, created, ...country } = this.toObject();
    country.id = country._id;
    delete country._id;

    return country;
}

module.exports = model('Country', CountrySchema);