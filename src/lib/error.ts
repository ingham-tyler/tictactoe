interface IServerError extends Error {
  namespace?: string;
  code?: number;
}

export default IServerError;
