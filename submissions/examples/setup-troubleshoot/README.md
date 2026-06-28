# EaseMotion CSS — Animation Playground & Troubleshooting Guide

A self-contained interactive demo and troubleshooting reference for the EaseMotion CSS animation library.

---

## 📁 Folder Structure

```
submissions/examples/animation-playground/
├── demo.html     ← Interactive playground + troubleshooting page
├── style.css     ← EaseMotion classes, keyframes & playground styles
└── README.md     ← This file
```

---

## 🚀 Quick Start

No build step required. Just open in a browser:

```bash
# Option 1 — open directly
open submissions/examples/animation-playground/demo.html

# Option 2 — serve locally (recommended to avoid file:// CORS issues)
npx serve submissions/examples/animation-playground
# then visit http://localhost:3000
```

---

## 🎯 What's Inside

### Interactive Playground
Pick any animation class, adjust duration, easing, and delay, then click **Play** to preview it live. The generated class string is shown as a ready-to-copy code snippet.

### Animation Reference Grid
Click any card in the grid to preview that animation class in context.

### Troubleshooting Section
Six documented issues with step-by-step solutions:

| # | Issue | Root Causes Covered |
|---|-------|-------------------|
| 1 | Animations not triggering | CSS not loaded, typo, fill mode, hidden element, reduced-motion |
| 2 | CSS import problems | Wrong path, CDN typo, MIME type, CORS, specificity clash |
| 3 | Build tool configuration | Vite, Webpack 5, PostCSS/PurgeCSS, Parcel, Next.js |
| 4 | Browser compatibility | Safari prefixes, iOS quirks, IE 11, legacy Edge |
| 5 | Scroll-triggered animations | IntersectionObserver setup, threshold, off-screen pre-animation |
| 6 | Janky / dropped frames | Layout thrashing, staggering, will-change, overdraw |

### Quick-Diagnosis Checklist
A 7-step table to pinpoint any issue fast using browser DevTools.

### Compatibility Table
Browser and framework support matrix covering Chrome, Firefox, Safari, IE 11, React/Next.js, Vue/Nuxt, Angular, Svelte, Vite, Webpack 5, and Parcel.

---

## 🎨 Animation Classes Reference

### Core Animations
```html
<!-- Fade -->
<div class="em-fade-in">...</div>
<div class="em-fade-out">...</div>

<!-- Slide -->
<div class="em-slide-up">...</div>
<div class="em-slide-down">...</div>
<div class="em-slide-left">...</div>
<div class="em-slide-right">...</div>

<!-- Scale -->
<div class="em-zoom-in">...</div>
<div class="em-zoom-out">...</div>

<!-- Attention -->
<div class="em-bounce">...</div>
<div class="em-shake">...</div>
<div class="em-pulse">...</div>
<div class="em-spin">...</div>
<div class="em-flip">...</div>
```

### Modifier Classes
```html
<!-- Duration -->
<div class="em-fade-in em-fast">...</div>    <!-- 0.3s -->
<div class="em-fade-in em-slow">...</div>    <!-- 1.2s -->
<div class="em-fade-in em-slower">...</div>  <!-- 2.4s -->

<!-- Easing -->
<div class="em-slide-up em-ease-smooth">...</div>
<div class="em-slide-up em-ease-bounce">...</div>
<div class="em-slide-up em-ease-spring">...</div>

<!-- Delay -->
<div class="em-fade-in em-delay-1">...</div> <!-- 0.15s -->
<div class="em-fade-in em-delay-2">...</div> <!-- 0.3s  -->
<div class="em-fade-in em-delay-3">...</div> <!-- 0.6s  -->

<!-- Fill mode (recommended) -->
<div class="em-fade-in em-fill-both">...</div>
```

---

## 🔧 Troubleshooting Quick Reference

### Animations Not Triggering
1. Confirm CSS loads with HTTP 200 in DevTools → Network
2. Check class name uses the `em-` prefix (case-sensitive)
3. Add `em-fill-both` so the end state persists
4. Avoid `display:none` — use `opacity:0` instead
5. Disable `prefers-reduced-motion` in DevTools → Rendering to test

### CSS Import Problems
```html
<!-- HTML -->
<link rel="stylesheet" href="./css/easemotion.min.css">
```
```js
// JS / bundler
import 'easemotion-css/dist/easemotion.min.css';
```
- Serve files over `http://` not `file://` to avoid CORS errors
- Verify your server returns `Content-Type: text/css`

### Build Tool Configuration

**Vite** — import in `main.js`, no extra config needed.

**Webpack 5** — requires `css-loader` + `style-loader`:
```js
// webpack.config.js
{ test: /\.css$/, use: ['style-loader', 'css-loader'] }
```

**PurgeCSS / Tailwind** — safelist all `em-*` classes:
```js
// postcss.config.js
safelist: [/^em-/]
```

**Next.js** — import in `_app.js` (Pages) or `layout.tsx` (App Router) only.

### Browser Compatibility
- **Safari** — add Autoprefixer to your PostCSS pipeline for `-webkit-` prefixes
- **IE 11** — not supported; CSS custom properties unavailable
- **iOS Safari** — test 3D transforms on a real device, not just the simulator

### Scroll-Triggered Animations
```js
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('em-slide-up');
  }),
  { threshold: 0.2 }
);
document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
```

### Performance / Jank
- Only animate `transform` and `opacity` — never `width`, `height`, `top`, or `left`
- Stagger multiple animations using `em-delay-1` / `em-delay-2` / `em-delay-3`
- Add `will-change: transform, opacity` to heavily animated elements

---

## ♿ Accessibility

EaseMotion CSS automatically respects the user's `prefers-reduced-motion` setting:

```css
@media (prefers-reduced-motion: reduce) {
  [class*="em-"] {
    animation-duration:        0.01ms !important;
    animation-iteration-count: 1      !important;
    transition-duration:       0.01ms !important;
  }
}
```

No extra work needed — animations are disabled for users who prefer reduced motion.

---

## 🌐 Browser Support Matrix

| Browser / Tool       | Status   | Min Version |
|----------------------|----------|-------------|
| Chrome / Edge        | ✅ Full  | 60+         |
| Firefox              | ✅ Full  | 55+         |
| Safari / iOS Safari  | ⚠️ Partial | 12+ (add Autoprefixer) |
| Samsung Internet     | ✅ Full  | 8+          |
| Internet Explorer 11 | ❌ None  | —           |
| React / Next.js      | ✅ Full  | Any         |
| Vue / Nuxt           | ✅ Full  | Any         |
| Angular              | ✅ Full  | Any         |
| Svelte / SvelteKit   | ✅ Full  | Any         |
| Vite                 | ✅ Full  | 2+          |
| Webpack 5            | ✅ Full  | 5+          |
| Parcel 2             | ✅ Full  | 2+          |

---

## 📎 Related Documentation

- [EaseMotion CSS — Main README](../../README.md)
- [Troubleshooting Section](#-troubleshooting-quick-reference) *(this file)*
- [Compatibility Table](#-browser-support-matrix) *(this file)*