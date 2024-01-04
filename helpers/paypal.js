const paypal = require('@paypal/checkout-server-sdk');

const createOrder = async (paypalOrder) => {
    const environment = new paypal.core.SandboxEnvironment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET);
    const client = new paypal.core.PayPalHttpClient(environment);

    const request  = new paypal.orders.OrdersCreateRequest();
    request.requestBody(paypalOrder);
     
    const response = await client.execute(request);
    console.log(response);
    return response;
    
};




   


module.exports = createOrder;