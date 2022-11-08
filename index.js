const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("roots server is running");
});

app.listen(port, () => {
  console.log(`Api is running on port ${port}`);
});
