const express = require('express');
const router = express.Router();

const productoController = require('../controllers/productoController');

router.get('/', productoController.rubro0);
router.get('/plast', productoController.rubro0);
router.get('/plast/:id', productoController.rubro);
router.get('/rubro', productoController.rubro);
router.get('/rubro/:id', productoController.rubro);
router.get('/plast/rubro/:id', productoController.rubro);

router.get('/producto', productoController.list1);
router.get('/producto/:id', productoController.list);
router.get('/plast/producto/:id', productoController.list);

router.get('/snippet', productoController.list3);
router.get('/snippet/:id', productoController.list2);
router.get('/plast/snippet/:id', productoController.list2);

/* router.get('/promo', productoController.promo1);
router.get('/promo/:id', productoController.promo);
router.get('/plast/promo/:id', productoController.promo); */

module.exports = router;
