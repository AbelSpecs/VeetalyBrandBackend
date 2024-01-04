const { Router } = require('express');
const { 
        PostProvince, 
        GetProvinces, 
        GetProvinceById,  
        PutProvince, 
        DeleteProvince 
    } = require('../controllers/province.controllers');


const router = Router();

router.get('/', GetProvinces);
router.get('/:id', GetProvinceById);
router.post('/', PostProvince);
router.put('/:id', PutProvince);
router.delete('/:id', DeleteProvince);

module.exports = router;