## CURD với nodejs-expressjs-handlebars

## Cấu hình Routes
- function constructor sẽ tạo

##
- luôn đặt tuyến đường gốc ở dưới cùng vì tuyến đường sẽ duyệt từ trên xuống khi khớp với gốc thì sẽ vào gốc
- Vì express sẽ duyệt tuyến đường theo thứ tự và chạy tuyến đường phù hớp với yêu cầu đó
- => nếu tuyến đường gốc được đặt trước thì tất cả yêu cầu sẽ được chuyển hướng đến tuyến đường gốc và tuyến đường "/:slug" sẽ kh bao giờ được kích hoạt
