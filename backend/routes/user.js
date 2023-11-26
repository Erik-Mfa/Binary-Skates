const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const upload = require('../middlewares/multer');

router.get('/', UserController.find);
router.get('/:id', UserController.findById);
router.post('/', upload.single("image"),UserController.post);
router.put('/:id',UserController.update);
router.delete('/:id',UserController.delete);

module.exports = router;