# Trang: Hồ Sơ Người Dùng

## Mục Đích
Hiển thị và cho phép người dùng quản lý thông tin cá nhân, xem lịch sử hoạt động và tùy chỉnh các thiết lập tài khoản.

## Thành Phần Chính

### 1. Profile Header
```
+------------------------------------------------+
|  [Cover Photo]                                  |
|  [Avatar] Nguyễn Văn A                         |
|  @username • Thành viên từ T1/2024             |
|  [Chỉnh sửa hồ sơ] [Cài đặt] [...]            |
+------------------------------------------------+
```

### 2. Stats Overview
```
+------------+ +------------+ +------------+
| 12         | | 5         | | 8         |
| Kế hoạch   | | Nhóm      | | Đánh giá  |
+------------+ +------------+ +------------+
```

### 3. Profile Tabs
```
| Tổng quan | Kế hoạch | Nhóm | Đánh giá | Cài đặt |
```

### 4. Tab Content

#### Tổng Quan Tab
- Giới thiệu ngắn
- Sở thích du lịch
- Điểm đến yêu thích
- Hoạt động gần đây
- Huy hiệu & thành tích

#### Kế hoạch Tab
```
+-------------------+ +-------------------+
| Hà Nội - Hạ Long | | Đà Nẵng Tour     |
| 15-20/11/2024    | | Coming soon      |
| [Xem] [Chỉnh sửa]| | [Tiếp tục lập]  |
+-------------------+ +-------------------+
```

#### Nhóm Tab
- Nhóm đã tham gia
- Lời mời đang chờ
- Tạo nhóm mới

#### Đánh Giá Tab
- Đánh giá đã viết
- Phản hồi từ người khác
- Điểm uy tín

### 5. Settings Panel

#### Thông Tin Cá Nhân
- Ảnh đại diện & cover
- Tên hiển thị
- Bio/Giới thiệu
- Liên hệ & mạng xã hội

#### Tài Khoản
- Email
- Mật khẩu
- Bảo mật 2 lớp
- Liên kết mạng xã hội
- Xóa tài khoản

#### Tùy Chọn
- Ngôn ngữ
- Múi giờ
- Đơn vị tiền tệ
- Theme giao diện

#### Quyền Riêng Tư
- Hồ sơ công khai/riêng tư
- Ai có thể xem kế hoạch
- Thông báo tag
- Email marketing

## Layout & Style

### Desktop Layout
```
+----------------+----------------------+
| Profile Info   | Main Content Area   |
| [Fixed]        | [Scrollable Tabs]   |
|                |                     |
| Quick Stats    | Settings/Details    |
|                |                     |
+----------------+----------------------+
```

### Mobile Layout
- Stack layout
- Collapsible sections
- Bottom navigation
- Floating action button

### Colors & Status
- Primary: #4F46E5
- Secondary: #10B981
- Accent: #F59E0B
- Muted: #6B7280

### Typography
- Name: 24px/700
- Username: 16px/500
- Section heads: 18px/600
- Body text: 14px/400

## Features & Tools

### Profile Customization
- Avatar cropper
- Cover photo editor
- Theme selector
- Layout options

### Activity Timeline
```
+----------------------+
| ◆ Tạo kế hoạch mới  |
| 2 giờ trước         |
|                     |
| ◆ Tham gia nhóm    |
| 1 ngày trước       |
+----------------------+
```

### Privacy Controls
- Profile visibility
- Activity sharing
- Contact permissions
- Data download

### Notifications
- Email preferences
- Push notifications
- In-app alerts
- Marketing opt-in

## Additional Features

### Achievements
- Travel badges
- Milestones
- Level system
- Rewards

### Social Features
- Friend connections
- Group invites
- Plan sharing
- Reviews & ratings

### Data Management
- Export data
- Backup plans
- Delete history
- Privacy tools

### Integration
- Social media
- Calendar sync
- Travel apps
- Booking services

## Chú Ý Bổ Sung

### Performance
- Lazy load images
- Infinite scroll
- Cache profile
- Optimize media

### Security
- Session control
- Login history
- Device management
- Activity logs

### Accessibility
- Screen readers
- Keyboard nav
- High contrast
- Font scaling

### Mobile Support
- Touch friendly
- Offline mode
- Quick actions
- Share options