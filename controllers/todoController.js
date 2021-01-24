const {
  addTodo,
  updateTodo,
  deleteTodo,
  getTodo,
} = require("../services/todoService");

const insertTodo = async (req, res) => {
  let task = req.body.task;
  const todo = await addTodo(task);
  res.json(todo);
  // return todo;
};

const changeTodo = async (req, res) => {
  let id = +req.body.id;
  let done = req.body.done;
  const todo = await updateTodo(id, done);
  res.json(todo);
  // return todo;
};

const removeTodo = async (req, res) => {
  let id = +req.query.id;
  const todo = await deleteTodo(id);
  res.json(todo);
  // return todo;
};

const allTodo = async (req, res) => {
  const todo = await getTodo();
  res.json(todo);
};
// insertTodo({ body: { task: "to go to shcool" } }).then(console.log);
// changeTodo({ query: { id: 4 } }).then(console.log);
// removeTodo({ query: { id: 4 } }).then(console.log);
// allTodo().then(console.log);

module.exports = { insertTodo, changeTodo, removeTodo, allTodo };
