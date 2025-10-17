const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

router.get('/', siteController.index);
router.get('/formulario', siteController.formulario);
router.get('/usuario', siteController.usuario);
router.post('/saudacao', siteController.saudacao);

module.exports = router;
