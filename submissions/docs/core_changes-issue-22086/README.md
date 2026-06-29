# Star Rating Component — EaseMotion CSS

**Issue:** [#22086 — Add star rating component for reviews and feedback](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/22086)

A CSS-only star rating component for displaying or collecting ratings. Built with hidden radio inputs for accessibility and keyboard navigation.

## Structure

```
submissions/core_changes-issue-22086/
├── demo.html       # Live demo page showing all variants
├── style.css       # Component styles
└── README.md       # This file
```

## Variants

| Variant | Class | Description |
|---------|-------|-------------|
| **Interactive** | `.ease-rating` | Clickable star rating using hidden radio inputs |
| **Read-Only** | `.ease-rating-readonly` | Display-only mode with no interaction |
| **Fractional** | `.ease-rating-fractional` | Partial star display using width clipping |
| **Small** | `.ease-rating-sm` | Compact 1rem stars |
| **Large** | `.ease-rating-lg` | Large 2rem stars |
| **Extra Large** | `.ease-rating-xl` | Extra large 2.5rem stars |
| **Primary** | `.ease-rating-primary` | Indigo star color |
| **Success** | `.ease-rating-success` | Green star color |
| **Danger** | `.ease-rating-danger` | Red star color |

## Usage

### Interactive
```html
<link rel="stylesheet" href="path/to/style.css" />
<form class="ease-rating">
  <input type="radio" id="star5" name="rating" value="5" />
  <label for="star5"></label>
  <input type="radio" id="star4" name="rating" value="4" />
  <label for="star4"></label>
  <input type="radio" id="star3" name="rating" value="3" />
  <label for="star3"></label>
  <input type="radio" id="star2" name="rating" value="2" />
  <label for="star2"></label>
  <input type="radio" id="star1" name="rating" value="1" />
  <label for="star1"></label>
</form>
```

### Fractional (Display)
```html
<div class="ease-rating ease-rating-fractional">
  <div class="ease-rating-stars-bg">★★★★★</div>
  <div class="ease-rating-stars-fill" style="width:70%">★★★★★</div>
</div>
<span class="ease-rating-count">3.5 (891 reviews)</span>
```

## Features

- CSS-only interactive rating using hidden radio inputs — keyboard accessible
- Read-only variant for displaying existing ratings
- Fractional star support using CSS width clipping
- Size variants: sm, base, lg, xl
- Color variants: default (amber), primary, success, danger
- Custom star colors via `--rating-star-color` variable
- Direction set to `rtl` so first label maps to 5 stars (accessibility best practice)
- `@layer easemotion-components` for proper cascade ordering
- Dark mode, reduced motion, and forced-colors support
