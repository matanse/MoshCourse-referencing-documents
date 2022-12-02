const mongoose = require("mongoose");
const express = require("express");
const app = express();
const debug = require("debug");
const courses = require("./routes/courses");
const authors = require("./routes/authors");

app.use(express.json());

const mongodbCollection = "ReferencingDocuments";

mongoose
  .connect(`mongodb://localhost/${mongodbCollection}`)
  .then(() => console.log(`Connect to Mongodb ${mongodbCollection}.`))
  .catch((err) => {
    console.log(`\n Could not connect to mongoDB... \n ERROR: ${err}`);
  });

app.use("/api/courses", courses);
app.use("/api/authors", authors);

//   TODO make a loop to get user input for an action: post, put, get, delete
// const start = () => {
//   let doAction = Boolean;

//   while (doAction) {}
// };

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}...`);
});
