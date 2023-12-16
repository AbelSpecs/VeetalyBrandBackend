const { Router } = require("express");
const { PostCategory, GetCategories, GetCategory, PutCategory, DeleteCategory } = require("../controllers/category.controllers");

const router = Router();


router.get('/:id', GetCategory);
router.get('/', GetCategories);
router.post('/', PostCategory);
router.put('/:id', PutCategory);
router.delete('/:id', DeleteCategory);


module.exports = router;