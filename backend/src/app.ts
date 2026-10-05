import express, { type Express, type Request, type Response } from "express";
import morgan from "morgan";
import router from "./routes/index.js";
const app: Express = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
// app.use(express.json());
app.use("/api", router);
export default app;
