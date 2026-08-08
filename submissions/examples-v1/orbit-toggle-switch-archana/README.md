# 🌍 Orbit Toggle Switch

A pure CSS toggle switch component inspired by orbital/circular design patterns. Built for EaseMotion CSS with smooth animations, accessibility features, and multiple size and color variants.

## ✨ Features

- **Pure CSS** - No JavaScript required
- **Orbital Animation** - Smooth pulsing effect when toggled
- **EaseMotion Integration** - Uses CSS variables and keyframes
- **Multiple Sizes** - Small, Medium, and Large variants
- **Color Variants** - Primary, Success, Danger, and Warning color schemes
- **Fully Accessible** - Keyboard navigation, focus states, ARIA labels, and reduced motion support
- **Responsive Design** - Adapts to different screen sizes
- **Dark Mode Support** - Automatic color scheme detection
- **Browser Compatible** - Works in all modern browsers

## 📦 Installation

Copy the component files to your EaseMotion CSS project:

```
submissions/examples/orbit-toggle-switch-archana/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Quick Start

### Basic HTML Structure

```html
<label class="orbit-toggle-switch">
    <input type="checkbox" aria-label="Toggle option">
    <span class="toggle-track">
        <span class="toggle-thumb"></span>
    </span>
</label>
```

### Include the CSS

```html
<link rel="stylesheet" href="style.css">
```

## 🎨 Variants

### Size Variations

```html
<!-- Small -->
<label class="orbit-toggle-switch orbit-toggle-switch--sm">
    <input type="checkbox" checked>
    <span class="toggle-track">
        <span class="toggle-thumb"></span>
    </span>
</label>

<!-- Medium (Default) -->
<label class="orbit-toggle-switch">
    <input type="checkbox" checked>
    <span class="toggle-track">
        <span class="toggle-thumb"></span>
    </span>
</label>

<!-- Large -->
<label class="orbit-toggle-switch orbit-toggle-switch--lg">
    <input type="checkbox" checked>
    <span class="toggle-track">
        <span class="toggle-thumb"></span>
    </span>
</label>
```

### Color Variants

```html
<!-- Primary (Default) -->
<label class="orbit-toggle-switch orbit-toggle-switch--primary">
    <input type="checkbox" checked>
    <span class="toggle-track">
        <span class="toggle-thumb"></span>
    </span>
</label>

<!-- Success -->
<label class="orbit-toggle-switch orbit-toggle-switch--success">
    <input type="checkbox" checked>
    <span class="toggle-track">
        <span class="toggle-thumb"></span>
    </span>
</label>

<!-- Danger -->
<label class="orbit-toggle-switch orbit-toggle-switch--danger">
    <input type="checkbox" checked>
    <span class="toggle-track">
        <span class="toggle-thumb"></span>
    </span>
</label>

<!-- Warning -->
<label class="orbit-toggle-switch orbit-toggle-switch--warning">
    <input type="checkbox" checked>
    <span class="toggle-track">
        <span class="toggle-thumb"></span>
    </span>
</label>
```

## 🎯 States

### Active State
```html
<label class="orbit-toggle-switch">
    <input type="checkbox" checked>
    <span class="toggle-track">
        <span class="toggle-thumb"></span>
    </span>
</label>
```

### Inactive State
```html
<label class="orbit-toggle-switch">
    <input type="checkbox">
    <span class="toggle-track">
        <span class="toggle-thumb"></span>
    </span>
</label>
```

### Disabled State
```html
<label class="orbit-toggle-switch">
    <input type="checkbox" disabled>
    <span class="toggle-track">
        <span class="toggle-thumb"></span>
    </span>
