const express = require('express');
const evaluateController = require('../controllers/evaluateController');

const router = express.Router();

// POST /api/v1/easemotionomegaplatform/evaluate
router.post('/easemotionomegaplatform/evaluate', evaluateController.evaluateFrontend);

module.exports = router;
