const express = require("express");
const bodyParser = require("body-parser");
cors = require("cors");
const app = express();
const dbConfig = require("../backend/config/db");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.use(cors());
const contactRoutes = require("../backend/app/Routes/route");

app.get("/", (req, res) => {
  res.json({ message: "welcome to product site" });
});

app.use("/contact", contactRoutes);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
