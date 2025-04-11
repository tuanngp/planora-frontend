# Trang: Chi Tiết Kế Hoạch Du Lịch

## Mục Đích
Hiển thị kế hoạch du lịch dưới dạng timeline trực quan và bản đồ tương tác, cho phép người dùng xem, chỉnh sửa và chia sẻ lịch trình.

## Thành Phần Chính

### 1. Header
- Tiêu đề kế hoạch (có thể chỉnh sửa)
- Thời gian: "15/11 - 20/11/2024 (6 ngày)"
- Điểm đến: "Hà Nội → Hạ Long → Ninh Bình"
- Actions:
  - Nút "Chỉnh sửa"
  - Nút "Chia sẻ"
  - Nút "Xuất PDF"
  - Menu "..." (Thêm tùy chọn)

### 2. Overview Panel
- Card thông tin tổng quan:
  ```
  +--------------------------------+
  |  Tổng quan chuyến đi           |
  |  ◆ 6 ngày                      |
  |  ◆ 3 thành phố                 |
  |  ◆ 12 điểm tham quan          |
  |  ◆ Ngân sách: 15,000,000 VNĐ  |
  +--------------------------------+
  ```
- Weather widget cho mỗi điểm đến
- Checklist chuẩn bị đồ (có thể tự thêm)

### 3. Main Content Split View
```
+-------------------+------------------+
|                   |                  |
|    Timeline       |      Map         |
|    View          |      View        |
|                   |                  |
|    [Scrollable]   |   [Interactive] |
|                   |                  |
+-------------------+------------------+
```

### 4. Timeline View
- Tabs chọn ngày
- Mỗi ngày hiển thị:
  ```
  Ngày 1: Hà Nội
  ├─ 08:00 Ăn sáng @ Phở Bát Đàn
  │  └─ Note: Đi sớm tránh đông
  ├─ 09:30 Thăm Văn Miếu
  │  └─ Thời gian: 1.5 giờ
  ├─ 11:30 Di chuyển → Hoàn Kiếm
  │  └─ Grab: ~40,000đ
  └─ 12:00 Ăn trưa @ Bún chả
  ```
- Các thành phần mỗi hoạt động:
  - Icon loại hoạt động
  - Thời gian bắt đầu
  - Tên địa điểm/hoạt động
  - Thời lượng dự kiến
  - Chi phí ước tính
  - Ghi chú & Tips
  - Actions (Sửa, Xóa, Di chuyển)

### 5. Map View
- Google Maps tương tác
- Marker cho mỗi điểm đến
- Polyline kết nối các điểm theo thứ tự
- Info window khi click marker:
  - Ảnh địa điểm
  - Tên và thời gian
  - Quick actions
- Layer controls:
  - Hiện/ẩn các ngày
  - Đường đi
  - Heatmap khu vực

### 6. Sidebar Tools
- TravelBot AI Assistant
- Tìm địa điểm gần đó
- Filters:
  - Loại hoạt động
  - Khoảng giá
  - Rating
- Bookmarks đã lưu

## Trải Nghiệm Người Dùng (UX)

### Tương Tác Timeline
- Drag & drop sắp xếp lại
- Quick edit inline
- Collapse/expand ngày
- Copy hoạt động sang ngày khác
- Undo/redo thay đổi

### Tương Tác Map
- Pan & zoom tự nhiên
- Click marker highlight timeline
- Hover timeline highlight marker
- Recenter button
- My location button

### Responsive Behavior
#### Desktop (>1024px)
- Split view 50/50
- Sidebar fixed bên phải
- Full timeline view

#### Tablet (768px - 1024px)
- Stack view (Map trên, Timeline dưới)
- Sidebar collapse
- Scroll smooth giữa views

#### Mobile (<768px)
- Single view với tab switch
- Bottom sheet cho details
- Fab button cho quick actions
- Sidebar thành bottom drawer

### Collaborative Features
- Real-time updates
- Presence indicators
- Comment threads
- Vote cho hoạt động
- Share permissions

## Style Guidelines

### Colors & Icons
- Màu theo loại hoạt động:
  - Di chuyển: #818CF8
  - Ăn uống: #F97316
  - Tham quan: #10B981
  - Nghỉ ngơi: #6366F1
- Icon set: Material Design
- Map theme tùy chỉnh

### Typography & Spacing
- Timeline:
  - Thời gian: Mono, 14px
  - Địa điểm: Semi-bold, 16px
  - Details: Regular, 14px
- Margins:
  - Items: 16px
  - Sections: 24px
  - Cards: 20px

## Chú Ý Bổ Sung
- Offline support với cached maps
- Print-friendly layout
- Keyboard navigation
- Screen reader support
- Performance optimization cho maps
- Auto-save changes
- Version history
- Export đa định dạng
- Integration với calendar
- Sharing preview images
- PWA support