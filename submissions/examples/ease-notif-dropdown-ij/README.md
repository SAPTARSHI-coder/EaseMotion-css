# Notification Dropdown Demo Component

A clean, modern, pure CSS Notification Dropdown component featuring spring bell physics, dynamic badge counters, unread notification highlights, zero-JS radio tab filtering, and glassmorphic panel transitions.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript framework dependencies.
- **Checkbox Toggle Physics**: Smooth open/close panel animation powered by `:checked` pseudo-class selectors.
- **Spring Bell Animation**: Elastic bell rotation keyframe animation (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **CSS Radio Filter Tabs**: Zero-JS category filtering using sibling radio combinators (`#filter-unread:checked ~ .notif-list`).
- **Glassmorphism Design**: High-contrast glass container styling with `backdrop-filter: blur(24px)` and custom glowing radial background orbs.
- **Full Responsiveness**: Mobile-first fluid layout adapting dynamically across all viewport sizes.
- **Accessibility & Motion Preference**: WAI-ARIA compliant labels, focus-visible keyboard navigation, and explicit `@media (prefers-reduced-motion: reduce)` fallbacks.

## 🛠️ Usage

Simply link the `style.css` stylesheet in your HTML header and include the dropdown markup:

```html
<link rel="stylesheet" href="submissions/examples/ease-notif-dropdown-ij/style.css">

<div class="notif-dropdown-wrapper">
    <input type="checkbox" id="notif-toggle" class="notif-checkbox">
    <label for="notif-toggle" class="notif-trigger">
        <svg class="bell-icon">...</svg>
        <span class="badge-counter">3</span>
    </label>

    <div class="notif-panel">
        ...
    </div>
</div>
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--primary-accent` | Main theme color for triggers and active tabs | `#6366f1` |
| `--unread-color` | Color for unread indicators and badge counter | `#f43f5e` |
| `--panel-bg` | Glassmorphic dropdown panel background | `rgba(15, 21, 35, 0.95)` |
| `--ease-spring` | Cubic-bezier spring transition curve | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `--shadow-lg` | Dropdown panel box shadow | `0 20px 40px -15px rgba(0, 0, 0, 0.6)` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-notif-dropdown-ij/`
- **Issue Reference**: `#75685`
- **Files Included**: `demo.html`, `style.css`, `README.md`
