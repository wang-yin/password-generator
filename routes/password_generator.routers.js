const express = require('express')
const router = express.Router()
const generatorController = require('../controllers/generator.controllers')

router.get('/', generatorController.home)
router.post('/result', generatorController.result)

module.exports = router;