const mongoose = require("mongoose");
const express = require("express");
const app = express();
const debug = require("debug");
const courses = require("./routes/courses");

app.use(express.json());

const mongodbCollection = "ReferencingDocuments";

mongoose
  .connect(`mongodb://localhost/${mongodbCollection}`)
  .then(() => console.log(`Connect to Mongodb ${mongodbCollection}.`))
  .catch((err) => {
    console.log(`ERROR: ${err}`);
  });

app.use("/", courses);

//   TODO make a loop to get user input for an action: post, put, get, delete
// const start = () => {
//   let doAction = Boolean;

//   while (doAction) {}
// };

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}...`);
});
