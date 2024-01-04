const { Schema, model } = require('mongoose');

const OrderDetailSchema = new Schema({
    askedQuantity: {
        type: Number,
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    }
})

OrderDetailSchema.methods.toJSON = function() {
    const { __v, created, ...orderDetail } = this.toObject();
    orderDetail.id = orderDetail._id;
    delete orderDetail._id;

    return orderDetail;
}

module.exports = model('OrderDetail', OrderDetailSchema);