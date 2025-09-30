// USING NODE JS

// import { createServer } from "node:http";

// const server = createServer((req, res) => {
//   console.log(req.method);
//   res.end("Hello world");
// });

// server.listen(3000);

// --------------------------------------------------------------

// USING EXPRESS

import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import todoRoutes from "./routes/todo.js";

const app = express();

app.use(express.json());
app.use(todoRoutes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ error: "An error occured" });
});

// app.get("/", (req, res) => {
//   res.json({ message: "Hello World!" });
// });

app.listen(3000);
