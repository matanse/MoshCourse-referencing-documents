const router = require("express").Router();
const debug = require("debug");
const netRequest = debug("app:net:Request");
const netReply = debug("app:net:Reply");
const { Author, validateAuthor } = require("../models/Author");

router.get("/api/authors", async (req, res) => {
  const authors = await Author.find();
  netReply(authors);
  res.send(authors);
});

router.post("/api/authors", async (req, res) => {
  netRequest(req.body);
  const newAuthor = new Author(req.body);
  const result = await newAuthor.save();
  res.send(result);
  netReply(result);
});

module.exports = router;
