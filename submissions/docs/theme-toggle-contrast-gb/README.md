# Theme Toggle Contrast Fix (Light Mode)

Fixes: #35252 — Theme toggle (Moon icon) has low visibility in Light Mode

## What does this do?

Improves the visibility of the dark/light theme toggle's moon icon in Light Mode by giving it the framework's accent color and a subtly tinted button background, instead of blending into the header using the plain text color and a near-invisible border.

## How is it used?

Same markup and class names as the existing toggle button — no HTML changes needed, only the button styling:

```html
<button class="theme-toggle-btn" aria-label="Toggle dark/light theme">
  <svg class="sun-icon">...</svg>
  <svg class="moon-icon">...</svg>
</button>
```

```css
[data-theme="light"] .theme-toggle-btn {
  border-color: rgba(15, 23, 42, 0.16);
  background: rgba(108, 99, 255, 0.08);
}

[data-theme="light"] .theme-toggle-btn .moon-icon {
  color: var(--ease-color-primary);
}
```

Open `demo.html` to see three states side by side: Dark Mode, Light Mode before the fix, and Light Mode after the fix.

## Why is it useful?

A theme toggle should be instantly discoverable regardless of the active theme. Previously the moon icon used `color: var(--page-text)`, so in Light Mode it rendered as a thin, unfilled outline in the same tone as ordinary text — easy to miss, especially against the header's low-alpha border. Using the framework's existing accent color (`--ease-color-primary`, already used for active nav states) makes the control read as interactive at a glance, without introducing any new color to the design system or changing the icon's shape/animation.
