# Trang: Tìm Kiếm Chỗ Ở

## Mục Đích
Cung cấp giao diện tìm kiếm và so sánh các lựa chọn chỗ ở phù hợp với lịch trình và ngân sách của người dùng.

## Thành Phần Chính

### 1. Search Panel
```
+----------------------------------------+
|  Tìm chỗ ở cho chuyến đi của bạn       |
|  +------------+ +--------+ +---------+  |
|  | Địa điểm   | | Check  | | Số     |  |
|  | Hà Nội     | | in/out | | người  |  |
|  +------------+ +--------+ +---------+  |
|  [        Tìm kiếm ngay         ]      |
+----------------------------------------+
```

#### Địa Điểm Field
- Autocomplete từ điểm đến trong kế hoạch
- Hiển thị suggested locations
- Recent searches
- Popular destinations

#### Date Range Picker
- Sync với ngày trong kế hoạch
- Blocked dates ngoài lịch trình
- Hiển thị giá trung bình theo ngày
- Minimum/maximum stay

#### Số Người
- Dropdown counter:
  - Người lớn
  - Trẻ em
  - Phòng
- Tự động tính toán cấu hình phòng phù hợp

### 2. Filters Sidebar
- Price Range slider
- Loại chỗ ở:
  - [ ] Khách sạn
  - [ ] Resort
  - [ ] Homestay
  - [ ] Căn hộ
- Tiện nghi:
  - [ ] WiFi
  - [ ] Bể bơi
  - [ ] Bãi đỗ xe
  - [ ] Nhà hàng
- Xếp hạng sao
- Điểm đánh giá
- Khoảng cách đến trung tâm
- Thêm filters:
  - Thanh toán tại chỗ
  - Hủy miễn phí
  - Khuyến mãi

### 3. Results Grid
```
+----------------+ +----------------+
|  [Ảnh khách    | |  [Ảnh khách   |
|   sạn]         | |   sạn]        |
|                | |               |
|  Tên khách sạn | |  Tên khách   |
|  Rating • Type | |  sạn          |
|  Features      | |  Rating...    |
|  Price         | |               |
+----------------+ +----------------+
```

#### Mỗi Card Hiển Thị
- Ảnh slideshow (3-5 ảnh)
- Tên cơ sở
- Rating với số đánh giá
- Loại phòng phù hợp nhất
- Các tiện nghi chính
- Giá cho toàn bộ thời gian
- Tag khuyến mãi (nếu có)
- Nút "Xem chi tiết"
- Nút "Đặt ngay"

### 4. Map View Toggle
- Split view với kết quả
- Markers theo giá/loại
- Clusters khi zoom out
- Hover card highlight marker
- Realtime update khi di chuyển map

## Trải Nghiệm Người Dùng (UX)

### Search Experience
- Instant search khi thay đổi filter
- Skeleton loading states
- Infinite scroll results
- Quick sort options:
  - Giá (thấp → cao)
  - Đánh giá cao nhất
  - Gần trung tâm nhất
  - Phù hợp nhất

### Filter Behavior
- Applied filters chip list
- Quick clear all
- Save filter preferences
- Collapse/expand sections
- Mobile: bottom sheet

### Responsive Layout
#### Desktop (>1024px)
```
+------------------+----------------------+
|                  |                      |
|    Filters       |     Results Grid     |
|    Sidebar       |                      |
|                  |     [Scrollable]     |
|    [Fixed]       |                      |
|                  |                      |
+------------------+----------------------+
```

#### Tablet (768px - 1024px)
- Horizontal scroll filters
- 2 columns grid
- Collapse sidebar

#### Mobile (<768px)
- Full width cards
- Bottom sheet filters
- Sticky search bar
- FAB for map toggle

### Performance
- Lazy load images
- Virtual scroll results
- Debounced search
- Cache filter results
- Progressive loading

## Style Guidelines

### Cards Design
- Shadow: 0 2px 4px rgba(0,0,0,0.1)
- Border radius: 12px
- Padding: 16px
- Image height: 200px
- Hover state với subtle lift

### Typography
- Tên cơ sở: 18px/600
- Giá: 20px/700
- Rating: 14px/500
- Features: 14px/400

### Colors
- Price: #059669 (Success green)
- Rating: #F59E0B (Warning yellow)
- Promotion: #DC2626 (Danger red)
- Disabled: #9CA3AF

## Chú Ý Bổ Sung
- Support RTL layouts
- Accessibility labels
- Loading states
- Error states
- Empty states
- Booking.com API integration
- Price alerts
- Compare feature
- Recently viewed
- Similar properties
- Review highlights
- Photo gallery modal
- Virtual tour support