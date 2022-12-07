exports.errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({error: err.message || err});
}

exports.sendError = (res, err, statusCode = 401) => {
  res.status(statusCode).json({error: err})
}