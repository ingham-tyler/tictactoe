import morgan, { StreamOptions } from "morgan";
import logger from "./logger";

const stream: StreamOptions = {
  write: (message) => logger.http(message.substring(0, message.lastIndexOf("\n"))),
};

const httpLogger = morgan("short", { stream });

export default httpLogger;
