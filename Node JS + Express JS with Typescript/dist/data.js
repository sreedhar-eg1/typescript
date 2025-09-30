"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = addTodo;
exports.getTodo = getTodo;
exports.deleteTodo = deleteTodo;
exports.updateTodo = updateTodo;
exports.getAllTodos = getAllTodos;
let TODOS = [{ id: 1, text: "Todo 1" }, { id: 2, text: "Todo 2" }];
function addTodo(text) {
    const newTodo = { id: Math.random(), text };
    TODOS.push(newTodo);
    return newTodo;
}
function getTodo(id) {
    const todo = TODOS.find((todo) => todo.id === id);
    if (!todo)
        throw new Error("Todoo not found!");
    return todo;
}
function deleteTodo(id) {
    TODOS = TODOS.filter((todo) => todo.id !== id);
    return TODOS;
}
function updateTodo(id, text) {
    const TODO = getTodo(id);
    TODO.text = text;
}
function getAllTodos() {
    return TODOS;
}
