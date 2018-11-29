const express = require('express');
const router = express.Router();

//route post 
router.post('/', require('./create'));
router.get('/', require('./list'));
router.delete('/:id', require('./remove'));

module.exports = router;