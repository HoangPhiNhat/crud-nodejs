class NewsController {
  // khi viết dưới dạng constructor hoặc class thì viết hoa mỗi chữ cái đàu
  // [GET] /news
  index(req, res) {
    res.render("news");
  }
  // [GET] /news/:slug
  show(req, res) {
    res.send("123");
  }
}
module.exports = new NewsController();
