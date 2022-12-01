const router = require("express").Router();
const debug = require("debug");
const netRequest = debug("app:net:Request");
const netReply = debug("app:net:Reply");
const { Course, validateCourse } = require("../models/Course");

router.get("/", async (req, res) => {
  const courses = await Course.find();
  console.log(courses);
  res.send(courses);
});

module.exports = router;
