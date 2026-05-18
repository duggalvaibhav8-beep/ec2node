const express = require("express");
const app = express();
const PORT = 3001;

// serve static files
app.use(express.static("public"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server babbbe is the best  ${PORT}`);
});
