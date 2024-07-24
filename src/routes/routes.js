const {Router} = require('express');
const router = Router();

const {getEstacionamiento} = require('../controller/index.controller');

router.get('/estacionamiento', getEstacionamiento);

module.exports = router;