import express from "express";
import dotenv from "dotenv";
import { router } from "./routes";
import helmet from "helmet";
import csurf from "csurf";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(express.json());
app.use(router);

// Security
app.disable("x-powered-by");
app.use(cookieParser());
app.use(csurf({ cookie: true }));
app.use(helmet.hidePoweredBy());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(helmet.frameguard({ action: "deny" }));
app.use(helmet.dnsPrefetchControl());
app.use(helmet.referrerPolicy({ policy: "same-origin" }));
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    next();
  }
);

// Error handling
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  }
);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
