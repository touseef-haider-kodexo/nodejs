const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageSchema = new Schema({
  image: {
    type: Buffer,
  },
});

module.exports = mongoose.model("user", imageSchema);
