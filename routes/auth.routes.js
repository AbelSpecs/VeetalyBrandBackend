const { Router } = require('express');
const { LoginUser } = require('../controllers/auth.controllers');

const router = Router();

router.post('/', LoginUser);

module.exports = router;