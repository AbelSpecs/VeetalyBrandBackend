const { Router } = require("express");
const { PostIngredient, GetIngredients, GetIngredient, PutIngredient, DeleteIngredient } = require("../controllers/ingredient.controllers");

const router = Router();


router.get('/:id', GetIngredient);
router.get('/', GetIngredients);
router.post('/', PostIngredient);
router.put('/:id', PutIngredient);
router.delete('/:id', DeleteIngredient);


module.exports = router;