const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

router.get('/', CategoryController.find);
router.get('/:id', CategoryController.findById);
router.post('/',CategoryController.post);
router.put('/:id',CategoryController.update);
router.delete('/:id',CategoryController.delete);

module.exports = router;