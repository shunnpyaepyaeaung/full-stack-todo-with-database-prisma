const express = require("express");
const {
  insertTodo,
  allTodo,
  changeTodo,
  removeTodo,
} = require("../controllers/todoController");

const router = express.Router();

router.get("/gettodo", allTodo);

router.post("/inserttodo", insertTodo);

router.post("/updatetodo", changeTodo);

router.get("/deletetodo", removeTodo);

module.exports = router;
