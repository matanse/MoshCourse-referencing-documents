const router = require("express").Router();
const debug = require("debug");
const netRequest = debug("app:net:Request");
const netReply = debug("app:net:Reply");
const { Course, validateCourse } = require("../models/Course");

router.get("/api/courses", async (req, res) => {
  const courses = await Course.find();
  netReply(courses);
  res.send(courses);
});

router.post("/api/courses", async (req, res) => {
  netRequest(req.body);
  const newCourse = new Course(req.body);
  const result = await newCourse.save();
  res.send(result);
  netReply(result);
});

module.exports = router;
