const router = require('express').Router();
const comboRoutes = require('./combo-routes');

// add prefix of `/combo` to routes created in `combo-routes.js`
router.use('/combo', comboRoutes);

module.exports = router;