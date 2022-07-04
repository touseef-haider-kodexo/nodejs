const Router = require("express").Router();
const { addImage, getImages } = require("../controllers/image");
const uploads = require("../middleware/uploads");
const { processFile } = require("../middleware/processFile");

Router.post("/", [uploads, processFile], addImage);

Router.get("/", getImages);

module.exports = Router;
