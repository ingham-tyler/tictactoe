import "dotenv/config";

import compression from "compression";
import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import hpp from "hpp";
import path from "path";

import errorHandler from "./utils/error-handler";
import httpLogger from "./utils/http-logger";
import logger from "./utils/logger";
import notFoundHandler from "./utils/not-found-handler";

const server = express();
server.use(compression());
server.use(express.static(path.join(__dirname, "../app")));
server.use(helmet());
server.use(hpp());
server.use(httpLogger);

server.get("*", (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, "../app", "index.html"));
});

server.use(notFoundHandler);
server.use(errorHandler);

const PORT: number = (process.env.PORT as number | undefined) || 8888;
logger.debug(`Server running in: ${process.env.NODE_ENV}`);
server.listen(PORT, () => logger.info(`Server listening on port: ${PORT}`));
