# Trang: Đăng Nhập

## Mục Đích
Cho phép người dùng đăng nhập vào hệ thống một cách nhanh chóng và an toàn, với nhiều phương thức xác thực.

## Thành Phần Chính

### 1. Form Đăng Nhập
- Logo Planora (ở trên cùng)
- Tiêu đề "Đăng nhập vào Planora"
- Trường Email/Username:
  - Label: "Email hoặc tên đăng nhập"
  - Placeholder: "example@email.com"
  - Validation: Email/username hợp lệ
- Trường Password:
  - Label: "Mật khẩu"
  - Type: password với toggle hiện/ẩn
  - Placeholder: "••••••••"
- Checkbox "Ghi nhớ đăng nhập"
- Link "Quên mật khẩu?" (góc phải)
- Nút đăng nhập chính:
  - Text: "Đăng nhập"
  - Full width
  - Primary color

### 2. Đăng Nhập Bằng Mạng Xã Hội
- Divider với text "hoặc"
- Nút Google OAuth:
  - Icon Google
  - Text: "Đăng nhập với Google"
  - Light background
- Nút Facebook OAuth (tương tự Google)

### 3. Footer
- Text: "Chưa có tài khoản?"
- Link đăng ký: "Đăng ký ngay"

## Trải Nghiệm Người Dùng (UX)

### Loading States
- Nút đăng nhập hiển thị spinner khi đang xử lý
- Disable tất cả input trong quá trình xử lý
- Skeleton loading cho avatar nếu "Ghi nhớ đăng nhập"

### Error States
- Thông báo lỗi rõ ràng phía trên form
- Highlight trường input có lỗi
- Văn bản gợi ý cách khắc phục

### Success Flow
- Animation checkmark nhỏ
- Redirect về trang trước đó hoặc dashboard
- Toast thông báo "Đăng nhập thành công"

## Layout & Style

### Desktop
```
+------------------------+
|         Logo           |
|     Đăng nhập vào     |
|        Planora        |
|                       |
| [     Email     ]     |
| [   Password    ]     |
| [ ] Ghi nhớ  [Quên?] |
| [    Đăng nhập    ]   |
|    ---- hoặc ----     |
| [  Login với Google ] |
| [ Login với Facebook] |
|                       |
| Chưa có tài khoản?    |
|    Đăng ký ngay      |
+------------------------+
```

### Mobile
- Stack các thành phần dọc
- Form width: 90%
- Padding: 16px
- Bottom spacing: 24px

### Style Guidelines
- Width tối đa form: 400px
- Border-radius: 8px cho inputs & buttons
- Shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
- Transitions: 0.2s ease-in-out
- Focus states rõ ràng cho accessibility

## Chú Ý Bổ Sung
- Hỗ trợ điền form tự động (autocomplete)
- Thêm thuộc tính ARIA cho accessibility
- Lưu URL redirect trong query param
- Xử lý session timeout với modal thông báo
- Rate limiting để tránh brute force