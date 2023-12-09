const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');
const auth = require('../middlewares/auth/auth.js');

router.get('/', OrderController.find);
router.get('/:id',OrderController.findById);
router.post('/', auth.authorise, OrderController.save);
router.put('/:id', OrderController.update);
router.delete('/:id', OrderController.delete);

module.exports = router;