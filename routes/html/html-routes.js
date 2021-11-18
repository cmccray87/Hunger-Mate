const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/combo-list.html'));
});

router.get('/add-combo', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/add-combo.html'));
});

router.get('/combo', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/combo.html'));
});

module.exports = router;
