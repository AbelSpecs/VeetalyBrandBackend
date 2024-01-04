const { Router } = require('express');
const { 
        PostCity, 
        GetCities, 
        GetCityById,  
        PutCity, 
        DeleteCity 
    } = require('../controllers/city.controllers');


const router = Router();

router.get('/', GetCities);
router.get('/:id', GetCityById);
router.post('/', PostCity);
router.put('/:id', PutCity);
router.delete('/:id', DeleteCity);

module.exports = router;