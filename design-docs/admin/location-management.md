# Trang: Quản Lý Địa Điểm

## Mục Đích
Cung cấp giao diện để admin quản lý thông tin các địa điểm du lịch, điểm tham quan và hoạt động trong hệ thống.

## Thành Phần Chính

### 1. Header & Search
```
+------------------------------------------------+
| Quản Lý Địa Điểm                               |
| [Tìm kiếm...] [Bộ lọc] [Thêm địa điểm mới]    |
+------------------------------------------------+
```

### 2. Location Grid
```
+----------------+ +----------------+ +----------------+
|  [Ảnh]         | |  [Ảnh]         | |  [Ảnh]         |
|  Phố cổ HN     | |  Vịnh Hạ Long  | |  Phố Hội       |
|  Active • 4.8★  | |  Active • 4.9★  | |  Draft • --    |
|  [Edit] [...]   | |  [Edit] [...]   | |  [Edit] [...]   |
+----------------+ +----------------+ +----------------+
```

### 3. Location Editor

#### Basic Info
- Tên địa điểm
- Mô tả ngắn & chi tiết
- Loại địa điểm:
  - [ ] Thành phố
  - [ ] Điểm tham quan
  - [ ] Nhà hàng
  - [ ] Hoạt động
- Trạng thái (Active/Draft/Hidden)

#### Location Details
- Tọa độ GPS
- Địa chỉ đầy đủ
- Giờ mở cửa
- Giá vé (nếu có)
- Website
- Số điện thoại

#### Media Management
- Ảnh đại diện
- Thư viện ảnh
- Video giới thiệu
- Virtual tour (nếu có)

#### Tags & Categories
- Loại hình:
  - [ ] Thiên nhiên
  - [ ] Văn hóa
  - [ ] Giải trí
  - [ ] Ẩm thực
- Mùa phù hợp
- Tags tùy chỉnh

### 4. Data Enrichment

#### AI Integration
- Tự động gợi ý tags
- Phân tích sentiment từ reviews
- Tự động tóm tắt mô tả
- Dịch đa ngôn ngữ

#### External Data
- Google Places API
- TripAdvisor ratings
- Weather data
- Crowd levels

### 5. Bulk Operations
- Import từ CSV/Excel
- Batch update status
- Bulk tag management
- Mass delete/archive

## Trải Nghiệm Người Dùng (UX)

### Location Creation Flow
1. Basic info
2. Location details
3. Media upload
4. Tags & categories
5. Preview & publish

### Data Validation
- Required fields check
- Coordinate validation
- Image size/format
- SEO validation
- Duplicate check

### Batch Processing
- Progress indicators
- Error handling
- Rollback options
- Success summary

### Media Handling
- Drag & drop upload
- Image cropping
- Auto compression
- Watermark options

## Style Guidelines

### Grid Layout
- Card width: 300px
- Image height: 200px
- 3 columns desktop
- 2 columns tablet
- 1 column mobile

### Status Colors
- Active: #10B981
- Draft: #6B7280
- Hidden: #EF4444
- Featured: #F59E0B

### Typography
- Location name: 18px/600
- Status: 14px/500
- Meta info: 12px/400

## Additional Features

### Review Management
- Moderate reviews
- Reply to reviews
- Rating analytics
- Flag inappropriate

### SEO Tools
- Meta descriptions
- URL slugs
- Keyword optimization
- XML sitemap

### Analytics
- View counts
- Search appearances
- Click-through rates
- Booking conversion

### Automation
- Scheduled publishing
- Auto-translations
- Image optimization
- Data backups

## Chú Ý Bổ Sung

### Performance
- Lazy load images
- Pagination
- Search indexing
- Cache management

### Data Quality
- Mandatory reviews
- Update reminders
- Quality scores
- Duplicate detection

### Compliance
- GDPR compliance
- Copyright checks
- Privacy controls
- Terms update