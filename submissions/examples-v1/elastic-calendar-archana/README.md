# 📅 Elastic Calendar

A pure CSS interactive calendar component inspired by elastic/bouncy motion patterns. Built for EaseMotion CSS with smooth animations, date selection, and full accessibility support.

## ✨ Features

- **Pure CSS** - No JavaScript required (demo includes optional JS for state management)
- **Elastic Animations** - Bouncy, fluid motion on hover and selection
- **EaseMotion Integration** - Uses CSS variables and keyframes for consistent animations
- **Date Selection** - Interactive date picking with visual feedback
- **Month Navigation** - Previous/Next month buttons with elastic effects
- **Today Indicator** - Highlighted current date with pulsing animation
- **Multiple States** - Past dates, future dates, today, and selected states
- **Fully Accessible** - WCAG AA compliant with keyboard navigation and ARIA labels
- **Responsive Design** - Adapts beautifully to all screen sizes
- **Dark Mode Support** - Automatic color scheme detection
- **Compact Variant** - Space-saving smaller version
- **Browser Compatible** - Works in all modern browsers

## 📦 Installation

Copy the component files to your EaseMotion CSS project:

```
submissions/examples/elastic-calendar-archana/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Quick Start

### Basic HTML Structure

```html
<div class="elastic-calendar">
    <!-- Header with month/year and navigation -->
    <div class="calendar-header">
        <button class="calendar-nav calendar-nav--prev" aria-label="Previous month">‹</button>
        <div class="calendar-month-year">
            <span class="calendar-month">December</span>
            <span class="calendar-year">2024</span>
        </div>
        <button class="calendar-nav calendar-nav--next" aria-label="Next month">›</button>
    </div>

    <!-- Weekday headers -->
    <div class="calendar-weekdays">
        <div class="weekday" aria-label="Sunday">Sun</div>
        <div class="weekday" aria-label="Monday">Mon</div>
        <!-- ... other weekdays ... -->
    </div>

    <!-- Calendar days grid -->
    <div class="calendar-days">
        <!-- Previous month dates (non-interactive) -->
        <span class="calendar-day calendar-day--other">25</span>
        
        <!-- Current month dates (interactive) -->
        <button class="calendar-day calendar-day--past" data-date="2024-12-02">2</button>
        <button class="calendar-day calendar-day--today" data-date="2024-12-15">15</button>
        <button class="calendar-day calendar-day--future" data-date="2024-12-20">20</button>
        
        <!-- Next month dates (non-interactive) -->
        <span class="calendar-day calendar-day--other">1</span>
    </div>
</div>
```

### Include the CSS

```html
<link rel="stylesheet" href="style.css">
```

## 🎨 State Variants

### Past Dates
Past dates (before today) display in neutral gray with subtle hover effect.

```html
<button class="calendar-day calendar-day--past" data-date="2024-12-05">5</button>
```

### Today Indicator
The current date is highlighted with an amber gradient and continuous pulsing animation.

```html
<button class="calendar-day calendar-day--today" data-date="2024-12-15">15</button>
```

### Future Dates
Future dates display with dynamic gradient on hover and elastic pop animation.

```html
<button class="calendar-day calendar-day--future" data-date="2024-12-25">25</button>
```

### Other Months
Non-interactive dates from previous/next months appear dimmed.

```html
<span class="calendar-day calendar-day--other">30</span>
```

### Selected Date
Applied when a date is clicked; shows primary gradient with bounce animation.

```html
<!-- Automatically added via JavaScript on click -->
<button class="calendar-day calendar-day--selected">20</button>
```

## 🎬 Animations

### Elastic Scale
Main entrance animation for calendar and days with elastic easing.
- **Duration**: 0.6s
- **Easing**: `cubic-bezier(0.175, 0.885, 0.32, 1.275)`
- **Effect**: Smooth scale-up with slight overshoot

### Elastic Bounce
Applied to navigation buttons and selected dates.
- **Duration**: 0.5s
- **Easing**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`
- **Effect**: Bouncy scale animation

### Elastic Pop
Used when hovering on future dates.
- **Duration**: 0.4s
- **Easing**: Cubic-bezier bounce
- **Effect**: Scale and fade pop animation

### Elastic Pulse
Continuous animation on today's date indicator.
- **Duration**: 2s
- **Effect**: Radial pulse with box-shadow

### Staggered Entrance
Days animate in sequence from left to right, top to bottom.
- **Delay Range**: 0.02s - 0.3s per day
- **Creates**: Wave-like animation effect

## ♿ Accessibility Features

### Keyboard Navigation
- **Tab**: Navigate through interactive elements
- **Shift+Tab**: Navigate backwards
- **Space/Enter**: Activate buttons (select dates, navigate months)
- **Arrow Keys**: Can be added via JavaScript for advanced navigation

### Screen Reader Support
```html
<!-- Clear labels for navigation -->
<button class="calendar-nav calendar-nav--prev" aria-label="Previous month">‹</button>

<!-- Special marking for today -->
<button class="calendar-day calendar-day--today" aria-label="Today, December 15">15</button>

<!-- Semantic weekday labels -->
<div class="weekday" aria-label="Monday">Mon</div>
```

### Focus Indicators
- **2px solid outline** on focus for keyboard navigation
- **2px offset** for visibility against all backgrounds
- **High contrast** in both light and dark modes
- **Works with Windows High Contrast mode**

### Motion Preferences
Respects user's motion preferences:
```css
@media (prefers-reduced-motion: reduce) {
    /* All animations are disabled */
}
```

