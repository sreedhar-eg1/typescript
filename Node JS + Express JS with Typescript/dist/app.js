"use strict";
// USING NODE JS
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { createServer } from "node:http";
// const server = createServer((req, res) => {
//   console.log(req.method);
//   res.end("Hello world");
// });
// server.listen(3000);
// --------------------------------------------------------------
// USING EXPRESS
const express_1 = __importDefault(require("express"));
const todo_js_1 = __importDefault(require("./routes/todo.js"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(todo_js_1.default);
// app.get("/", (req, res) => {
//   res.json({ message: "Hello World!" });
// });
app.listen(3000);
