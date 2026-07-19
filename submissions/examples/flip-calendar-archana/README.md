# 🎨 Flip Calendar Component

A smooth, interactive calendar component with 3D flip animations built using pure CSS and EaseMotion CSS variables. Perfect for date selection interfaces, event calendars, and analytics dashboards.

## ✨ Features

- **Pure CSS Animations** - No JavaScript required (optional interactivity included)
- **3D Flip Effects** - Smooth `rotateY` and `rotateX` transformations with scale
- **EaseMotion Variables** - Uses cubic-bezier easing functions for natural motion
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Accessible** - WCAG compliant with focus states and reduced-motion support
- **Customizable** - Multiple style variants (default, minimal, dark)
- **Date States** - Support for active, today, inactive, and event indicators
- **No Dependencies** - Vanilla CSS with optional vanilla JavaScript

## 📁 File Structure

```
flip-calendar-archana/
├── demo.html          # Interactive demo with multiple calendar variants
├── style.css          # Component styles with EaseMotion variables
└── README.md          # Documentation
```

## 🚀 Quick Start

### Basic HTML Structure

```html
<div class="calendar">
    <div class="month-grid">
        <div class="month-header">January 2024</div>
        <div class="day-label">Mo Tu We Th Fr Sa Su</div>
        
        <!-- Regular date -->
        <div class="date-flip">1</div>
        
        <!-- Active/Selected date (with flip animation) -->
        <div class="date-flip highlight">15</div>
        
        <!-- Today indicator -->
        <div class="date-flip today">12</div>
        
        <!-- Inactive/Disabled date -->
        <div class="date-flip inactive">0</div>
    </div>
</div>
```

### Include the CSS

```html
<link rel="stylesheet" href="style.css">
```

## 🎯 Component Classes

### Container Classes

| Class | Purpose |
|-------|---------|
| `.calendar` | Main calendar container with perspective |
| `.month-grid` | Grid wrapper for calendar layout (7 columns) |
| `.month-header` | Month/year title |
| `.day-label` | Day of week labels (Mo, Tu, We, etc.) |

### Date Classes

| Class | Effect |
|-------|--------|
| `.date-flip` | Base date cell (default style) |
| `.date-flip.highlight` | Selected/active date with flip animation |
| `.date-flip.today` | Current day indicator with border |
| `.date-flip.inactive` | Disabled date (grayed out) |
| `.date-flip.event` | Event indicator with dot |

## 🎬 Animation Classes (EaseMotion CSS)

```css
/* Available animation utilities */
.ease-flip-x          /* Flip around X-axis */
.ease-flip-y          /* Flip around Y-axis (primary) */
.ease-flip-scale      /* Flip with scale effect */
.ease-flip-shadow     /* Flip with dynamic shadow */
.ease-pulse           /* Pulsing opacity animation */
.ease-bounce          /* Subtle bounce effect */
```

### Example: Apply Animation to Date

```html
<div class="date-flip ease-flip-y">15</div>
```

## 🎨 Style Variants

### Default (Gradient)

```html
<div class="calendar">
    <div class="month-grid">
        <!-- Uses purple gradient background -->
    </div>
</div>
```

### Minimal Style

```html
<div class="calendar minimal">
    <div class="month-grid">
        <!-- Clean borders, minimal background -->
    </div>
</div>
```

### Dark Style

```html
<div class="calendar dark">
    <div class="month-grid">
        <!-- Dark theme for night mode -->
    </div>
</div>
```

## 🔧 CSS Variables (Customization)

Customize colors and animations by overriding these variables:

```css
:root {
    /* Easing Functions */
    --ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
    --ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
    --ease-back-out: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    /* Colors */
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --bg-light: #f8f9fa;
    --bg-white: #ffffff;
    --text-dark: #333333;
    
    /* Shadows */
    --shadow-md: 0 8px 20px rgba(0, 0, 0, 0.12);
    --shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.3);
}
```

### Custom Theme Example

```css
.calendar.custom {
    --primary-gradient: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
    --bg-light: #fafafa;
    --text-dark: #2c3e50;
}
```

## 📱 Responsive Behavior

- **Desktop (> 768px)**: Full-size calendar with 8px gaps
- **Tablet (≤ 768px)**: Reduced padding (15px), 6px gaps
- **Mobile (≤ 480px)**: Minimal padding (10px), 4px gaps, 75% font size

## ♿ Accessibility Features

- **Focus States**: Keyboard navigation with visible focus outline
- **Color Contrast**: WCAG AA compliant text contrast ratios
- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **Semantic HTML**: Proper heading hierarchy and structure

## 🔄 Interactive Example (With Optional JS)

```html
<script>
    // Add click handler for date selection
    document.querySelectorAll('.date-flip:not(.inactive)').forEach(date => {
        date.addEventListener('click', function() {
            // Remove highlight from all dates
            document.querySelectorAll('.date-flip.highlight').forEach(d => {
                d.classList.remove('highlight');
            });
            // Add highlight to clicked date
            this.classList.add('highlight');
        });
    });
</script>
```

## 🎬 Keyframe Animations Included

### `ease-flip-y` (Primary)
Flips the date card on Y-axis (left-to-right rotation)

```css
@keyframes ease-flip-y {
    0% { transform: rotateY(0deg); }
    50% { transform: rotateY(90deg); }
    100% { transform: rotateY(0deg); }
}
```

### `ease-flip-scale`
Combines flip with scale effect for depth

```css
@keyframes ease-flip-scale {
    0% { transform: rotateY(0deg) scale(1); }
    50% { transform: rotateY(90deg) scale(1.15); }
    100% { transform: rotateY(0deg) scale(1); }
}
```

### `ease-flip-shadow`
Dynamic shadow effect synchronized with flip

```css
@keyframes ease-flip-shadow {
    0% { box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }
    50% { box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3); }
    100% { box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }
}
```

## 💡 Use Cases

- **Date Pickers** - Interactive date selection for forms
- **Event Calendars** - Highlight important dates and events
- **Analytics Dashboards** - Visual date range selectors
- **Booking Interfaces** - Appointment scheduling systems
- **Project Management** - Timeline and deadline visualization

## 🔍 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Learning Resources

This component demonstrates:
- CSS Grid for layout
- 3D transforms with `perspective` and `rotateY`
- CSS custom properties (variables)
- CSS animations with easing functions
- Responsive design patterns
- Accessibility best practices

## 📝 Notes

- The component uses `perspective: 1000px` for 3D effects
- Animation duration is 0.6s with cubic-bezier easing
- All hover states use `transition: all 0.3s` for smooth interactions
- Print styles are optimized for calendar printing

## 🚀 Enhancement Ideas

- Add month/year navigation buttons
- Integrate with JavaScript date libraries (Date.js, Moment.js)
- Add range selection support
- Include time selection (time picker variant)
- Add drag-to-select functionality
- Create week view variant

## 📄 License

This component is part of EaseMotion CSS and follows the same license terms.

## ✍️ Credits

**Component**: Flip Calendar with 3D Animations  
**Contributor**: Archana Nair  
**Framework**: EaseMotion CSS  
**Inspired by**: Analytics Dashboard UI patterns

---

**Happy animating! 🎨✨**