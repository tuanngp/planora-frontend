# Trang: Đăng Ký Tài Khoản

## Mục Đích
Cho phép người dùng tạo tài khoản mới một cách dễ dàng, với form đăng ký rõ ràng và validation thời gian thực.

## Thành Phần Chính

### 1. Header
- Logo Planora
- Tiêu đề "Tạo tài khoản mới"
- Subtitle: "Bắt đầu lập kế hoạch du lịch của bạn"

### 2. Form Đăng Ký
- Trường Họ tên:
  - Label: "Họ tên đầy đủ"
  - Placeholder: "Nguyễn Văn A"
  - Validation: Ít nhất 2 từ
  
- Trường Email:
  - Label: "Email"
  - Placeholder: "example@email.com"
  - Validation: Email hợp lệ
  - Note: "Email này sẽ được dùng để xác thực tài khoản"

- Trường Password:
  - Label: "Mật khẩu"
  - Requirements hiển thị bên dưới:
    - Ít nhất 8 ký tự
    - Chữ hoa và chữ thường
    - Số hoặc ký tự đặc biệt
  - Indicator độ mạnh mật khẩu
  
- Xác nhận Password:
  - Label: "Nhập lại mật khẩu"
  - Validation: Phải khớp với mật khẩu

- Checkbox đồng ý:
  - "Tôi đồng ý với [Điều khoản] và [Chính sách bảo mật]"
  - Links mở trong modal

### 3. Đăng Ký Nhanh
- Divider "hoặc đăng ký nhanh với"
- Các nút mạng xã hội:
  - Google (với icon)
  - Facebook (với icon)
- Note: "Chúng tôi sẽ không đăng gì lên trang cá nhân của bạn"

### 4. Footer
- "Đã có tài khoản?"
- Link "Đăng nhập" (primary color)

## Trải Nghiệm Người Dùng (UX)

### Validation Thời Gian Thực
- Hiển thị tick xanh khi trường hợp lệ
- Hiển thị error ngay khi blur khỏi input
- Tooltip gợi ý format với ví dụ
- Disable nút đăng ký khi form chưa hợp lệ

### Loading States
- Spinner trên nút đăng ký
- Disable form khi đang xử lý
- Progress bar cho quá trình upload avatar (nếu có)

### Success Flow
1. Animation checkmark
2. Toast thông báo thành công
3. Redirect tới trang xác thực email
4. Email xác thực được gửi tự động

### Error Handling
- Error messages dưới mỗi field
- Highlight field có lỗi
- Giữ nguyên dữ liệu đã nhập
- Thông báo lỗi chung ở đầu form

## Layout & Style

### Desktop Layout
```
+-------------------------+
|          Logo           |
|    Tạo tài khoản mới   |
|                         |
|  [      Họ tên      ]  |
|  [      Email       ]  |
|  [    Mật khẩu      ]  |
|  [ Nhập lại mật khẩu]  |
|  [ ] Đồng ý điều khoản |
|                         |
|  [    Đăng ký ngay  ]  |
|                         |
|  ---- hoặc với ----    |
|  [ Google ] [Facebook] |
|                         |
|    Đã có tài khoản?    |
|       Đăng nhập        |
+-------------------------+
```

### Mobile Adjustments
- Stack buttons vertically
- Full width inputs
- Increased touch targets
- Collapsible password requirements

### Style Guidelines
- Max width: 480px
- Padding: 24px
- Spacing giữa fields: 20px
- Input height: 48px
- Border radius: 8px
- Font: Inter
- Font size: 16px (mobile), 14px (desktop)

## Chú Ý Bổ Sung
- Hỗ trợ paste password an toàn
- Clear form data khi rời trang
- Prevent double submission
- Theo dõi completion rate
- A/B test form layouts
- Hỗ trợ keyboard navigation
- ARIA labels đầy đủ
- Custom validation messages rõ ràng