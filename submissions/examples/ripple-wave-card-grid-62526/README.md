# Ripple-Wave Card Grid

A modern, accessible, pure CSS ripple-wave card grid designed for e-commerce checkout layouts.

## Features

- **Pure CSS**: No JavaScript required for interactions or animations.
- **Ripple-Wave Animation**: Features a smooth, radiating ripple effect upon selection.
- **Accessible**: Supports keyboard navigation (`focus-within`) and semantic HTML structure.
- **Responsive**: Auto-fitting grid layout that adapts seamlessly to desktop, tablet, and mobile.
- **Dark Mode Ready**: Automatically adjusts styling based on `prefers-color-scheme`.
- **Reduced Motion Support**: Respects OS-level motion preferences by disabling animations.

## Usage

Include the `style.css` in your project and use the HTML structure provided in `demo.html`.

### HTML Structure

The grid relies on semantic `<label>` elements acting as interactive cards with hidden radio inputs.

```html
<div class="ripple-wave-card-grid">
    <label class="ripple-card">
        <input type="radio" name="payment" value="method-1">
        <div class="card-content">
            <!-- Icon, Text, and Check Indicator -->
        </div>
        <div class="ripple-effect"></div>
    </label>
</div>
```

### CSS Custom Properties

You can customize the component by overriding these root variables:

```css
:root {
    --primary-color: #3b82f6;
    --primary-color-rgb: 59, 130, 246; /* Required for rgba() calculations */
    --primary-light: #eff6ff;
    
    --bg-color: #f8fafc;
    --card-bg: #ffffff;
    --card-border: #e2e8f0;
    
    --text-primary: #0f172a;
    --text-secondary: #64748b;
    
    --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## How it works

The core interactivity is driven by the `:checked` pseudo-class and the `:has()` selector (or sibling combinators). When a radio button is selected, the adjacent elements (like the ripple layer, icon, and text) are styled accordingly, triggering the CSS keyframe animation `rippleWave`.
