const express = require("mongoose");

const app = express();

const PORT = 1234;

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
