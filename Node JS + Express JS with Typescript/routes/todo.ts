import express from "express";
import { addTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../data.js";

const router = express.Router();

router.post("/todos", (req, res) => {
  const text = req.body.text;

  const addedTodo = addTodo(text);

  res.json({ message: "Todo added successfully!", todo: addedTodo });
});

router.get("/todos", (req, res) => {
  const todos = getTodos();

  res.json({ message: "Fetched successfully", todos: todos });
});

router.get("/todos/:id", (req, res) => {
  const id = +req.params.id;
  const todo = getTodo(id);

  res.json({ todo });
});

router.delete("/todos/:id", (req, res) => {
  const id = +req.params.id;
  const todos = deleteTodo(id);

  res.json({ todos });
});

router.patch("/todos/:id", (req, res) => {
  const id = +req.params.id;
  const text = req.body.text;
  updateTodo(id, text);

  res.json({ message: "Updated successfully" });
});

export default router;
