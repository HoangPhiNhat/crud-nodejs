const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");
class SiteController {
  // [GET] /home
  async home(req, res) {
    try {
      let courses = await Course.find({});
      res.render("home", { courses: multipleMongooseToObject(courses) });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "Có lỗi xảy ra khi lấy dữ liệu từ cơ sở dữ liệu" });
    }
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
