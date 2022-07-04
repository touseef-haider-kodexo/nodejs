const fs = require("fs");

exports.processFile = (req, res, next) => {
  const file = fs.readFileSync(req.file?.path);

  req.processedFile = file;

  next();
};
