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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}...`);
});
