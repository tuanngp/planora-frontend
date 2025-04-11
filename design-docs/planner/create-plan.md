# Trang: Tạo Kế Hoạch Du Lịch

## Mục Đích
Cung cấp giao diện trực quan để người dùng nhập thông tin chuyến đi và tạo kế hoạch du lịch tự động với sự hỗ trợ của AI.

## Thành Phần Chính

### 1. Header
- Breadcrumb: "Trang chủ > Tạo kế hoạch mới"
- Tiêu đề "Tạo kế hoạch du lịch mới"
- Progress bar hiển thị các bước:
  1. Thông tin cơ bản
  2. Sở thích & Hoạt động
  3. Ngân sách
  4. Xem trước & Hoàn tất

### 2. Form Thông Tin Cơ Bản
#### Điểm Đến
- Searchbox với autocomplete:
  - Placeholder: "Nhập tên thành phố..."
  - Hỗ trợ tìm kiếm tiếng Việt không dấu
  - Hiển thị icon địa điểm và ảnh nhỏ
- Chips hiển thị điểm đã chọn
- Nút "Thêm điểm đến" (tối đa 5)

#### Thời Gian
- Date range picker:
  - Start date: "Ngày bắt đầu"
  - End date: "Ngày kết thúc"
  - Minimum date: ngày hiện tại + 1
  - Maximum range: 30 ngày
- Hiển thị tổng số ngày tự động

### 3. Sở Thích & Hoạt Động
#### Sở Thích
- Grid các thẻ sở thích:
  ```
  [ ] Thiên nhiên  [ ] Lịch sử
  [ ] Nghỉ dưỡng   [ ] Ẩm thực
  [ ] Mua sắm      [ ] Sống ảo
  [ ] Thể thao     [ ] Khám phá
  ```
- Mỗi thẻ có icon minh họa
- Có thể chọn nhiều
- Nút "Khác" để thêm sở thích tùy chỉnh

#### Input Tự Nhiên
- Textbox lớn:
  - Placeholder: "Mô tả thêm sở thích của bạn..."
  - Gợi ý: "Ví dụ: Tôi thích chụp ảnh hoàng hôn, ăn đồ cay..."
- AI sẽ phân tích text này để hiểu rõ hơn

### 4. Ngân Sách
- Radio group chọn kiểu ngân sách:
  - [ ] Tổng ngân sách
  - [ ] Ngân sách theo ngày
- Input số tiền:
  - Format tự động (1,000,000)
  - Đơn vị VNĐ
- Slider trực quan
- Biểu đồ phân bổ dự kiến:
  - Chỗ ở: 40%
  - Ăn uống: 30%
  - Di chuyển: 20%
  - Khác: 10%

### 5. Panel AI TravelBot
- Chat interface cố định bên phải
- Gợi ý nhanh:
  - "Có gì vui ở [địa điểm] không?"
  - "Thời tiết [địa điểm] tháng [X]?"
  - "Nên ăn gì ở [địa điểm]?"
- Typing indicator khi AI đang xử lý

## Trải Nghiệm Người Dùng (UX)

### Progressive Disclosure
- Hiển thị từng bước một
- Next button chỉ enable khi đủ thông tin
- Có thể quay lại bước trước
- Lưu form state vào localStorage

### AI Integration
- Real-time suggestions khi nhập liệu
- Phản hồi nhanh với cached data
- Fallback options khi AI chậm
- Loading states rõ ràng

### Smart Defaults
- Gợi ý điểm đến hot
- Thời gian chuyến phổ biến
- Ngân sách trung bình theo địa điểm
- Sở thích phù hợp theo mùa

### Responsive Behavior
#### Desktop
```
+------------------+------------------+
|     Main Form    |                 |
|                  |                 |
|  [Input Fields]  |    TravelBot    |
|                  |                 |
|  [Next Button]   |    Panel        |
|                  |                 |
+------------------+------------------+
```

#### Mobile
- TravelBot minimize thành floating button
- Form full width
- Sticky progress bar
- Bottom sheet cho additional info

## Style Guidelines
- Palette:
  - Primary: #4F46E5
  - Success: #10B981
  - Warning: #F59E0B
  - Info: #3B82F6
- Spacing:
  - Form group: 32px
  - Fields: 20px
  - Buttons: 16px
- Typography:
  - Headings: 24px/32px
  - Labels: 14px/20px
  - Helper text: 12px/16px

## Chú Ý Bổ Sung
- Tự động lưu draft
- Phát hiện kết nối mạng yếu
- Optimize performance cho mobile
- Hỗ trợ voice input
- Tích hợp Google Places API
- Cache địa điểm phổ biến
- Analytics chi tiết về user behavior
- A/B test các variants của form