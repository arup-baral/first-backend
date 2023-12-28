import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { REQUEST_BODY_SIZE } from "./constants.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(
  express.json({
    limit: REQUEST_BODY_SIZE,
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: REQUEST_BODY_SIZE,
  })
);
app.use(express.static("public"));
app.use(
  express.text({
    limit: REQUEST_BODY_SIZE,
  })
);

app.use(cookieParser());

export default app;
