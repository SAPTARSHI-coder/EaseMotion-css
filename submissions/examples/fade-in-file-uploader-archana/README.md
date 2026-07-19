# Fade In File Uploader

A smooth, elegant file upload component with fade-in animations built with pure CSS using EaseMotion design patterns.

## Features

✨ **Pure CSS** - No JavaScript required
🎨 **Smooth Animations** - Fade-in and scale transitions
📱 **Fully Responsive** - Works on all screen sizes
♿ **Accessible** - WCAG compliant with focus states and reduced-motion support
🌓 **Dark Mode** - Automatic dark mode support via `prefers-color-scheme`
🎯 **Multiple Variants** - Default, compact, and image-specific designs
⚡ **Lightweight** - Minimal CSS footprint

## Component Structure

```
fade-in-file-uploader-<your-suffix>/
├── demo.html          # Live demo showcasing all variants
├── style.css          # Component styles with animations
└── README.md          # This file
```

## Installation

Copy the `style.css` file to your project and link it in your HTML:

```html
<link rel="stylesheet" href="style.css">
```

## Basic Usage

```html
<div class="fade-in-file-uploader">
    <div class="upload-area">
        <svg class="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
        <h3>Click to upload or drag and drop</h3>
        <p class="file-hint">PNG, JPG, PDF up to 10MB</p>
    </div>
    <input type="file" class="file-input" accept=".png,.jpg,.jpeg,.pdf" multiple>
</div>
```

## Variants

### Default File Uploader
Standard file uploader with full padding and icon.

```html
<div class="fade-in-file-uploader">
    <!-- content -->
</div>
```

### Compact Variant
Reduced padding for smaller spaces.

```html
<div class="fade-in-file-uploader compact">
    <!-- content -->
</div>
```

### Image Variant
Styled specifically for image uploads with a gradient background.

```html
<div class="fade-in-file-uploader image-variant">
    <!-- content -->
</div>
```

## Animation Details

### Fade In Animation
- **Duration**: 0.6s
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out)
- **Effect**: Smooth opacity and vertical translation

### Staggered Animations
Multiple upload areas on the same page animate sequentially with 0.1s delay between each.

### Hover Effects
- Border color changes to primary color
- Background gradients to light primary
- Subtle shadow appears
- Smooth transition over 0.3s

### Focus States
- 2px outline with primary color
- 2px outline offset for accessibility
- Enhanced shadow on focus-visible

## Customization

### CSS Variables

```css
:root {
    /* Colors */
    --primary-color: #6366f1;
    --primary-light: #e0e7ff;
    --primary-dark: #4f46e5;
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
    --border-color: #e5e7eb;

    /* Animations */
    --fade-in-duration: 0.6s;
    --fade-in-delay: 0.1s;
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

Override these variables to customize the component:

```css
.fade-in-file-uploader {
    --primary-color: #8b5cf6;
    --fade-in-duration: 0.8s;
}
```

### Modify Icon Size

```css
.upload-icon {
    width: 64px;
    height: 64px;
}
```

### Adjust Padding

```css
.upload-area {
    padding: 60px 40px;
}
```

## Accessibility Features

1. **Focus States** - Clear visual feedback when using keyboard navigation
2. **ARIA Labels** - Proper labels on file inputs for screen readers
3. **Reduced Motion** - Respects `prefers-reduced-motion` media query
4. **Color Contrast** - WCAG AA compliant contrast ratios
5. **Semantic HTML** - Proper heading hierarchy and structure

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Animation Performance

The component uses GPU-accelerated animations:
- `transform` and `opacity` properties for smooth 60fps animations
- Optimized with `will-change` on hover
- Minimal repaints and reflows

## Dark Mode

Automatically adapts to system dark mode preference via `prefers-color-scheme: dark`.

Customize dark mode colors:

```css
@media (prefers-color-scheme: dark) {
    :root {
        --text-primary: #f3f4f6;
        --text-secondary: #d1d5db;
    }
}
```

## Responsive Breakpoints

- **Desktop** (> 768px): Full padding and spacing
- **Tablet** (481px - 768px): Reduced padding (35px vertical)
- **Mobile** (≤ 480px): Minimal padding for small screens

## Implementation Notes

- The `file-input` is hidden but remains accessible to screen readers
- Click anywhere in the upload area to trigger file selection
- Multiple file selection is enabled by default (use `accept` attribute for file type restrictions)
- The component uses CSS-only styling for maximum compatibility

## Contributing to EaseMotion CSS

To contribute this component:

1. Clone the EaseMotion CSS repository
2. Create a new branch: `git checkout -b fade-in-file-uploader-<your-suffix>`
3. Copy files to: `submissions/examples/fade-in-file-uploader-<your-suffix>/`
4. Test across browsers and devices
5. Submit a pull request with the issue reference

## License

This component is part of EaseMotion CSS and follows the repository's license terms.

## Credits

Built for GSSoC 2026 contribution to EaseMotion CSS library.

---

**Version**: 1.0.0  
**Last Updated**: July 2026  
**Component Type**: Pure CSS / No JavaScript Required