const { Router } = require('express');
const { CreateUser } = require('../controllers/user.controllers');

const router = Router();

router.post('/', CreateUser);

module.exports = router;