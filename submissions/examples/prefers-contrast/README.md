# prefers-contrast

Demonstrates UI components that adapt to the user's contrast preference using the `prefers-contrast` media query. Supports both `more` and `less` contrast modes.

## Usage

```css
/* High contrast overrides */
@media (prefers-contrast: more) {
  .card {
    border-width: 2px;
    box-shadow: none;
  }
}

/* Low contrast overrides */
@media (prefers-contrast: less) {
  .card {
    border-color: #f1f5f9;
    box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  }
}
```

## What's Shown

- **Cards** — border width, shadow, and text color adapt
- **Buttons** — background, border, and underline adapt
- **Text** — font-weight and color contrast adjust
- **Badges** — switch from filled to bordered for higher contrast

## Key Insight

`prefers-contrast` lets you serve users who need high contrast (low vision, bright environments) without sacrificing aesthetics for everyone else. Differentiate between subtle visual hierarchy (`less`) and maximum readability (`more`).

## Browser Support

- Chrome 96+, Edge 96+, Firefox 101+, Safari 15.4+
- No special fallback needed — standard styles apply when the media query doesn't match

## Submission

- **Issue:** #12301
- **Files:** style.css, demo.html
