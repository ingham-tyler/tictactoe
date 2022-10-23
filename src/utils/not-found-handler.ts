import { Request, Response, NextFunction } from "express";

import IServerError from "src/lib/error";

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const { url } = req;
  const err: IServerError = new Error();
  err.name = "NotFound";
  err.message = `Resource at ${url} cannot be found.`;
  err.namespace = "Server";

  next(err);
};

export default notFoundHandler;
