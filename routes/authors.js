const router = require("express").Router();
const debug = require("debug");
const netRequest = debug("app:net:Request");
const netReply = debug("app:net:Reply");
const { Author, validateAuthor } = require("../models/Author");

router.get("/", async (req, res) => {
  const authors = await Author.find();
  console.log(authors);
  res.send(authors);
});

module.exports = router;
