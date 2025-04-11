# Trang: Admin Dashboard

## Mục Đích
Cung cấp giao diện tổng quan cho admin để theo dõi, phân tích và quản lý toàn bộ hoạt động của hệ thống.

## Thành Phần Chính

### 1. Top Navigation
```
+------------------------------------------------+
| [Logo] Dashboard | Users | Places | Reports     |
|         [Notifications] [Admin: Nguyễn A] [...]  |
+------------------------------------------------+
```

### 2. Key Metrics Cards
```
+------------+ +------------+ +------------+ +------------+
| Users      | | Plans      | | Bookings   | | AI Usage   |
| 12,453     | | 3,242     | | 1,890     | | 15,678    |
| +2.4% MoM  | | +5.1% MoM | | +1.2% MoM | | +8.7% MoM |
+------------+ +------------+ +------------+ +------------+
```

### 3. Quick Stats Grid
#### System Health
- Server status
- API response time
- Error rate
- Cache hit ratio

#### User Activity
- DAU/MAU
- Session duration
- Conversion rate
- Bounce rate

### 4. Main Dashboard Sections

#### Performance Charts
```
+------------------------+
|   System Performance   |
|                       |
|   [Line Chart]        |
|   Last 30 days        |
|   • Response Time     |
|   • Error Rate        |
|   • API Calls         |
+------------------------+
```

#### User Analytics
```
+------------------------+
|    User Engagement     |
|                       |
|    [Area Chart]       |
|    • Active Users     |
|    • New Signups      |
|    • Premium Convert  |
+------------------------+
```

#### Recent Activity Feed
```
+------------------------+
| ● New user registered |
|   2 minutes ago       |
| ● Plan created        |
|   5 minutes ago       |
| ● Booking completed   |
|   15 minutes ago      |
+------------------------+
```

### 5. Management Tools

#### Quick Actions
- Suspend user
- Reset password
- Clear cache
- Force sync
- System broadcast

#### Batch Operations
- Export data
- Update prices
- Send notifications
- Archive old data

### 6. Report Widgets

#### Top Destinations
```
+-------------------------+
| 1. Hà Nội     (1,234)  |
| 2. Đà Nẵng    (987)    |
| 3. Hồ Chí Minh (876)   |
| 4. Nha Trang   (654)   |
| [View full report]      |
+-------------------------+
```

#### User Demographics
- Age distribution
- Location heat map
- Device usage
- User preferences

## Trải Nghiệm Người Dùng (UX)

### Dashboard Customization
- Drag & drop widgets
- Save layouts
- Custom date ranges
- Export options

### Real-time Updates
- WebSocket connections
- Push notifications
- Alert thresholds
- Status indicators

### Interactive Elements
- Hoverable charts
- Drill-down capabilities
- Quick filters
- Context menus

### Responsive Behavior

#### Desktop Layout (>1200px)
```
+------------+---------------------+
|            |                    |
| Sidebar    |  Main Content      |
| Navigation |                    |
|            |  [Flexible Grid]   |
|            |                    |
|            |                    |
+------------+---------------------+
```

#### Tablet Layout (768px - 1200px)
- Collapsible sidebar
- Stacked widgets
- Scrollable tables
- Touch-friendly controls

#### Mobile Layout (<768px)
- Bottom navigation
- Card-based layout
- Simplified charts
- Essential metrics only

## Style Guidelines

### Data Visualization
- Chart colors:
  - Primary: #4F46E5
  - Success: #10B981
  - Warning: #F59E0B
  - Danger: #EF4444
- Consistent scales
- Clear legends
- Interactive tooltips

### Typography
- Headers: 20px/700
- Subheaders: 16px/600
- Body: 14px/400
- Metrics: 24px/700
- Labels: 12px/500

### Spacing & Layout
- Grid gap: 20px
- Card padding: 24px
- Chart margins: 16px
- Widget spacing: 32px

## Additional Features

### Analytics Tools
- Custom reports
- Data export
- Trend analysis
- Forecast modeling

### System Monitoring
- Resource usage
- API performance
- Error tracking
- Security alerts

### User Management
- Role assignments
- Access logs
- Activity tracking
- Support tickets

### Content Management
- Place updates
- Price adjustments
- Special offers
- System notices

## Chú Ý Bổ Sung

### Performance
- Lazy load widgets
- Data pagination
- Cache strategies
- Optimized queries

### Security
- Role-based access
- Audit logging
- Session tracking
- IP restrictions

### Maintenance
- Backup controls
- Cache management
- System updates
- Data cleanup

### Support Tools
- User impersonation
- Debug console
- Error logs
- API testing