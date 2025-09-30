import { todo } from "node:test";

type Todo = {
  id: number;
  text: string;
};

let TODOS: Todo[] = [{id: 1, text: "Todo 1"}, {id: 2, text: "Todo 2"}];

export function addTodo(text: string) {
  const newTodo = { id: Math.random(), text };
  TODOS.push(newTodo);
  return newTodo;
}

export function getTodo(id: number) {
  const todo = TODOS.find((todo) => todo.id === id);

  if (!todo) throw new Error("Todoo not found!");

  return todo;
}

export function deleteTodo(id: number) {
  TODOS = TODOS.filter((todo) => todo.id !== id);
  return TODOS;
}

export function updateTodo(id: number, text: string) {
  const TODO = getTodo(id);
  TODO.text = text;
}

export function getTodos() {
  return TODOS
}
