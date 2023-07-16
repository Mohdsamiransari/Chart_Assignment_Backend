const express = require('express');
const router = express.Router();

const {getProduct} = require('../controllers/productControllers')

router.route('/product').get(getProduct)

module.exports = router