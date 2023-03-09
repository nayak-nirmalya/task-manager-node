const { CustomAPIError } = require("../errors/custom-errors");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }
  return res.status(500).json({ error: "Oops, Something Went Wrong!" });
};

module.exports = errorHandlerMiddleware;
