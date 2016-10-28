const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/*', require('../middleware/checkAuth'));
router.use('/seats', require('./seats'));
router.use('/users', require('./users'));

module.exports = router;