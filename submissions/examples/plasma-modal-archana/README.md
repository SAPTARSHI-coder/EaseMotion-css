# Plasma Modal

A polished, production-ready modal component for EaseMotion CSS featuring advanced animation sequencing and smooth transitions inspired by modern SaaS dashboard design patterns.

## Features

✨ **Smooth Animation Sequencing** — Elements animate in staggered sequence using EaseMotion CSS variables for a fluid, polished appearance

🎯 **Pure CSS** — Zero JavaScript required for core functionality (optional JS handlers for overlay/escape close)

📱 **Fully Responsive** — Adapts seamlessly from mobile (480px) to desktop (1200px+) viewports

♿ **Accessible** — ARIA labels, focus management, keyboard navigation (Escape), and prefers-reduced-motion support

🎨 **Multiple Variants** — Standard, Compact, and Full-width modal sizes for different use cases

🌓 **Theme Support** — Built-in light and dark mode support via CSS custom properties

## Component Structure

```
plasma-modal-[your-suffix]/
├── demo.html          # Live interactive demo with 3 modal variants
├── style.css          # Complete styling with EaseMotion animations
└── README.md          # This file
```

## Installation

1. Copy the `style.css` file to your project
2. Link it in your HTML:
   ```html
   <link rel="stylesheet" href="path/to/style.css">
   ```
3. Include the modal HTML in your page (see HTML Structure below)

## HTML Structure

### Basic Modal

```html
<div class="plasma-modal" id="my-modal" role="dialog" aria-labelledby="modal-title" aria-hidden="true">
  <div class="plasma-overlay"></div>
  <div class="plasma-modal-content">
    <div class="plasma-header">
      <h2 id="modal-title">Modal Title</h2>
      <button class="plasma-close" onclick="closeModal('my-modal')" aria-label="Close modal">
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="plasma-body">
      <p>Modal content goes here.</p>
    </div>
    <div class="plasma-footer">
      <button class="btn-secondary" onclick="closeModal('my-modal')">Cancel</button>
      <button class="btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

### Opening & Closing

Include this minimal JavaScript in your page:

```javascript
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('is-active');
  document.body.style.overflow = '';
}
```

### Trigger Button

```html
<button class="trigger-btn" onclick="openModal('my-modal')">
  Open Modal
</button>
```

## Variants

### 1. Standard Modal (Default)
```html
<div class="plasma-modal" id="modal-standard">
  <!-- Standard 500px max-width modal -->
</div>
```
- Max-width: 500px
- Best for: Form submissions, confirmations, general information

### 2. Compact Modal
```html
<div class="plasma-modal plasma-modal-compact" id="modal-compact">
  <!-- Compact 400px max-width modal -->
</div>
```
- Max-width: 400px
- Best for: Quick confirmations, notifications, alerts

### 3. Full-width Modal
```html
<div class="plasma-modal plasma-modal-fullwidth" id="modal-fullwidth">
  <!-- Full-width modal up to 800px on desktop -->
</div>
```
- Max-width: 800px (desktop) / 90% (mobile)
- Best for: Detailed forms, complex content, multi-step workflows

## Animation Sequencing

The Plasma Modal uses staggered animations for visual hierarchy:

| Element | Trigger | Duration | Delay | Easing |
|---------|---------|----------|-------|--------|
| Overlay | is-active | 300ms | 0ms | ease-in-out-cubic |
| Modal Content | is-active | 500ms | 0ms | ease-out-cubic |
| Header | is-active | 300ms | 50ms | ease-in-out-cubic |
| Body | is-active | 300ms | 100ms | ease-in-out-cubic |
| Feature Items | is-active | 300ms | 120-180ms | ease-in-out-cubic |
| Footer | is-active | 300ms | 150ms | ease-in-out-cubic |

### EaseMotion CSS Variables Used

```css
--ease-duration-fast: 150ms;
--ease-duration-base: 300ms;
--ease-duration-slow: 500ms;
--ease-duration-slower: 800ms;

