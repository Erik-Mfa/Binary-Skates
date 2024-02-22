const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const upload = require('../middlewares/multer');

router.get('/', ProductController.find);
router.get('/:id', ProductController.findById);
router.post('/', upload.single("image") ,ProductController.post);
router.put('/:id',ProductController.update);
router.delete('/:id',ProductController.delete);

module.exports = router;