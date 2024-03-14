const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/f8_edu_dev");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};
// lỗi timeout khi connect thì phải đơi 30s để hiện ra lỗi
module.exports = { connect };
// khi exports là obj thì khi import connect là obj
