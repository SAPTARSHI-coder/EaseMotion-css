# Star Rating Component — EaseMotion CSS

**Issue:** [#30307 — Add Star Rating / Review component (ease-rating) with interactive hover states](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30307)

A CSS-only star rating component supporting read-only display with fractional scores and interactive hover-to-rate mode with animated transitions.

## Structure

```
submissions/docs/core_changes-issue-30307/
├── demo.html       # Demo page showing all variants
├── style.css       # Component styles
└── README.md       # This file
```

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-rating` | Inline-flex container for star display |
| `.ease-rating-readonly` | Display-only mode (uses `--ease-rating-score`) |
| `.ease-rating-interactive` | Interactive mode with radio inputs |
| `.ease-rating-stars-bg` | Background (empty) star layer |
| `.ease-rating-stars-fg` | Foreground (filled) overlay, width controlled by `--ease-rating-score` |
| `.ease-rating-star` | Individual star element |
| `.ease-rating-input` | Hidden radio input for interactive mode |
| `.ease-rating-sm` | Small size (1rem) |
| `.ease-rating-lg` | Large size (2rem) |
| `.ease-rating-xl` | Extra large size (2.5rem) |
| `.ease-rating-value` | Numeric score label beside stars |

## Variants

### Read-Only (`.ease-rating-readonly`)
Uses a two-layer approach: background (gray stars) and foreground (yellow stars) with overflow hidden. Set `--ease-rating-score` from 0 to 5 (supports decimals like 3.5, 4.2).

```html
<div class="ease-rating ease-rating-readonly" style="--ease-rating-score: 4.5">
  <span class="ease-rating-stars-bg">★★★★★</span>
  <span class="ease-rating-stars-fg" aria-hidden="true">★★★★★</span>
</div>
```

### Interactive (`.ease-rating-interactive`)
Uses hidden radio inputs with `<label>` elements styled as stars. Uses RTL direction trick so `:hover ~ label` correctly highlights preceding stars. Stars scale up 1.15× on hover.

```html
<form class="ease-rating ease-rating-interactive">
  <input type="radio" name="r" id="s5" class="ease-rating-input" value="5" />
  <label for="s5" class="ease-rating-star" aria-label="5 stars">★</label>
  <!-- repeat for stars 4–1 -->
</form>
```

## Features

- **CSS-only:** No JavaScript for basic rating interaction
- **Fractional scores:** `--ease-rating-score` supports decimal values (0–5)
- **Size variants:** sm (1rem), default (1.5rem), lg (2rem), xl (2.5rem)
- **Hover animation:** Stars scale 1.15× on hover with smooth transition
- **Radio persistence:** Selected rating persists after mouse leaves
- **Accessible:** ARIA labels, semantic form inputs, keyboard navigable
- **Reduced motion:** Disables transitions when `prefers-reduced-motion: reduce`
- **Customizable:** `--ease-rating-color`, `--ease-rating-color-empty`, `--ease-rating-size`, `--ease-rating-gap`
