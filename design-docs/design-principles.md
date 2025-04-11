# Nguyên Tắc Thiết Kế UI/UX - Planora

## Triết Lý Thiết Kế
Tạo ra trải nghiệm du lịch mượt mà, trực quan và đầy cảm hứng thông qua giao diện hiện đại, chuyên nghiệp và thân thiện.

## Hệ Thống Màu Sắc

### Màu Chủ Đạo
```
Primary:    #4F46E5 → #818CF8  // Indigo: Chuyên nghiệp, đáng tin cậy
Secondary:  #10B981 → #34D399  // Emerald: Tươi mới, tích cực
Accent:     #F59E0B → #FBBF24  // Amber: Năng động, nổi bật
```

### Màu Chức Năng
```
Success:    #059669 // Forest Green
Warning:    #D97706 // Dark Amber
Error:      #DC2626 // Crimson
Info:       #3B82F6 // Blue
```

### Màu Nền & Text
```
Background: 
- Light: #FFFFFF → #F9FAFB
- Dark:  #111827 → #1F2937

Text:
- Primary:   #111827 (dark) / #F9FAFB (light)
- Secondary: #4B5563 (dark) / #E5E7EB (light)
- Disabled:  #9CA3AF
```

## Typography

### Font Stack
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-display: 'Montserrat', var(--font-primary);
--font-mono: 'JetBrains Mono', monospace;
```

### Font Sizes
```
Display:    32px/40px (2rem)
H1:         28px/36px (1.75rem)
H2:         24px/32px (1.5rem)
H3:         20px/28px (1.25rem)
Body:       16px/24px (1rem)
Small:      14px/20px (0.875rem)
Tiny:       12px/16px (0.75rem)
```

### Font Weights
```
Regular:    400
Medium:     500
Semibold:   600
Bold:       700
```

## Spacing System

### Grid
- Container max-width: 1280px
- Column gap: 24px
- Row gap: 32px
- Section spacing: 64px

### Component Spacing
```
xs: 4px   // Minimal spacing
sm: 8px   // Tight spacing
md: 16px  // Standard spacing
lg: 24px  // Comfortable spacing
xl: 32px  // Generous spacing
2xl: 48px // Section spacing
```

## Shadows & Depth

### Elevation Levels
```css
--shadow-sm:  0 1px 2px rgba(0,0,0,0.05);
--shadow-md:  0 4px 6px -1px rgba(0,0,0,0.1);
--shadow-lg:  0 10px 15px -3px rgba(0,0,0,0.1);
--shadow-xl:  0 20px 25px -5px rgba(0,0,0,0.1);
```

### Depth Principles
- Sử dụng shadow tạo chiều sâu tự nhiên
- Cards nổi 4-8px trên background
- Dropdowns/Modals nổi 16-24px
- Transitions mượt mà: 0.2s ease-in-out

## Hình Dạng & Bo Góc

### Border Radius
```css
--radius-sm:  4px   // Buttons, tags
--radius-md:  8px   // Cards, inputs
--radius-lg:  12px  // Modals, large cards
--radius-xl:  16px  // Feature sections
--radius-full: 9999px // Pills, avatars
```

### Borders
```css
--border-thin:  1px
--border-med:   2px
--border-thick: 4px
```

## Animation & Transitions

### Timing
```css
--transition-fast:   150ms
--transition-med:    200ms
--transition-slow:   300ms
--transition-curve:  cubic-bezier(0.4, 0, 0.2, 1)
```

### Hover States
- Scale: 1.02-1.05 cho cards
- Brightness: 1.05-1.1 cho buttons
- Shadow tăng nhẹ
- Opacity: 0.9-0.95 cho icons

## Components Design

### Buttons
```
Primary:   Solid bg + white text
Secondary: Outlined + color text
Ghost:     Transparent + color text
Icon:      Circle/square with icon
```

### Cards
- Padding: 24px
- Border radius: 12px
- Shadow: md→lg on hover
- Background: White/Gray-50
- Border: Tùy chọn, light gray

### Forms
- Label trên input
- Placeholder text rõ ràng
- Validation states với icons
- Error messages inline
- Helper text khi cần

### Icons
- Stroke width: 1.5-2px
- Size: 20px/24px
- Consistent style
- Optional background
- Color inheritance

## Responsive Design

### Breakpoints
```css
--bp-sm:   640px   // Mobile landscape
--bp-md:   768px   // Tablets
--bp-lg:   1024px  // Desktop
--bp-xl:   1280px  // Large desktop
--bp-2xl:  1536px  // Extra large
```

### Mobile First
- Stack layout tự nhiên
- Touch targets >= 44px
- Font size tăng 10-15%
- Spacing tăng 20-30%
- Simplified navigation

## Hiệu Ứng & Polish

### Loading States
- Skeleton screens
- Pulse animation
- Progress indicators
- Transition states

### Micro-interactions
- Button ripples
- Hover reveals
- Scroll animations
- Form feedback
- Success states

### Visual Feedback
- Clear focus states
- Loading spinners
- Success checkmarks
- Error highlights
- Toast messages

## Nguyên Tắc Accessibility

### Contrast & Color
- WCAG AA minimum
- Color không phải indicator duy nhất
- Dark mode support
- High contrast mode

### Keyboard Navigation
- Visible focus states
- Logical tab order
- Skip links
- Keyboard shortcuts

### Screen Readers
- ARIA labels
- Alt text
- Semantic HTML
- Announcement của state changes

## Quy Tắc Thương Hiệu

### Photography
- Chất lượng cao
- Nhất quán về tone màu
- Focus vào trải nghiệm
- Đa dạng & inclusive

### Illustrations
- Style nhất quán
- Color palette hạn chế
- Supporting role
- Meaningful use

### Icons & Graphics
- Single weight/style
- Padding nhất quán
- Pixel perfect
- Semantic meaning

## Best Practices

### Performance
- Lazy loading
- Image optimization
- Code splitting
- Caching strategies
- Bundle size control

### Consistency
- Component reuse
- Design tokens
- Pattern library
- Documentation
- Style guide

### Quality Assurance
- Cross-browser testing
- Device testing
- Accessibility audit
- Performance metrics
- User testing