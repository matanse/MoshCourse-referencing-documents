const mongoose = require("mongoose");
const Joi = require("joi");

const Author = mongoose.model(
  "Author",
  new mongoose.Schema({
    name: { type: String, required: true },
    id: { type: String },
    bio: { type: String },
    website: { type: String },
  })
);

const validateAuthor = (author) => {
  const schema = { name: Joi.string().min() };
  return Joi.validate(author, schema);
};

exports.Author = Author;
exports.validateAuthor = validateAuthor;
