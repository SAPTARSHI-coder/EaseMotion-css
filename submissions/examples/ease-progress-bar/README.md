# ease-progress-bar

Composable progress bar component for EaseMotion CSS.

Resolves: **[#254 — Add ease-progress-bar component](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/254)**

---

## Overview

A two-element, zero-JS progress bar.
Set the fill width via a single CSS variable. Toggle one class to animate it in.
All color variants, size variants, animated stripes, and an indeterminate state are included.

---

## Files

| File | Purpose |
|------|---------|
| `style.css` | Component styles |
| `demo.html` | Interactive demo page |
| `README.md` | This file |

---

## Quick Start

```html
<!-- 1. Link the stylesheet -->
<link rel="stylesheet" href="path/to/style.css" />

<!-- 2. Write the HTML -->
<div class="ease-progress" style="--ease-progress-value: 72%;">
  <div class="ease-progress-bar ease-progress-primary"
       role="progressbar"
       aria-valuenow="72"
       aria-valuemin="0"
       aria-valuemax="100"
       aria-label="72% complete">
  </div>
</div>

<!-- 3. Trigger the fill animation -->
<script>
  document.querySelector('.ease-progress').classList.add('ease-progress-loaded');
</script>
```

---

## API Reference

### Track element — `.ease-progress`

| Class | Effect |
|-------|--------|
| `.ease-progress` | Base track wrapper — required |
| `.ease-progress-loaded` | Triggers fill transition to `--ease-progress-value` |
| `.ease-progress-indeterminate` | Looping animation for unknown-duration operations |
| `.ease-progress-sm` | 6px height |
| `.ease-progress-lg` | 16px height |
| `.ease-progress-xl` | 24px height |

**Custom properties (set on the track):**

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-progress-value` | `0%` | Target fill width |
| `--ease-progress-track-height` | `10px` | Track height override |

### Fill element — `.ease-progress-bar`

Must be a direct child of `.ease-progress`.

| Class | Effect |
|-------|--------|
| `.ease-progress-bar` | Base fill — required |
| `.ease-progress-primary` | Purple fill (default color) |
| `.ease-progress-success` | Green fill |
| `.ease-progress-danger` | Red fill |
| `.ease-progress-warning` | Amber fill |
| `.ease-progress-animated` | Moving diagonal stripes |

---

## Usage Examples

### Basic bar

```html
<div class="ease-progress" style="--ease-progress-value: 60%;">
  <div class="ease-progress-bar ease-progress-primary"
       role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

### Color variants

```html
<div class="ease-progress" style="--ease-progress-value: 88%;">
  <div class="ease-progress-bar ease-progress-success" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<div class="ease-progress" style="--ease-progress-value: 45%;">
  <div class="ease-progress-bar ease-progress-warning" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<div class="ease-progress" style="--ease-progress-value: 32%;">
  <div class="ease-progress-bar ease-progress-danger" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

### Animated striped fill

```html
<div class="ease-progress" style="--ease-progress-value: 65%;">
  <div class="ease-progress-bar ease-progress-primary ease-progress-animated"
       role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

### Size variants

```html
<!-- Small -->
<div class="ease-progress ease-progress-sm" style="--ease-progress-value: 60%;">
  <div class="ease-progress-bar ease-progress-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<!-- Large -->
<div class="ease-progress ease-progress-lg" style="--ease-progress-value: 60%;">
  <div class="ease-progress-bar ease-progress-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

### Inline label

```html
<div class="ease-progress-labeled">
  <div class="ease-progress" style="--ease-progress-value: 78%;">
    <div class="ease-progress-bar ease-progress-primary" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <span class="ease-progress-label">78%</span>
</div>
```

### Stacked named rows

```html
<div class="ease-progress-stack">
  <div class="ease-progress-row">
    <div class="ease-progress-row-label">
      <span class="ease-progress-row-name">CSS</span>
      <span class="ease-progress-row-value">94%</span>
    </div>
    <div class="ease-progress" style="--ease-progress-value: 94%;">
      <div class="ease-progress-bar ease-progress-primary" role="progressbar" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</div>
```

### Indeterminate (unknown duration)

```html
<div class="ease-progress ease-progress-indeterminate">
  <div class="ease-progress-bar ease-progress-primary"
       role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" aria-label="Loading…"></div>
</div>
```

### Dynamic value via JavaScript

```js
const track = document.querySelector('.ease-progress');
const bar   = track.querySelector('.ease-progress-bar');

// Ensure loaded class is present for transitions to work
track.classList.add('ease-progress-loaded');

// Update value at any time — CSS transition handles the animation
track.style.setProperty('--ease-progress-value', '75%');
bar.setAttribute('aria-valuenow', '75');
```

---

## Accessibility

- Use `role="progressbar"` on `.ease-progress-bar`.
- Set `aria-valuenow`, `aria-valuemin`, `aria-valuemax` to match the visible value.
- Set `aria-label` or link a visible label via `aria-labelledby` so screen readers announce the purpose.
- For indeterminate bars, set `aria-valuenow="0"` and `aria-label="Loading…"` (or a descriptive phrase).
- `prefers-reduced-motion` is respected:
  - Fill transitions are disabled; bars jump to their final width immediately.
  - `ease-progress-animated` stripe animation stops.
  - Indeterminate animation stops; the bar sits at a midpoint width visually.

---

## Design Tokens Used

All values reference EaseMotion CSS tokens. None are hard-coded.

| Token | Usage |
|-------|-------|
| `--ease-color-primary` | Primary fill |
| `--ease-color-success` | Success fill |
| `--ease-color-danger` | Danger fill |
| `--ease-color-warning` | Warning fill |
| `--ease-color-neutral-200` | Track background |
| `--ease-radius-full` | Pill border radius |
| `--ease-space-*` | Label/stack spacing |
| `--ease-text-sm` | Label font size |
| `--ease-ease` | Fill transition curve |

---

## Browser Support

Uses only standard CSS — transitions, custom properties, `@keyframes`, `repeating-linear-gradient`.
No modern-only APIs (no `color-mix()`, no `animation-timeline`).
Works in all browsers that support CSS custom properties (Chrome 49+, Firefox 31+, Safari 9.1+, Edge 16+).

---

## Changelog Entry (for maintainer)

### ✨ Added
- `.ease-progress` track wrapper component
- `.ease-progress-bar` fill element with `--ease-progress-value` CSS variable API
- `.ease-progress-animated` modifier for moving striped fills
- Color variants: `.ease-progress-primary`, `.ease-progress-success`, `.ease-progress-danger`, `.ease-progress-warning`
- Size variants: `.ease-progress-sm`, `.ease-progress-lg`, `.ease-progress-xl`
- `.ease-progress-indeterminate` for unknown-duration loading states
- `.ease-progress-labeled` and `.ease-progress-stack` layout helpers
- Full `prefers-reduced-motion` support
- `role="progressbar"` / ARIA attribute guidance in docs