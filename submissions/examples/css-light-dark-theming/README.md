# CSS `light-dark()` Theming System

A production-ready, zero-JavaScript theming system demonstrating the CSS `light-dark()` color function. Every color value adapts automatically to the user's `prefers-color-scheme` — no media queries, no custom property swapping, no class toggling.

## What This Demo Shows

- **`light-dark(<light-value>, <dark-value>)`** for every color property
- **`color-scheme: light dark`** on `<html>` for browser-level awareness
- **CSS-only theme picker** using `:has()` selector — no JavaScript
- Overriding `color-scheme` via CSS when user selects Light or Dark explicitly
- System theme (Auto) as the default, respecting `prefers-color-scheme`

## Components Demonstrated

| Component | Light Mode | Dark Mode |
|---|---|---|
| Sticky header with glassmorphism | White with blur | Dark with blur |
| Brand icon gradient | violet → pink | lighter violet → pink |
| Stat cards | White surface | Dark surface |
| Feature cards with SVG icons | White surface | Dark surface |
| Contact form (input, select, textarea, checkbox) | Light backgrounds | Dark backgrounds |
| Alerts (info, success, warning, danger) | Soft pastels | Rich dark tones |
| Theme picker (radio button CSS-only) | Light UI | Dark UI |
| Comparison code blocks | Light code bg | Dark code bg |
| Data table | Light rows | Dark rows |
| Footer | Light border | Dark border |

## How It Works

```css
/* Set color-scheme once */
html {
  color-scheme: light dark;
}

/* Every color uses light-dark() */
.card {
  background: light-dark(#fff, #0f0f1a);
  color: light-dark(#1a1a2e, #e8e8f0);
  border-color: light-dark(#d0d0e0, #2a2a44);
}
```

The browser automatically picks the first value in light mode and the second in dark mode. No `@media (prefers-color-scheme: dark)` needed for individual color properties.

### CSS-Only Theme Picker

```css
/* System default — respects prefers-color-scheme */
html { color-scheme: light dark; }

/* Force light when user picks Light */
html:has(#theme-light:checked) { color-scheme: light; }

/* Force dark when user picks Dark */
html:has(#theme-dark:checked) { color-scheme: dark; }
```

## Accessibility

- Semantic HTML5 (`<main>`, `<nav>`, `<article>`, `<form>`, `<table>`, `<fieldset>`)
- All interactive elements are keyboard accessible
- `:focus-visible` outlines on every focusable element
- `aria-label` on the theme picker, `aria-labelledby` on sections
- `[role="banner"]`, `[role="alert"]`, `[role="status"]`, `[role="contentinfo"]`
- `prefers-reduced-motion: reduce` — disables all animations and transitions
- `prefers-contrast: more` — thickens borders
- `forced-colors: active` — renders correctly with Windows High Contrast Mode
- Print styles — removes blur, uses black text on white, hides theme picker

## Browser Support

`light-dark()` is supported in all modern browsers:

- Chrome 123+ (March 2024)
- Firefox 120+ (November 2023)
- Safari 17.5+ (May 2024)
- Edge 123+ (March 2024)
- Samsung Internet 25+
- Opera 109+

`color-scheme` support extends back further (Chrome 81+, Firefox 96+, Safari 13+).

## Why `light-dark()` Beats the Old Way

**Old approach** (media queries + custom properties):

```css
:root {
  --bg: #fff;
  --text: #1a1a2e;
  --border: #d0d0e0;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0f0f1a;
    --text: #e8e8f0;
    --border: #2a2a44;
  }
}
.card {
  background: var(--bg);
  color: var(--text);
  border-color: var(--border);
}
```

**New approach** (`light-dark()`):

```css
html { color-scheme: light dark; }
.card {
  background: light-dark(#fff, #0f0f1a);
  color: light-dark(#1a1a2e, #e8e8f0);
  border-color: light-dark(#d0d0e0, #2a2a44);
}
```

Benefits:
1. **Single declaration** — light and dark values are colocated
2. **No custom properties** — values are inlined where used
3. **No media queries** — `light-dark()` handles it internally
4. **Composable** — can be used inside `color-mix()`, `rgb()`, gradients, shadows
5. **Override-friendly** — setting `color-scheme: light` on a parent overrides all `light-dark()` values in children

## Usage

1. Open `demo.html` in any modern browser
2. The page loads in your system theme
3. Use the theme picker (☐ ☀ ☾) in the top-right to switch themes
4. All colors update instantly with zero JavaScript

## Files

- `demo.html` — Semantic HTML5 demo page
- `style.css` — Complete stylesheet with `light-dark()` for all colors
- `README.md` — This documentation
