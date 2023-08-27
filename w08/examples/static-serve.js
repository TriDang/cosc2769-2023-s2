const express = require("express");
const app = express();
const port = 2222;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
