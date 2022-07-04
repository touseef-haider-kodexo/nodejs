const mongoose = require("mongoose");
const config = require("./config");

const connectDatabase = () => {
  const DB_URL = config.db.local;

  mongoose
    .connect(DB_URL)
    .then((res) => {
      console.log("connected to database " + DB_URL);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  connectDatabase,
};
