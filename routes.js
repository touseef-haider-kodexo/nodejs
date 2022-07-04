const Router = require("express").Router();
const imageRoutes = require("./appRoutes/image");

Router.use("/images", imageRoutes);

module.exports = Router;
