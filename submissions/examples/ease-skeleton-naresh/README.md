# EaseMotion CSS Skeleton Loader Component

A modern, hardware-accelerated, pure CSS skeleton loader component for indicating loading content. It relies on a linear-gradient sliding shimmer animation with zero JavaScript overhead.

---

## Classes Reference

- `.ease-skeleton`: Base skeleton class. Configures the background animation, keyframes, shape, and defaults.
- `.ease-skeleton--text`: Renders as a thin, horizontal text bar (height: `1rem`) with rounded corners, perfect for simulating lines of text.
- `.ease-skeleton--card`: Renders as a block element (height: `150px`) suitable for loading images, cards, or featured content blocks.
- `.ease-skeleton--avatar`: Renders as a circle (height: `48px`, width: `48px`, border-radius: `50%`) perfect for profiles, icons, and circular buttons.

---

## Customization (CSS Variables)

Customize the loader to match your application theme using these CSS custom properties:

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-skeleton-base` | Base background color of the loader placeholder | `#1e293b` |
| `--ease-skeleton-shine` | Shimmer glow highlight color | `#334155` |
| `--ease-skeleton-duration` | The duration of the slide animation | `1.5s` |

---

## How to Use

### 1. Basic HTML Structure
Apply the base class `.ease-skeleton` and the desired shape modifier:

```html
<!-- Avatar Skeleton -->
<div class="ease-skeleton ease-skeleton--avatar"></div>

<!-- Text Lines Skeleton -->
<div class="ease-skeleton ease-skeleton--text" style="width: 80%;"></div>
<div class="ease-skeleton ease-skeleton--text" style="width: 60%;"></div>

<!-- Card Skeleton -->
<div class="ease-skeleton ease-skeleton--card"></div>
```

### 2. Accessibility Best Practices
When rendering skeleton loader screens, wrap the loading layout in a container with `aria-busy="true"` to announce to screen readers that content is loading. Hide individual placeholder elements from assistive technologies using `aria-hidden="true"` to prevent redundant tab stops and voice announcements.

```html
<div aria-busy="true" aria-live="polite">
  <div class="ease-skeleton ease-skeleton--avatar" aria-hidden="true"></div>
  <div class="ease-skeleton ease-skeleton--text" aria-hidden="true"></div>
</div>
```

### 3. Light Mode Theming Example
Easily override base colors to suit light mode containers:

```html
<div 
  class="ease-skeleton ease-skeleton--card" 
  style="--ease-skeleton-base: #e2e8f0; --ease-skeleton-shine: #f1f5f9; --ease-skeleton-duration: 1.2s;" 
  aria-hidden="true">
</div>
```
