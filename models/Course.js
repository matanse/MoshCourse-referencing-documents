const mongoose = require("mongoose");
const Joi = require("joi");

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: { type: String, required: true },
    id: { type: String },
    author: { type: String },
    price: { type: Number },
  })
);

const validateCourse = (course) => {
  const schema = { name: Joi.string().min() };
  return Joi.validate(course, schema);
};

exports.Course = Course;
exports.validateCourse = validateCourse;
