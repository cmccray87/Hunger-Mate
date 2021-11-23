const router = require('express').Router();

const {
    getAllCombo,
    getComboById,
    createCombo,
    updateCombo,
    deleteCombo
  } = require('../../controllers/combo-controller');

// Set up GET all and POST at /api/combo
router
  .route('/')
  .get(getAllCombo)
  .post(createCombo);

// Set up GET one, PUT, and DELETE at /api/combo/:id
router
  .route('/:id')
  .get(getComboById)
  .put(updateCombo)
  .delete(deleteCombo);

module.exports = router;