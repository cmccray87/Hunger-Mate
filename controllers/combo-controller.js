const { Combo } = require('../models');

const comboController = {
    // GET /api/combo
    // get all combo orders
    getAllCombo(req, res) {
      Combo.find({})
        .then(dbComboData => res.json(dbComboData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
    // GET /api/combo/:id
    // get one combo order by id
    getComboById({ params }, res) {
      Combo.findOne({ _id: params.id })
        .then(dbComboData => {
          // If no combo order is found, send 404
          if (!dbComboData) {
            res.status(404).json({ message: 'No combo order found with this id!' });
            return;
          }
          res.json(dbComboData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
    // POST /api/combo
    // create a combo
    createCombo({ body }, res) {
    Combo.create(body)
      .then(dbComboData => res.json(dbComboData))
      .catch(err => res.status(400).json(err));
    },
    // PUT /api/combo/:id
    // update combo by id
    updateCombo({ params, body }, res) {
    Combo.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then(dbComboData => {
        if (!dbComboData) {
          res.status(404).json({ message: 'No combo order found with this id!' });
          return;
        }
        res.json(dbComboData);
      })
      .catch(err => res.status(400).json(err));
    },
    // DELETE /api/combo/:id
    // delete combo order
    deleteCombo({ params }, res) {
    Combo.findOneAndDelete({ _id: params.id })
      .then(dbComboData => {
        if (!dbComboData) {
          res.status(404).json({ message: 'No combo order found with this id!' });
          return;
        }
        res.json(dbComboData);
      })
      .catch(err => res.status(400).json(err));
  }

};

module.exports = comboController;