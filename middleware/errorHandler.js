const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.StatusCode : 500;
  res.json({ title: "Not found",message: err.message, stackTrace: err.stack });
  res.json({ title: "Validation Failed",message: err.message, stackTrace: err.stack });
};

module.exports = errorHandler;
