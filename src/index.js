const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const methodOverride = require("method-override")
const app = express();
const port = 3000;
app.use(morgan("combined"));
app.use(express.static("src/public"));
//express.static là một hàm tích hợp săn trong express dùng để nhận các tập tin tĩnh
const route = require("./routes");
const db = require("./config/db");
// Connect to db
db.connect();
app.use(methodOverride("_method"))
app.use(
  express.urlencoded({
    extended: true,
  })
); //urlencoded là middleware xử lý dữ liệu từ form
app.use(express.json()); // gửi dữ liệu từ code js
app.engine(
  ".hbs",
  hbs.engine({
    extname: ".hbs",
    helpers: {
        sum: (a, b) => a + b
    },
  })
);
app.set("view engine", ".hbs");
app.set("views", "./src/resources/views");
// route init khởi tạo bộ định tuyến
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
