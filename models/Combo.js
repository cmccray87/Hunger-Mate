const { Schema, model } = require('mongoose');

const ComboSchema = new Schema({
    orderName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    selection: []
  });

// create the combo order using the ComboSchema
const Combo = model('Combo', ComboSchema);

// export the Combo model
module.exports = Combo;