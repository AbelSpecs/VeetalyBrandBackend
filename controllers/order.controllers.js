const { request, response } = require("express");
const paypal = require('@paypal/checkout-server-sdk');
const Order = require('../models/order');
const OrderDetail = require("../models/orderDetail");
const Address = require("../models/address");
const createOrder = require("../helpers/paypal");

const GetOrders = async(req = request, res = response) => {
    try {
        
        const orders = await Order.find({status: true});
                            
        res.json(orders);
    } catch (error) {
        throw new Error(error);
    }
}

const GetOrderById = async(req = request, res = response) => {
    try {
        const { id } = req.params;

        const order = await Order.findById(id, {status: true});

        if(!order){
            return res.status(400).json({msg: 'Order does not exist'});
        }
                            
        res.json(order);
    } catch (error) {
        throw new Error(error);
    }
}

const PostOrder = async(req = request, res = response) => {
    try {

        // const { user, products, address, total, paymentMethod } = req.body;

        const paypalOrder = req.body;
        console.log(req.body);

        const paypalId = await createOrder(paypalOrder);
        // console.log(paypalId);

        // const newAddress = new Address(address);
        // await newAddress.save();

        // const order = new Order({user, products, newAddress, total, paymentMethod}); 
        // await order.save();

        // products.forEach(async (item) => {
        //     const askedQuantity = item.askedQuantity;
        //     const product = item.product;
        //     const detail = new OrderDetail({askedQuantity, product, order});
        //     await detail.save();
        // });

        // res.json(paypalId);
        res.json(paypalId)

    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    PostOrder,
    GetOrders,
    GetOrderById
}