### Color Contrast
- All text and interactive elements meet WCAG AA+ contrast ratios
- Works in light and dark modes
- High contrast mode support (3px borders)
- Color-coded states don't rely solely on color for meaning

### Touch Accessibility
- Minimum 40px touch targets on mobile devices
- Proper spacing between interactive elements (8px minimum gap)
- No touch delays or hover-only content

## 🎨 CSS Variables

Customize the component by overriding CSS variables:

```css
:root {
    /* Colors */
    --elastic-primary: #667eea;
    --elastic-secondary: #764ba2;
    --elastic-success: #10b981;
    --elastic-today: #f59e0b;
    --elastic-past: #d1d5db;
    --elastic-neutral: #f3f4f6;
    --elastic-text: #333;
    --elastic-text-light: #999;
    --elastic-border: #e5e7eb;
    
    /* Sizing */
    --calendar-gap: 8px;
    --calendar-day-size: 40px;
    
    /* Shadows */
    --elastic-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    --elastic-shadow-active: 0 8px 16px rgba(102, 126, 234, 0.2);
    
    /* Easing Functions */
    --ease-elastic-out: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Custom Theme Example

```css
/* Override for custom brand colors */
.my-custom-calendar {
    --elastic-primary: #ff6b6b;
    --elastic-today: #4ecdc4;
    --elastic-past: #95e1d3;
}
```

## 📱 Responsive Behavior

The component automatically adapts to screen sizes:

| Device | Day Size | Gap | Notes |
|--------|----------|-----|-------|
| Desktop (1200px+) | 40px | 8px | Full interactive features |
| Tablet (768px) | 36px | 7px | Optimized for touch |
| Mobile (400px) | 32px | 6px | Compact layout |
| Small Mobile (320px) | 28px | 5px | Minimal spacing |

## 🌙 Dark Mode

Automatic dark mode support using `prefers-color-scheme`:

```css
@media (prefers-color-scheme: dark) {
    .elastic-calendar {
        background: #1f2937;
        /* Colors automatically adjust */
    }
}
```

## 🔧 Customization

### Change Primary Color
```css
.elastic-calendar {
    --elastic-primary: #your-color-here;
}
```

### Adjust Animation Speed
```css
.elastic-calendar {
    --ease-elastic-out: cubic-bezier(0.16, 1, 0.3, 1); /* Faster */
}
```

### Modify Day Size
```css
.elastic-calendar {
    --calendar-day-size: 48px; /* Larger days */
    --calendar-gap: 10px; /* More spacing */
}
```

### Create Compact Variant
```html
<div class="elastic-calendar elastic-calendar--compact">
    <!-- Content -->
</div>
```

## 📊 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ IE 11 (limited support, no animations)

## 🎓 Design Inspiration

The **Elastic** variant draws inspiration from elastic and bouncy motion patterns, evoking a sense of playfulness and energy. The animations provide satisfying visual feedback while maintaining clarity and usability. Each interaction feels responsive and alive.

## 📝 Usage Examples

### Basic Calendar Picker
```html
<form>
    <label>Select a date:</label>
    <div class="elastic-calendar">
        <!-- Calendar structure -->
    </div>
</form>
```

### Event Booking UI
```html
<div class="booking-section">
    <h3>Choose your date</h3>
    <div class="elastic-calendar"></div>
    <button class="book-btn">Book Appointment</button>
</div>
```

### Multi-Month View
```html
<div class="calendar-container">
    <div class="elastic-calendar"><!-- December --></div>
    <div class="elastic-calendar"><!-- January --></div>
</div>
```

### Date Range Selector
```html
<div class="date-range-picker">
    <label>Start Date</label>
    <div class="elastic-calendar"><!-- First calendar --></div>
    <label>End Date</label>
    <div class="elastic-calendar"><!-- Second calendar --></div>
</div>
```

## 🔌 JavaScript Integration (Optional)

The demo includes optional JavaScript for interactivity:

```javascript
// Handle date selection
document.querySelectorAll('.calendar-day:not(.calendar-day--other)').forEach(day => {
    day.addEventListener('click', function(e) {
        // Clear previous selection
        document.querySelectorAll('.calendar-day').forEach(d => 
            d.classList.remove('calendar-day--selected')
        );
        // Select clicked date
        if (!this.classList.contains('calendar-day--other')) {
            this.classList.add('calendar-day--selected');
        }
    });
});

// Handle today button
document.querySelector('.calendar-today-btn').addEventListener('click', function() {
    document.querySelector('.calendar-day--today').classList.add('calendar-day--selected');
});
```

## 🚀 Advanced Features

### Date Range Selection
Combine multiple calendar instances with JavaScript to create date range selectors.

### Disabled Dates
Apply `.calendar-day--disabled` class to make dates non-interactive:
```html
<button class="calendar-day calendar-day--disabled">15</button>
```

### Event Indicators
Extend the structure to show event dots on specific dates:
```html
<button class="calendar-day calendar-day--future">
    20
    <span class="event-dot"></span>
</button>
```

### Holiday Highlighting
Create custom variants for holidays:
```css
.calendar-day--holiday {
    background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
}
```

## 🤝 Contributing

This component is part of the EaseMotion CSS library for GSSoC '26. Contributions and improvements are welcome!

## 📄 License

This component is part of the EaseMotion CSS library and follows its license terms.

---

**Created for GSSoC '26** | **EaseMotion CSS** | **Pure CSS Component**