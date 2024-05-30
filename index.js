const express = require("express");
const api = require("./api");

const app = express();
const PORT = process.env.PORT || 9876;

app.use(express.json());
app.use(api);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
