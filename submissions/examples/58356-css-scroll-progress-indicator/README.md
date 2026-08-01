# CSS Scroll Progress Indicator Showcase

> **Issue Fix / Feature Submission**: [#58356](https://github.com/saptarshi-coder/easemotion-css/issues/58356)  
> **Track**: Standard Track (`submissions/examples/`)  
> **Author**: Contributor (GSSoC 2026)

---

## 📌 Overview

This submission introduces a comprehensive, pure CSS scroll progress indicator showcase for **EaseMotion CSS**. Modern web applications frequently employ scroll indicators to provide users visual feedback on reading progress. This showcase provides 4 distinct, zero-JavaScript scroll progress indicator designs powered by CSS Scroll-Driven Animations (`animation-timeline: scroll()`) and standard custom properties.

---

## 🚀 Showcase Designs Included

1. **Top Progress Bar (`.ease-scroll-progress-top`)**
   - A crisp, solid-color indicator fixed to the top viewport edge.
   - Smoothly expands from 0% to 100% width as the user scrolls down the page.

2. **Gradient Progress Bar (`.ease-scroll-progress-gradient`)**
   - A multi-color animated gradient bar (Indigo $\rightarrow$ Pink $\rightarrow$ Cyan).
   - Combines dynamic scale expansion with a continuous linear color shift animation.

3. **Reading Header Indicator (`.ease-scroll-progress-reading`)**
   - A glassmorphism header bar with an integrated bottom progress fill line (`.ease-scroll-progress-reading__fill`).
   - Ideal for long articles, documentation sites, and blog post layouts.

4. **Circular Scroll Progress Badge (`.ease-scroll-progress-circular`)**
   - A floating action element anchored at the bottom-right of the viewport.
   - Features a circular SVG stroke indicator that fills radially while scrolling and doubles as a back-to-top button trigger.

---

## 🛠️ Usage & Integration

Simply link `style.css` or copy the relevant progress indicator markup into your HTML page:

```html
<!-- Top Scroll Progress Bar -->
<div class="ease-scroll-progress-top"></div>

<!-- Gradient Scroll Progress Bar -->
<div class="ease-scroll-progress-gradient"></div>

<!-- Circular Floating Progress Badge -->
<a href="#" class="ease-scroll-progress-circular" aria-label="Back to top">
  <svg class="ease-scroll-progress-circular__svg" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="ease-circular-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6366f1" />
        <stop offset="50%" stop-color="#ec4899" />
        <stop offset="100%" stop-color="#06b6d4" />
      </linearGradient>
    </defs>
    <circle class="ease-scroll-progress-circular__track" cx="50" cy="50" r="45"></circle>
    <circle class="ease-scroll-progress-circular__thumb" cx="50" cy="50" r="45"></circle>
  </svg>
  <svg class="ease-scroll-progress-circular__icon" viewBox="0 0 24 24">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
</a>
```

---

## 🎨 Custom Properties (`--ease-`)

Customize colors, heights, and layout stacking via `:root` or element scope:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-scroll-progress-height` | `4px` | Height of top/gradient progress bars |
| `--ease-scroll-progress-bg` | `#6366f1` | Primary indicator color |
| `--ease-scroll-progress-track-bg` | `rgba(255, 255, 255, 0.08)` | Background track color |
| `--ease-scroll-gradient-start` | `#6366f1` | Gradient start color (Indigo) |
| `--ease-scroll-gradient-mid` | `#ec4899` | Gradient mid color (Pink) |
| `--ease-scroll-gradient-end` | `#06b6d4` | Gradient end color (Cyan) |
| `--ease-scroll-progress-z` | `9999` | Stack order (z-index) |

---

## 🌐 Browser Compatibility & Fallbacks

- **Full Native Support**: Chrome 115+, Edge 115+, Safari 18+ (via CSS `animation-timeline: scroll()`).
- **Graceful Fallbacks**: Included `@supports not (animation-timeline: scroll())` rules ensure static preview visibility in older browser versions.
