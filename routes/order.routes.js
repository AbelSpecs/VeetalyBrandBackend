const { Router } = require('express');
const { 
        PostOrder, 
        GetOrders, 
        GetOrderById,  
        // PutOrder, 
        // DeleteOrder 
    } = require('../controllers/order.controllers');


const router = Router();

router.get('/', GetOrders);
router.get('/:id', GetOrderById);
router.post('/', PostOrder);
// router.post('/:id', PutOrder);
// router.post('/:id', DeleteOrder);

module.exports = router;