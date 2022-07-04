const Image = require("../models/image");

exports.addImage = async (req, res, next) => {
  try {
    console.log(req.processedFile);
    const image = new Image({
      image: req.processedFile,
    });
    await image.save();
    return res.status(200).json({
      message: "image added",
    });
  } catch (error) {
    return next(error);
  }
};

exports.getImages = async (req, res, next) => {
  try {
    const images = await Image.find({});
    return res.status(200).json(images);
  } catch (error) {
    return next(error);
  }
};
