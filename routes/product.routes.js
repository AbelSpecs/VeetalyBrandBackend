const { Router } = require("express");
const { GetProducts, PostProduct } = require("../controllers/product.controllers");

const router = Router();


router.get('/', GetProducts);
router.post('/', PostProduct);


module.exports = router;