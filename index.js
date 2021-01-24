const express = require("express");

const app = express();

const cors = require("cors");

app.use(express.json());

app.use(cors());

const todoRoute = require("./routes/todoRoute");

const PORT = process.env.PORT || 5002;

app.use("/todo", todoRoute);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
