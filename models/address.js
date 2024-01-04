const { Schema, model } = require('mongoose');

const AddressSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: Schema.Types.ObjectId,
        ref: 'Country',
    },
    province: {
        type: Schema.Types.ObjectId,
        ref: 'Province',
        required: true
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'City',
        required: true
    },
    phone: {
        type: String,
        required: true   
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status:{
        type: Boolean,
        default: true,
        required: true
    },

})

AddressSchema.methods.toJSON = function() {
    const { __v, created, ...address } = this.toObject();
    address.id = address._id;
    delete address._id;

    return address;
}

module.exports = model('Address', AddressSchema);