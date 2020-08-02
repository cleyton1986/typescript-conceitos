import express, { json } from "express";
import {helloWord} from './routes';

const app = express();
app.use(json());

app.get("/user", helloWord);

app.listen(3333, () => {
  console.log("Server Node.js + typeScript iniciado on http://localhost:3333 🚀!!!");
});