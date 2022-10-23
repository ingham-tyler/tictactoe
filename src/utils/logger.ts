import { createLogger, transports, format } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const logLevels = { error: 0, warn: 1, info: 2, http: 3, debug: 4 };

const DRFTransport: DailyRotateFile = new DailyRotateFile({
  filename: "verbose-[%DATE%].log",
  dirname: "./logs",
  maxFiles: "30d",
  level: "http",
  format: format.combine(format.timestamp(), format.json()),
});

const logger = createLogger({
  transports: [
    new transports.Console({
      level: "debug",
      format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({ timestamp, level, message, namespace }) => {
          return `[${timestamp}] ${level}: ${message} - ${namespace}`;
        })
      ),
    }),
    DRFTransport,
  ],
  levels: logLevels,
  defaultMeta: {
    namespace: "Server",
  },
});

export default logger;
