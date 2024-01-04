const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: {
        type: [Schema.Types.ObjectId],
        ref: 'Product',
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: 'Address',
        required: true
    },
    currency: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    paymentMethod:{
        type: String,
        required: true,
    },
    paypalId: {
        type: String
    },
    trackingNumber: {
        type: String
    },
    comments: {
        type: String    
    }
})

OrderSchema.methods.toJSON = function() {
    const { __v, created, ...order } = this.toObject();
    order.id = order._id;
    delete order._id;

    return order;
}

module.exports = model('Order', OrderSchema);