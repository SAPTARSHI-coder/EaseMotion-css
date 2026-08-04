# Material Ripple Button Component

A beautiful, CSS-only material design ripple button component for EaseMotion-CSS. Creates a satisfying ripple effect that originates from the center of the button when clicked.

## 🎯 Features

- **Pure CSS Implementation** - No JavaScript required
- **Smooth Ripple Animation** - Material Design-inspired ripple effect on click
- **Radial Expansion** - Ripple expands from center using `scale()` transformation
- **Fade-Out Effect** - Smooth opacity transition for realistic material effect
- **Multiple Color Variants** - Primary, Secondary, Success, Danger, Warning, Info
- **Size Options** - Small (sm), Regular, Large (lg), Extra Large (xl)
- **Outlined Variant** - Transparent background with colored border
- **Icon Button Support** - Circular buttons for icon integration
- **Accessibility Features** - Focus states, disabled states, reduced motion support
- **Responsive Design** - Mobile-friendly with breakpoint adjustments
- **Cross-Browser Compatible** - Works in all modern browsers

## 📦 Component Structure

```
.ease-btn-ripple
├── Base button styles
├── ::after pseudo-element (ripple container)
├── Color variants (.primary, .secondary, .success, .danger, etc.)
├── Size variants (.sm, .lg, .xl)
└── Special variants (.outlined, .icon, .full-width)
```

## 🚀 Quick Start

### Basic Usage

```html
<button class="ease-btn-ripple">Click Me</button>
```

### With Variants

```html
<!-- Color Variants -->
<button class="ease-btn-ripple">Primary</button>
<button class="ease-btn-ripple secondary">Secondary</button>
<button class="ease-btn-ripple success">Success</button>
<button class="ease-btn-ripple danger">Danger</button>
<button class="ease-btn-ripple warning">Warning</button>
<button class="ease-btn-ripple info">Info</button>

<!-- Outlined -->
<button class="ease-btn-ripple outlined">Outlined</button>

<!-- Sizes -->
<button class="ease-btn-ripple sm">Small</button>
<button class="ease-btn-ripple lg">Large</button>
<button class="ease-btn-ripple xl">Extra Large</button>

<!-- Icon Button -->
<button class="ease-btn-ripple icon">
  <svg><!-- icon SVG --></svg>
</button>

<!-- Full Width -->
<button class="ease-btn-ripple full-width">Full Width</button>

<!-- Disabled -->
<button class="ease-btn-ripple" disabled>Disabled</button>
```

## 🎨 CSS Architecture

### Animation Details

The ripple effect uses CSS transformations and transitions:

```css
/* Initial state - invisible, centered */
.ease-btn-ripple::after {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.5;
    transition: transform 0.6s ease, opacity 0.6s ease;
}

/* Active state - expands and fades */
.ease-btn-ripple:active::after {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
}
```

**Key Properties:**
- `scale(0)` → `scale(1)` - Ripple expands from center
- `opacity: 0.5` → `opacity: 0` - Fades out smoothly
- `0.6s ease` - Smooth, natural animation timing

### Overflow Hidden

The `.ease-btn-ripple` has `overflow: hidden` to prevent the ripple from bleeding outside button boundaries.

## 🎯 Color Palette

| Variant | Color | Hex |
|---------|-------|-----|
| Primary | Purple | #667eea |
| Secondary | Dark Purple | #764ba2 |
| Success | Green | #10b981 |
| Danger | Red | #ef4444 |
| Warning | Amber | #f59e0b |
| Info | Sky Blue | #0ea5e9 |

## 📐 Size Specifications

| Size | Padding | Font-size | Border-radius |
|------|---------|-----------|----------------|
| sm | 8px 16px | 12px | 4px |
| Regular | 12px 28px | 14px | 6px |
| lg | 14px 32px | 16px | 8px |
| xl | 16px 40px | 18px | 8px |

## ♿ Accessibility

### Focus States
Clear focus outline for keyboard navigation:
```css
.ease-btn-ripple:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
}
```

### Disabled State
```css
.ease-btn-ripple:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
```

### Reduced Motion Support
Respects user's motion preferences:
```css
@media (prefers-reduced-motion: reduce) {
    .ease-btn-ripple::after {
        transition: none;
    }
}
```

### High Contrast Mode
Enhanced borders for better visibility:
```css
@media (prefers-contrast: more) {
    .ease-btn-ripple {
        border: 2px solid currentColor;
    }
}
```

## 📱 Responsive Behavior

Adjusts padding and font size on mobile devices (max-width: 768px):
- Padding reduces from `12px 28px` to `10px 20px`
- Font size reduces from `14px` to `13px`

## 🔧 Customization

### Changing Ripple Color

For outlined variant:
```css
.ease-btn-ripple.outlined::after {
    background-color: rgba(102, 126, 234, 0.3); /* Adjust opacity */
}
```

### Changing Animation Speed

Modify the transition duration:
```css
.ease-btn-ripple::after {
    transition: transform 0.8s ease, opacity 0.8s ease; /* Slower ripple */
}
```

### Changing Ripple Size

Adjust the `::after` dimensions:
```css
.ease-btn-ripple::after {
    width: 30px; /* Larger ripple */
    height: 30px;
}
```

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+
- All modern mobile browsers

## 📝 Implementation Notes

1. **Position Relative** - The `.ease-btn-ripple` uses `position: relative` for pseudo-element positioning
2. **Overflow Hidden** - Essential for containing the ripple animation
3. **Pointer Events None** - The `::after` pseudo-element has `pointer-events: none` to not interfere with button interactions
4. **Z-index** - The ripple sits on top of button content without blocking interaction
5. **User Select None** - Prevents text selection when button is clicked

## 🎬 Demo

See `demo.html` for interactive examples of:
- All color variants
- All size variants
- Hover and active states
- Different use cases

## 📚 Related Components

This component pairs well with:
- Input fields
- Form submissions
- Navigation elements
- Action triggers
- Icon buttons

## 🏆 Best Practices

1. **Use semantic HTML** - Always use `<button>` element for actual buttons
2. **Add aria-labels** - For icon buttons, include accessible labels
3. **Keep text short** - Buttons work best with concise text
4. **Provide feedback** - Combine with other visual feedback for better UX
5. **Test accessibility** - Verify focus states and keyboard navigation

## 📄 License

Part of EaseMotion-CSS project. See project LICENSE for details.

## 👥 Contributing

Contributions welcome! Please:
1. Follow the existing code style
2. Test across browsers
3. Include accessibility considerations
4. Update this README if adding features

---

**Created for GSSoC 2026** - Helping contributors bring material design patterns to pure CSS! ⚡