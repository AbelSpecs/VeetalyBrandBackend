const { Router } = require('express');
const { 
        PostCountry, 
        GetCountries, 
        GetCountryById, 
        GetCountryByName, 
        PutCountry, 
        DeleteCountry 
    } = require('../controllers/country.controllers');


const router = Router();

router.get('/', GetCountries);
router.get('/:id', GetCountryById);
router.get('/:name', GetCountryByName);
router.post('/', PostCountry);
router.put('/:id', PutCountry);
router.delete('/:id', DeleteCountry);

module.exports = router;