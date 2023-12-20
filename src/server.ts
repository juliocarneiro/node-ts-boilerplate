import express, { Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(
  express.json(),
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (_, res: Response) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
