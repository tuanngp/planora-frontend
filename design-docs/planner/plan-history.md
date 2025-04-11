# Trang: Lịch Sử Kế Hoạch Du Lịch

## Mục Đích
Hiển thị tất cả các kế hoạch du lịch đã tạo, cho phép người dùng dễ dàng xem lại, đánh giá và tái sử dụng các kế hoạch trước đó.

## Thành Phần Chính

### 1. Overview Stats
```
+------------+ +------------+ +------------+
| 12         | | 8         | | 4         |
| Tổng số    | | Đã đi     | | Sắp tới   |
| kế hoạch   | | xong      | | 2024      |
+------------+ +------------+ +------------+
```

### 2. Filter Bar
```
+------------------------------------------------+
| [Tìm kiếm] [Status ▼] [Năm ▼] [Sắp xếp ▼]     |
| Đã đi (8) | Sắp tới (4) | Draft (2)           |
+------------------------------------------------+
```

### 3. Plans Grid

#### Layout Card
```
+-------------------+
| [Cover photo]     |
| Hà Nội - Hạ Long |
| 15-20/11/2024    |
| 6 người • 15M VND|
| [Actions...]     |
+-------------------+
```

#### Status Badges
- 🟢 Completed
- 🔵 Upcoming
- 🟡 In Progress
- ⚪ Draft

#### Quick Actions
- Xem chi tiết
- Chỉnh sửa
- Sao chép
- Chia sẻ
- Xóa

### 4. Timeline View
```
+------------------------------------------------+
| 2024                                           |
| ├─ T12: Đà Lạt (Upcoming)                     |
| ├─ T10: Hội An (Completed)                    |
| ├─ T7: Phú Quốc (Completed)                   |
|                                               |
| 2023                                          |
| ├─ T12: Sapa (Completed)                      |
| └─ T8: Nha Trang (Completed)                  |
+------------------------------------------------+
```

### 5. Analytics Panel

#### Travel Stats
```
+----------------------+
| Điểm đến phổ biến   |
| 1. Đà Lạt (3 lần)   |
| 2. Hội An (2 lần)   |
| 3. Nha Trang (2 lần)|
+----------------------+
```

#### Budget Analysis
```
+----------------------+
| Chi phí trung bình  |
| [Bar Chart]         |
| Theo điểm đến       |
+----------------------+
```

## Layout & Style

### Desktop Layout
```
+----------------+----------------------+
| Filters        | Main Content Area   |
| [Sticky]       | [Grid/Timeline]     |
|                |                     |
| Analytics      | Pagination          |
|                |                     |
+----------------+----------------------+
```

### Mobile Layout
- Stack layout
- Filter drawer
- List view default
- Quick actions bar

### Colors & Status
- Completed: #10B981
- Upcoming: #4F46E5
- In Progress: #F59E0B
- Draft: #6B7280

### Typography
- Plan title: 18px/600
- Date: 14px/400
- Stats: 24px/700
- Meta: 14px/400

## Features & Tools

### View Options
- Grid view
- Timeline view
- List view
- Map view
- Calendar view

### Sort Options
- Gần đây nhất
- Sắp diễn ra
- Điểm đến
- Ngân sách
- Đánh giá

### Filter Options
- Status
- Năm
- Điểm đến
- Số người
- Ngân sách
- Tags

### Batch Actions
- Multi-select
- Bulk delete
- Export selected
- Share multiple
- Tag groups

## Additional Features

### Plan Templates
- Save as template
- Apply template
- Share template
- Rate template

### Travel Insights
- Popular times
- Cost trends
- Duration stats
- Group sizes

### Sharing Tools
- Social share
- PDF export
- Group access
- Public/Private

### Review System
- Rate trips
- Add photos
- Write notes
- Tips & tricks

## Chú Ý Bổ Sung

### Performance
- Lazy loading
- Infinite scroll
- Image optimization
- Cache data

### Organization
- Folder system
- Tags & labels
- Search filters
- Sort options

### Integration
- Calendar sync
- Social media
- Travel apps
- Cloud backup

### Analytics
- Travel patterns
- Spending habits
- Popular places
- Time trends

### Export Options
- PDF format
- Excel data
- Calendar events
- Contact details

### Privacy
- Visibility control
- Share settings
- Data access
- Archive options