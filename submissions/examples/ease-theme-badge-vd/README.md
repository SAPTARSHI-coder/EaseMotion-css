# Ease Theme Badge

## What does this do?

A small theme badge indicating the current theme: Light, Dark, or System.

---

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<div class="theme-badge dark">
    <span class="theme-icon">☾</span>
    <span>Dark</span>
</div>
```

### Available variants

```html
<div class="theme-badge light">
    <span class="theme-icon">☀</span>
    <span>Light</span>
</div>

<div class="theme-badge dark">
    <span class="theme-icon">☾</span>
    <span>Dark</span>
</div>

<div class="theme-badge system">
    <span class="theme-icon">◐</span>
    <span>System</span>
</div>
```

### Features

- Light, Dark, and System variants
- Theme icon
- Rounded badge
- Hover animation
- Responsive layout
- Lightweight CSS implementation

---

## Why is it useful?

Theme badges are useful in settings panels, documentation, dashboards, and interfaces where the current appearance mode needs to be clearly displayed.

This component provides a simple reusable theme indicator with subtle interaction feedback while following the animation-first philosophy of EaseMotion CSS.