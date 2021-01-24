const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const addTodo = async (task, done) => {
  const todo = await prisma.todo.create({
    data: {
      task,
      done,
    },
  });
  return todo;
};

const getTodo = async () => {
  const todo = await prisma.todo.findMany();
  return todo;
};

const updateTodo = async (id, done) => {
  const todo = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      done: !done,
    },
  });
  return todo;
};

const deleteTodo = async (id) => {
  const todo = await prisma.todo.delete({
    where: {
      id,
    },
  });
  return todo;
};

// getTodo().then(console.log);

module.exports = { addTodo, updateTodo, getTodo, deleteTodo };
