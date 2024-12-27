# Ứng Dụng Quản Lý Cửa Hàng Mỹ Phẩm Online

## Giới thiệu tổng quan
Dự án này là một ứng dụng quản lý cửa hàng mỹ phẩm trực tuyến, được phát triển bằng **Laravel PHP Framework**, nhằm tối ưu hóa hoạt động kinh doanh cho các cửa hàng bán các sản phẩm làm đẹp và chăm sóc da. Ứng dụng sử dụng cơ sở dữ liệu quan hệ để quản lý sản phẩm, người dùng, đơn hàng và các thực thể quan trọng khác.

## Tính Năng
- **Quản Lý Người Dùng**: Xử lý xác thực và phân quyền người dùng.
- **Quản Lý Sản Phẩm**: Hỗ trợ thêm, chỉnh sửa và phân loại sản phẩm.
- **Quản Lý Đơn Hàng**: Quản lý đơn hàng của khách hàng và theo dõi các mặt hàng trong đơn hàng.
- **Danh Mục và Thẻ**: Tổ chức sản phẩm để dễ dàng tìm kiếm.
- **Quản Lý Hình Ảnh**: Lưu trữ hình ảnh cho sản phẩm và các slider quảng cáo.
- **Cấu Hình Menu và Cài Đặt**: Tùy chỉnh menu điều hướng và cài đặt chung cho cửa hàng.

## Thiết Kế Cơ Sở Dữ Liệu
Schema cơ sở dữ liệu bao gồm các bảng sau:
![database diagram] ()

### 1. **Users**
Quản lý tài khoản người dùng:
- `id`: Mã định danh duy nhất.
- `name`: Tên người dùng.
- `email`: Email dùng để đăng nhập.
- `password`: Mật khẩu đã mã hóa.
- `created_at` / `updated_at`: Dấu thời gian để quản lý bản ghi.

### 2. **Customers**
Lưu thông tin khách hàng:
- `id`: Mã định danh duy nhất.
- `name`: Tên khách hàng.
- `address`: Địa chỉ giao hàng.
- `created_at` / `updated_at`: Dấu thời gian để quản lý bản ghi.

### 3. **Products**
Quản lý kho sản phẩm mỹ phẩm:
- `id`: Mã định danh duy nhất.
- `name`: Tên sản phẩm.
- `price`: Giá của sản phẩm.
- `feature_image`: URL hình ảnh chính của sản phẩm.
- `content`: Mô tả chi tiết sản phẩm.
- `user_id`: ID của người dùng đã thêm sản phẩm.
- `category_id`: ID danh mục của sản phẩm.
- `created_at` / `updated_at`: Dấu thời gian để quản lý bản ghi.

### 4. **Product Images**
Lưu hình ảnh bổ sung cho sản phẩm:
- `id`: Mã định danh duy nhất.
- `image`: URL hình ảnh.
- `product_id`: ID sản phẩm liên kết.
- `created_at` / `updated_at`: Dấu thời gian để quản lý bản ghi.

### 5. **Categories**
Phân loại sản phẩm:
- `id`: Mã định danh duy nhất.
- `name`: Tên danh mục.
- `parent_id`: Danh mục cha trong tổ chức phân cấp.
- `created_at` / `updated_at`: Dấu thời gian để quản lý bản ghi.

### 6. **Tags**
Quản lý các thẻ để phân loại sản phẩm:
- `id`: Mã định danh duy nhất.
- `name`: Tên thẻ.
- `created_at` / `updated_at`: Dấu thời gian để quản lý bản ghi.

### 7. **Product Tags**
Liên kết thẻ với sản phẩm:
- `id`: Mã định danh duy nhất.
- `product_id`: ID sản phẩm liên kết.
- `tag_id`: ID thẻ liên kết.
- `created_at` / `updated_at`: Dấu thời gian để quản lý bản ghi.

### 8. **Orders**
Quản lý đơn hàng của khách hàng:
- `id`: Mã định danh duy nhất.
- `user_id`: ID của người dùng quản lý đơn hàng.
- `customer_id`: ID của khách hàng đã đặt đơn.
- `status`: Trạng thái hiện tại của đơn hàng (ví dụ: đang chờ, đã hoàn thành).
- `created_at`: Dấu thời gian tạo đơn hàng.

### 9. **Order Items**
Lưu thông tin từng mặt hàng trong đơn hàng:
- `id`: Mã định danh duy nhất.
- `order_id`: ID đơn hàng liên kết.
- `product_id`: ID sản phẩm liên kết.
- `quantity`: Số lượng sản phẩm.

### 10. **Menus**
Quản lý cấu trúc điều hướng của cửa hàng:
- `id`: Mã định danh duy nhất.
- `name`: Tên mục menu.
- `parent_id`: Menu cha trong tổ chức phân cấp.
- `created_at` / `updated_at`: Dấu thời gian để quản lý bản ghi.

### 11. **Sliders**
Quản lý các banner quảng cáo:
- `id`: Mã định danh duy nhất.
- `name`: Tên slider.
- `description`: Mô tả slider.
- `image`: URL hình ảnh slider.
- `created_at` / `updated_at`: Dấu thời gian để quản lý bản ghi.

### 12. **Settings**
Lưu cài đặt chung cho ứng dụng:
- `id`: Mã định danh duy nhất.
- `config_key`: Tên khóa cài đặt.
- `config_value`: Giá trị của cài đặt.
- `created_at` / `updated_at`: Dấu thời gian để quản lý bản ghi.

## Công Nghệ Sử Dụng
- **Backend**: Laravel PHP Framework.
- **Frontend**: Có thể phát triển bằng Blade Template hoặc các framework hiện đại như React, Vue.js.
- **Cơ Sở Dữ Liệu**: Sử dụng MySQL hoặc MariaDB.
- **Hosting**: Dịch vụ đám mây như AWS, Azure hoặc shared hosting hỗ trợ PHP.

## Hướng Dẫn Cài Đặt
1. Clone repository.
2. Thiết lập cơ sở dữ liệu bằng schema cung cấp.
3. Cấu hình file `.env` để kết nối cơ sở dữ liệu (DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD).
4. Cài đặt các thư viện phụ thuộc bằng Composer:
   ```bash
   composer install
   ```
5. Chạy migrations để thiết lập schema cơ sở dữ liệu:
   ```bash
   php artisan migrate
   ```
6. Khởi động server:
   ```bash
   php artisan serve
   ```

## Nâng Cấp Trong Tương Lai
- Thêm tích hợp cổng thanh toán.
- Triển khai tính năng phân tích và báo cáo nâng cao.
- Cải thiện UI/UX với thiết kế responsive.
- Hỗ trợ đa ngôn ngữ để mở rộng đối tượng khách hàng.

## Giấy Phép
Dự án này được cấp phép theo giấy phép MIT. Xem tệp LICENSE để biết thêm chi tiết.

## Liên Hệ
- Để biết thêm thông tin hoặc hỗ trợ, vui lòng liên hệ qua email: [ntphuoganh@gmail.com](mailto:ntphuoganhe@gmail.com).


