const { Router } = require("express");
const { PostCart, GetCart, PutCart } = require("../controllers/cart.controllers");

const router = Router();


router.get('/:id', GetCart);
router.post('/', PostCart);
router.put('/:id', PutCart);


module.exports = router;