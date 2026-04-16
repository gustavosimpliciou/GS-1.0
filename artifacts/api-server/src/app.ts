import express, { type Express } from "express";
import cors from "cors";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

const setupLogger = async () => {
  const pinoHttp = await import("pino-http");
  const middleware = (pinoHttp.default ?? pinoHttp)({
    logger,
    serializers: {
      req(req: { id: string; method: string; url?: string }) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: { statusCode: number }) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  });
  app.use(middleware);
};

setupLogger();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