</label>
```

## 🎬 Animations

### Orbital Pulse Animation
When the toggle is activated, the thumb element displays a pulsing orbital animation effect using the `orbit-pulse` keyframe. This provides visual feedback and enhances the user experience.

- **Duration**: 0.6s
- **Easing**: `ease-out` (cubic-bezier(0.16, 1, 0.3, 1))
- **Effect**: Radial pulse expanding outward

### Smooth Transitions
- **Track transition**: 0.3s smooth color change
- **Thumb movement**: 0.4s sliding animation
- **Hover effect**: 1.05x scale transform (on hover-capable devices)

## ♿ Accessibility Features

### Keyboard Navigation
- **Tab**: Navigate to toggle switches
- **Space/Enter**: Toggle the switch on/off
- **Shift+Tab**: Navigate backwards

### Screen Reader Support
```html
<!-- Always include descriptive aria-label -->
<input type="checkbox" aria-label="Enable dark mode">
```

### Focus Indicators
- Clear 2px outline on focus for keyboard navigation
- High contrast focus states for visibility
- Works with Windows High Contrast mode

### Motion Preferences
Respects user's motion preferences:
```css
@media (prefers-reduced-motion: reduce) {
    /* Animations are disabled for users who prefer reduced motion */
}
```

### Color Contrast
- All text and interactive elements meet WCAG AA contrast ratios
- Works in light and dark modes
- Color-coded variants don't rely solely on color for meaning

## 🎨 CSS Variables

Customize the component by overriding CSS variables:

```css
:root {
    --orbit-primary: #667eea;
    --orbit-success: #10b981;
    --orbit-danger: #ef4444;
    --orbit-warning: #f59e0b;
    --orbit-neutral: #d1d5db;
    --orbit-neutral-dark: #9ca3af;
    --orbit-bg: #f3f4f6;
    --orbit-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    --orbit-size: 50px;
    --orbit-thumb-size: 20px;
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### Custom Implementation Example

```css
/* Override for custom brand colors */
.my-custom-toggle {
    --orbit-primary: #ff6b6b;
    --orbit-success: #51cf66;
    --orbit-danger: #ff8c42;
}
```

## 📱 Responsive Behavior

The component automatically adapts to screen sizes:

| Device | Size | Thumb | Notes |
|--------|------|-------|-------|
| Desktop | 50px | 20px | Full size with hover effects |
| Tablet | 45px | 18px | Slightly reduced for touch |
| Mobile | 40px-60px | 14px-24px | Scales based on variant |

## 🌙 Dark Mode

The component includes automatic dark mode support using `prefers-color-scheme`:

```css
@media (prefers-color-scheme: dark) {
    :root {
        --orbit-bg: #1f2937;
        --orbit-neutral: #374151;
        /* Colors automatically adjust */
    }
}
```

## 🔧 Customization

### Change Primary Color
```css
.orbit-toggle-switch--primary {
    --orbit-primary: #your-color-here;
}
```

### Adjust Animation Speed
```css
.toggle-track {
    transition: background 0.5s var(--ease-in-out); /* Change from 0.3s */
}
```

### Create New Variant
```css
.orbit-toggle-switch--custom input:checked + .toggle-track {
    background: #your-custom-color;
}

.orbit-toggle-switch--custom input:checked + .toggle-track .toggle-thumb {
    animation: custom-pulse 0.6s ease-out forwards;
}

@keyframes custom-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
    50% { box-shadow: 0 0 0 6px rgba(255, 255, 255, 0); }
}
```

## 📊 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Design Inspiration

The **Orbit** variant draws inspiration from orbital and circular motion patterns, creating a sense of dynamic movement and energy. The pulsing effect when toggled evokes orbital mechanics while providing visual feedback to users.

## 📝 Usage Examples

### Form Integration
```html
<form>
    <label class="orbit-toggle-switch orbit-toggle-switch--primary">
        <input type="checkbox" name="notifications" aria-label="Enable notifications">
        <span class="toggle-track">
            <span class="toggle-thumb"></span>
        </span>
    </label>
    <span>Enable notifications</span>
</form>
```

### Settings Panel
```html
<div class="settings-group">
    <div class="setting-item">
        <label class="orbit-toggle-switch orbit-toggle-switch--success">
            <input type="checkbox" name="two-factor" checked aria-label="Enable two-factor authentication">
            <span class="toggle-track">
                <span class="toggle-thumb"></span>
            </span>
        </label>
        <span>Two-factor authentication</span>
    </div>
</div>
```

## 🤝 Contributing

This component is part of the EaseMotion CSS library for GSSoC '26. Contributions and improvements are welcome!

## 📄 License

This component is part of the EaseMotion CSS library and follows its license terms.

---

**Created for GSSoC '26** | **EaseMotion CSS** | **Pure CSS Component**