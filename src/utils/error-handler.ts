import { Request, Response, NextFunction } from "express";

import IServerError from "src/lib/error";
import logger from "./logger";

const errorHandler = (err: IServerError, req: Request, res: Response, next: NextFunction) => {
  logger.error(`Error:${err.message} : ${err.name}`, { namespace: err.namespace });

  let code: number;
  let msg: string;

  switch (err.name) {
    case "NotFound":
      code = 404;
      msg = "Resource not found";
      break;
    default:
      code = 500;
      msg = "Server Error";
      break;
  }

  if (res.headersSent) {
    return next(err);
  }

  return res.status(code).json({
    error: true,
    message: msg,
  });
};

export default errorHandler;
