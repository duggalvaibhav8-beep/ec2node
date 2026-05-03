const express = require("express");
const app = express();
const PORT = 3000;

// serve static files
app.use(express.static("public"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});