# Tài Liệu Thiết Kế UI - Planora

## Giới Thiệu
Tài liệu này mô tả chi tiết các thiết kế giao diện người dùng cho ứng dụng Planora - Nền tảng lập kế hoạch du lịch tự động.

## Cấu Trúc Thư Mục

### 1. Trang Chính và Xác Thực
- [Trang Chủ](./main/home.md)
- [Đăng Nhập](./main/login.md)
- [Đăng Ký](./main/register.md)
- [Quên Mật Khẩu](./main/forgot-password.md)
- [Hồ Sơ Người Dùng](./main/user-profile.md)
- [Gói Dịch Vụ](./main/pricing.md)

### 2. Tạo và Quản Lý Kế Hoạch
- [Tạo Kế Hoạch Mới](./planner/create-plan.md)
- [Chỉnh Sửa Kế Hoạch](./planner/edit-plan.md)
- [Xem Chi Tiết Kế Hoạch](./planner/plan-details.md)
- [Lịch Sử Kế Hoạch](./planner/plan-history.md)
- [TravelBot AI](./planner/travel-bot.md)

### 3. Tìm Kiếm và Đặt Chỗ Ở
- [Tìm Kiếm Chỗ Ở](./booking/search-accommodation.md)
- [Chi Tiết Chỗ Ở](./booking/accommodation-details.md)
- [Đặt Chỗ](./booking/booking-process.md)

### 4. Quản Lý Nhóm và Chia Sẻ
- [Quản Lý Nhóm](./group/group-management.md)
- [Chia Sẻ Kế Hoạch](./group/plan-sharing.md)
- [Bình Chọn Hoạt Động](./group/activity-voting.md)

### 5. Admin Panel
- [Tổng Quan](./admin/dashboard.md)
- [Quản Lý Người Dùng](./admin/user-management.md)
- [Quản Lý Địa Điểm](./admin/location-management.md)
- [Báo Cáo & Thống Kê](./admin/reports.md)

## Nguyên Tắc Thiết Kế

### Màu Sắc Chủ Đạo
- Primary: #4F46E5 (Indigo)
- Secondary: #10B981 (Emerald)
- Accent: #F59E0B (Amber)
- Background: #F3F4F6
- Text: #111827

### Typography
- Font chính: Inter
- Font phụ: Roboto
- Base size: 16px
- Line height: 1.5

### Spacing
- Base unit: 4px
- Padding sections: 24px
- Margin components: 16px
- Grid gap: 20px

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Các Nguyên Tắc UX
1. Thiết kế responsive và mobile-first
2. Tối ưu khả năng truy cập (WCAG 2.1)
3. Phản hồi trực quan cho mọi tương tác
4. Loading states rõ ràng
5. Error handling thân thiện
6. Consistent design patterns