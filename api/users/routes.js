var router = require('express').Router();
var controller = require('./controller');

router.get('/', controller.show)
router.post('/', controller.create)
router.get('/:id', controller.showOne)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)
