# CSS `field-sizing: content` — Auto-Resizing Form Inputs

A production-ready demonstration of the **CSS `field-sizing` property** — native auto-resizing form controls (`<input>`, `<textarea>`, `<select>`) without a single line of JavaScript.

## What is `field-sizing`?

The [`field-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing) CSS property controls how form elements are sized:

- **`field-sizing: fixed`** (default) — The browser determines the size based on the element type (fixed width/height)
- **`field-sizing: content`** — The browser sizes the element based on its content. Inputs grow as you type and shrink when you delete.

This eliminates one of the most common JavaScript patterns in web forms — the auto-resizing `<textarea>` and auto-expanding `<input>`.

## Demo Features

This demo showcases **10 practical patterns** across 5 sections:

### How It Works
- Side-by-side comparison: fixed-width input vs content-sized input
- Visual demonstration of clipping vs auto-expansion

### Core Examples
- **Text Input** — Basic `<input type="text">` with auto-resize
- **Number Input** — Quantity fields that match digit count
- **Email Input** — Email fields that fit long addresses
- **Search Input** — Search bars that expand with query length
- **Select Dropdown** — `<select>` that matches the longest option
- **Textarea** — Auto-growing textareas without JS or manual resize handles

### Practical Patterns
- **Tag Input** — Chip-style tags where each tag auto-fits its text
- **Inline Edit** — Click-to-edit fields in a settings panel (label + value layout)
- **Dynamic Breadcrumb** — Breadcrumb segments that auto-size to their content
- **Data Table Filters** — Column header search inputs that don't break the table layout

### Side-by-Side Comparison
- Interactive A/B comparison: `field-sizing: fixed` vs `field-sizing: content`
- Both `<input>` and `<textarea>` demonstrated
- Editable fields — type in both to see the difference live

### Best Practices
- **Use `min-width` and `max-width`** — Prevent fields from collapsing to zero or overflowing layouts
- **Graceful fallback with `@supports`** — Provide reasonable fixed sizes for older browsers
- **Use `ch` units for min-width** — Character-width-based minimums match the input's font
- **Textareas need `min-height`** — Prevent textareas from shrinking to zero without a minimum

## Accessibility

- All inputs have associated `<label>` elements
- `aria-label` on inputs without visible labels
- `:focus-visible` outlines on every focusable element
- Semantic table with `<thead>`, `<tbody>`, and `<th scope="col">`
- Breadcrumb uses `<nav aria-label="Breadcrumb">`
- Minimum 44px touch targets for interactive elements
- Skip-to-content link

## CSS Features Used

| Feature | Usage |
|---------|-------|
| `field-sizing: content` | All auto-resizing form controls |
| `min-width` / `max-width` | Prevent collapse and overflow |
| `min-height` / `max-height` | Textarea size constraints |
| `ch` units | Character-based minimum widths |
| `lh` units | Line-height-based textarea minimum |
| `:focus-within` | Parent highlight on child focus |
| `oklch()` | Perceptually uniform colors |
| `color-scheme` | Browser-native dark mode |
| `@media (prefers-color-scheme)` | Dark mode |
| `@media (prefers-reduced-motion)` | Motion reduction |
| `@media (prefers-contrast)` | High contrast mode |
| `@media (forced-colors)` | Forced colors / Windows High Contrast |
| `@media print` | Print stylesheet |
| CSS Custom Properties | Design tokens |
| CSS Grid / Flexbox | Responsive layouts |
| `text-wrap: balance` | Hero subtitle |

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 123+ |
| Edge | 123+ |
| Firefox | 123+ |
| Safari | Not yet supported (in development) |
| Opera | 109+ |

**Fallback**: Browsers that don't support `field-sizing` will render inputs at their default fixed size — no layout breakage. Use a `size` attribute or explicit `width` as a reasonable fallback for Safari/older browsers.

## Zero JavaScript

This demo uses **zero JavaScript**. Every input auto-resizes purely through CSS `field-sizing: content`. No event listeners, no `oninput` handlers, no DOM manipulation.

## Files

- `demo.html` — Semantic HTML with comprehensive form patterns
- `style.css` — Production-ready stylesheet with design tokens, dark mode, accessibility, and responsive layout
- `README.md` — This documentation

## Related Resources

- [MDN: field-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing)
- [Chrome Developers: field-sizing](https://developer.chrome.com/blog/css-field-sizing)
- [CSSWG Spec: field-sizing](https://drafts.csswg.org/css-ui-4/#field-sizing)
