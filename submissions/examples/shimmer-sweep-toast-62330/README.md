# Shimmer-Sweep Toast

A modern, lightweight, pure CSS toast notification component featuring a shimmering sweep effect and a progress bar, ideal for e-commerce product catalog layouts or general web applications.

## 🚀 Features

- **Pure CSS/HTML:** No JavaScript frameworks required.
- **Shimmer Sweep Animation:** A sleek, recurring shimmer effect that runs across the toast.
- **Progress Bar:** A timer progress bar indicating when the toast will disappear.
- **Responsive & Accessible:** Fully responsive design with `prefers-reduced-motion` support.
- **Dark Mode Ready:** Seamlessly adapts to system color schemes.
- **Variants:** Includes Success, Info, and Warning variants.

## 📂 File Structure

- `demo.html` - The showcase page demonstrating the toast variants.
- `style.css` - The core CSS file containing all styles, custom properties, and animations.
- `README.md` - Documentation (this file).

## 🛠️ Usage

Simply include the `style.css` in your project and use the HTML structure provided in `demo.html`. The component relies on CSS custom properties (variables) making it extremely easy to customize.

### HTML Structure

```html
<div class="toast success" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-icon">
        <!-- SVG Icon -->
    </div>
    <div class="toast-content">
        <div class="toast-title">Toast Title</div>
        <div class="toast-message">Toast description goes here.</div>
    </div>
    <button class="toast-close" aria-label="Close toast">
        <!-- Close SVG -->
    </button>
    <div class="toast-progress"></div>
</div>
```

### CSS Variables

You can easily theme the toasts by overriding these CSS variables in your root:

```css
:root {
    --bg-color: #f8fafc;
    --text-color: #1e293b;
    --toast-bg: #ffffff;
    --toast-text: #334155;
    --toast-title: #0f172a;
    
    /* Variant Colors */
    --success-color: #10b981;
    --info-color: #3b82f6;
    --warning-color: #f59e0b;
    
    --animation-duration: 5s;
}
```

## ♿ Accessibility

- Uses `role="alert"` and `aria-live="assertive"` for screen reader compatibility.
- Fully supports `prefers-reduced-motion: reduce` by disabling animations for users who prefer less motion.
