const mongoose = require("mongoose");
const Joi = require("joi");

const Costumer = mongoose.model(
  "Costumer",
  new mongoose.Schema({
    name: { type: String, required: true },
    id: { type: String },
    email: { type: String },
    phone: { type: String },
  })
);

const validateCostumer = (costumer) => {
  const schema = { name: Joi.string().min() };
  return Joi.validate(costumer, schema);
};

exports.Costumer = Costumer;
exports.validateCostumer = validateCostumer;
