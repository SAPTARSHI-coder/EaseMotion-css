# color-mix() CSS Utility

**Category:** CSS Utility  
**Author:** [@thakurakanksha288](https://github.com/thakurakanksha288)  
**Issue:** [#24049](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/24049)  
**GSSoC 2026**

---

## Overview

A pure CSS utility demonstrating the native `color-mix()` function integrated with EaseMotion design tokens. No JavaScript, no preprocessor — blending happens directly in the browser using CSS custom properties.

---

## What's demonstrated

### Blend groups

| Group | Colour A | Colour B | Use case |
|---|---|---|---|
| Primary × Secondary | `--ease-color-primary` | `--ease-color-secondary` | Intermediate brand hues |
| Primary × Accent | `--ease-color-primary` | `--ease-color-accent` | CTA / warning blends |
| Tints | `--ease-color-primary` | `white` | Backgrounds, badges, hover fills |
| Shades | `--ease-color-primary` | `black` | Pressed states, borders, dark text |

Each group is shown at **75% / 50% / 25%** of colour A (remainder is colour B).

### Tokens generated (12 total)

```css
--ease-mix-primary-secondary-75
--ease-mix-primary-secondary-50
--ease-mix-primary-secondary-25

--ease-mix-primary-accent-75
--ease-mix-primary-accent-50
--ease-mix-primary-accent-25

--ease-mix-primary-white-75
--ease-mix-primary-white-50
--ease-mix-primary-white-25

--ease-mix-primary-black-75
--ease-mix-primary-black-50
--ease-mix-primary-black-25
```

All tokens are declared in `:root` and **automatically recompute** if a source token changes.

---

## How it works

```css
/* In :root */
--ease-color-primary:   #6d28d9;
--ease-color-secondary: #0ea5e9;

/* Generated token */
--ease-mix-primary-secondary-50: color-mix(
  in oklch,
  var(--ease-color-primary) 50%,
  var(--ease-color-secondary)
);

/* Usage */
.my-element {
  background: var(--ease-mix-primary-secondary-50);
}
```

The `in oklch` colour space is used for perceptually uniform blending — midpoints look visually balanced rather than muddy or dark.

---

## Dark mode

Dark mode is implemented with **zero JavaScript** using a hidden checkbox and CSS `:has()`:

```html
<input type="checkbox" id="theme-toggle" />
<div class="page"> … </div>
```

```css
#theme-toggle:checked ~ .page {
  --ease-color-primary: #7c3aed; /* slightly lighter for dark bg */
  --page-bg: #0f1117;
  …
}
```

All `color-mix()` tokens automatically recalculate when the source tokens change — dark mode updates every derived colour for free.

---

## Features

- **No JS** — interactivity via `:has()` + `<label for>` checkbox pattern
- **No preprocessor** — all blending is native CSS, works in any modern browser
- **Live blend strip** — signature hero element showing the full mix spectrum, hover to reveal token names
- **Token reference table** — all 12 tokens in a copy-paste-ready table
- **`prefers-reduced-motion`** respected — all animations disabled
- **Responsive** — works from 320px mobile up to wide desktop
- **Accessible** — semantic HTML, ARIA labels on all interactive and visual elements

---

## Browser Support

`color-mix()` with `oklch` is **Baseline 2023** — broadly supported across all modern browsers:

| Browser | Minimum version |
|---|---|
| Chrome | 111 |
| Firefox | 113 |
| Safari | 16.2 |
| Edge | 111 |
| IE | Not supported |

---

## File Structure

```
submissions/examples/color-mix-utility/
├── demo.html   ← Full interactive demo
├── style.css   ← All tokens, utilities, and component styles
└── README.md   ← This file
```

---

## How to Run

1. Clone or download the repo
2. Navigate to `submissions/examples/color-mix-utility/`
3. Open `demo.html` in Chrome 111+, Firefox 113+, or Safari 16.2+