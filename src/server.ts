import express, { Response } from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(
  express.json(),
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (_, res: Response) => {
  res.send("Hello World!");
});

server.listen(3000, () => {
  console.log(`Server listening on port ${3000}`);
});
