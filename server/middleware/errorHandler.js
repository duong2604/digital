import createHttpError from "http-errors";

export const notFound = (req, res, next) => {
  const error = createHttpError.NotFound("This route is not found.");
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong...";
  return res.status(status).json({ status, message });
};