--ease-in-out-cubic: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out-cubic: cubic-bezier(0, 0, 0.2, 1);
--ease-out-elastic: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-in-quad: cubic-bezier(0.11, 0, 0.5, 0);
```

## Customization

### Color Scheme

Modify these CSS variables to match your brand:

```css
:root {
  --plasma-primary: #6366f1;           /* Main brand color */
  --plasma-primary-dark: #4f46e5;      /* Darker shade for gradients */
  --plasma-accent: #ec4899;            /* Secondary accent */
  --plasma-surface: #ffffff;           /* Modal background */
  --plasma-surface-dim: #f8fafc;       /* Subtle backgrounds */
  --plasma-border: #e2e8f0;            /* Border color */
  --plasma-text-primary: #1e293b;      /* Primary text */
  --plasma-text-secondary: #64748b;    /* Secondary text */
}
```

### Animation Timing

Adjust animation durations globally:

```css
:root {
  --ease-duration-fast: 150ms;     /* Change this for faster animations */
  --ease-duration-base: 300ms;     /* Base animation speed */
  --ease-duration-slow: 500ms;     /* Slower, more dramatic animations */
}
```

### Modal Size

Customize modal dimensions:

```css
.plasma-modal-content {
  max-width: 500px;  /* Change max width */
  border-radius: 12px;  /* Adjust border radius */
}
```

### Add Custom Animations

Create new animation states:

```css
.plasma-modal.is-active.custom-state {
  /* Custom animation logic */
}
```

## Accessibility Features

### ARIA Attributes
- ✓ `role="dialog"` — Identifies the element as a dialog
- ✓ `aria-labelledby="modal-title"` — Links modal to its title
- ✓ `aria-hidden="true/false"` — Hides/reveals modal from screen readers

### Keyboard Navigation
- ✓ **Escape** — Closes any open modal
- ✓ **Tab** — Navigates focus within modal
- ✓ **Enter** — Activates buttons
- ✓ Focus trap — Focus cycles within modal when open

### Visual Accessibility
- ✓ **Focus indicators** — 2px solid outline on interactive elements
- ✓ **High contrast** — Text meets WCAG AA standards (4.5:1 ratio)
- ✓ **Prefers Reduced Motion** — Animations disabled when requested
- ✓ **Dark mode** — Automatic support via `prefers-color-scheme`

## JavaScript Features

### Auto-close on Overlay Click
```javascript
document.querySelectorAll('.plasma-modal').forEach(modal => {
  modal.querySelector('.plasma-overlay').addEventListener('click', () => {
    closeModal(modal.id);
  });
});
```

### Escape Key Handling
```javascript
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.plasma-modal.is-active').forEach(modal => {
      closeModal(modal.id);
    });
  }
});
```

### Prevent Body Scroll
```javascript
function openModal(modalId) {
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  document.body.style.overflow = '';
}
```

## Responsive Breakpoints

| Breakpoint | Use Case |
|------------|----------|
| < 480px | Mobile phones |
| 480px - 768px | Tablets / Small phones |
| 768px + | Desktop / Large tablets |

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✓ Full |
| Firefox 88+ | ✓ Full |
| Safari 14+ | ✓ Full |
| Edge 90+ | ✓ Full |
| IE 11 | ✗ No |

*All modern browsers with CSS Grid, CSS Custom Properties, and `cubic-bezier` support*

## Performance

- **CSS-first approach** — Leverages GPU acceleration for smooth animations
- **No dependencies** — Zero external libraries required
- **Minimal JavaScript** — Optional helper functions for enhanced UX
- **Optimized animations** — Uses `transform` and `opacity` for best performance

## Common Patterns

### Confirm Dialog
```html
<div class="plasma-modal plasma-modal-compact" id="confirm-modal">
  <!-- Use with short content and 2 action buttons -->
</div>
```

### Form Modal
```html
<div class="plasma-modal plasma-modal-fullwidth" id="form-modal">
  <div class="plasma-body">
    <!-- Form inputs with proper labels -->
    <label for="email">Email</label>
    <input type="email" id="email">
  </div>
</div>
```

### Notification Modal
```html
<div class="plasma-modal" id="notification-modal" role="alert">
  <!-- Quick message with auto-close option -->
</div>
```

## Development Notes

### File Sizes
- `style.css` — ~12 KB (minified: ~7 KB)
- JavaScript helpers — ~1 KB

### CSS Specificity
The component uses low specificity (.class selectors) for easy customization and override capability.

### Z-index
- Modal: `1000`
- Overlay: `background` of modal
- Ensure no page elements have z-index > 1000 to prevent modal overlapping

## Troubleshooting

### Modal appears behind content
**Solution:** Check for elements with `z-index` > 1000 above the modal

### Animations skip on mobile
**Solution:** Check `prefers-reduced-motion` setting; use performance profiler to identify bottlenecks

### Focus not working
**Solution:** Ensure JavaScript functions are included and called correctly; check browser console for errors

## License

Part of EaseMotion CSS library — open-source contribution for GSSoC '26

## Contributing

Suggestions for improvement? Found an issue? Please report to the issue tracker or create a pull request!

---

**Demo:** Open `demo.html` in your browser to see all variants and animations in action.

**Author:** Archana Nair  
**GSSoC '26 Contribution**