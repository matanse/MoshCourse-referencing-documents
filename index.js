const mongoose = require("mongoose");

const mongodbCollection = "referencing_documents";

mongoose
  .connect(`mongodb://localhost/${mongodbCollection}`)
  .then(() => console.log(f`connect to mongodb ${mongodbCollection}`))
  .catch((err) => {
    console.log(`ERROR: ${err}`);
  });
