const { Router } = require('express');
const { 
        PostBox, 
    } = require('../controllers/box.controllers');


const router = Router();

// router.get('/', GetCountries);
// router.get('/:id', GetCountryById);
// router.get('/:name', GetCountryByName);
router.post('/', PostBox);
// router.put('/:id', PutCountry);
// router.delete('/:id', DeleteCountry);

module.exports = router;