# CSS Fade-Out Modal for SaaS Showcase Layouts

## What does it do?
A pure CSS animated modal with smooth fade-out transitions styled
for SaaS interfaces. Supports custom properties for timing, easing,
scale, and blur. Fully keyboard accessible with Escape-to-close
and focus management.

## How is it used?
```html
<div class="modal-backdrop" id="modal" role="dialog" aria-modal="true">
  <div class="modal-panel">
    <div class="modal-gradient-bar"></div>
    <div class="modal-header">...</div>
    <div class="modal-body">...</div>
    <div class="modal-footer">...</div>
  </div>
</div>
```

Open/close with JS:
```js
// Open
modal.style.display = 'flex';
modal.classList.remove('is-closing');

// Close (triggers fade-out animation)
modal.classList.add('is-closing');
setTimeout(() => modal.style.display = 'none', 350);
```

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--modal-duration` | `0.35s` | Animation speed |
| `--modal-easing` | `cubic-bezier(0.16,1,0.3,1)` | Easing curve |
| `--modal-scale-from` | `0.94` | Entry/exit scale |
| `--modal-blur` | `6px` | Backdrop blur |
| `--modal-bg` | `#0f172a` | Background color |
| `--modal-accent` | `#6366f1` | Accent color |

## Variants (set inline)
```html
<!-- Fast -->
<div class="modal-backdrop" style="--modal-duration: 0.15s;">

<!-- Bounce -->
<div class="modal-backdrop"
     style="--modal-easing: cubic-bezier(0.34,1.56,0.64,1);
            --modal-scale-from: 0.8;">

<!-- Heavy blur -->
<div class="modal-backdrop" style="--modal-blur: 20px;">
```

## Accessibility
- `role="dialog"` and `aria-modal="true"`
- `aria-labelledby` links to modal title
- Escape key closes modal
- Focus moves to close button on open
- All interactive elements have focus-visible styles

## Features
- Smooth fade + scale in/out animation
- `.is-closing` class triggers fade-out before unmount
- Backdrop click to close
- Plan selector UI
- Respects prefers-reduced-motion
- Pure CSS animations + minimal vanilla JS

## Preview
Open `demo.html` directly in browser.