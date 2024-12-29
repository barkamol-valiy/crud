const express = require("express");
const dotevn = require("dotenv");
const mainRoute = require("./routes/mainRoute");

dotevn.config();

const app = express();

app.use("/", mainRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
