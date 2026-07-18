# EaseMotion CSS — Justify Content Variants

This directory implements core utility classes for controlling the CSS `justify-content` alignment property in EaseMotion CSS.

---

## What is Justify Content?

The `justify-content` property defines how the browser distributes space between and around content items along the main axis of their flex container or grid track.

### The Alignment Axes

- **Flex Row (`flex-direction: row;`)**: The main axis is horizontal. `justify-content` positions items left, right, or centers them horizontally.
- **Flex Column (`flex-direction: column;`)**: The main axis is vertical. `justify-content` positions items top, bottom, or centers them vertically.

---

## Utility Classes Reference

EaseMotion CSS provides clean classes mapping to standard main-axis alignment settings:

| Utility Class      | CSS Equivalent                               | Description                                                                   |
| :----------------- | :------------------------------------------- | :---------------------------------------------------------------------------- |
| `.justify-start`   | `justify-content: flex-start !important;`    | Packs items from the start edge of the main axis.                             |
| `.justify-end`     | `justify-content: flex-end !important;`      | Packs items from the end edge of the main axis.                               |
| `.justify-center`  | `justify-content: center !important;`        | Packs items directly in the center of the main axis.                          |
| `.justify-between` | `justify-content: space-between !important;` | Spreads items evenly: first item at start edge, last item at end edge.        |
| `.justify-around`  | `justify-content: space-around !important;`  | Spreads items evenly: half-size spaces on boundaries.                         |
| `.justify-evenly`  | `justify-content: space-evenly !important;`  | Spreads items evenly: identical space spacing on all boundaries.              |
| `.justify-stretch` | `justify-content: stretch !important;`       | Stretches items to fill the container (only applies if width/height is auto). |
| `.justify-normal`  | `justify-content: normal !important;`        | Default: items align in their natural placement.                              |

---

## Usage Examples

### 1. Pinned Navigation Header (Space Between)

Spreading header components so the brand sits at the start and navigation actions at the end:

```html
<header class="flex flex-row justify-between" style="align-items: center;">
  <h3>Company Logo</h3>
  <nav class="flex flex-row" style="gap: 1rem;">
    <a href="#">Dashboard</a>
    <a href="#">Settings</a>
  </nav>
</header>
```

### 2. Centered Mobile Media Player Panel (Center)

Centering controls group in the middle of a panel:

```html
<div class="media-row flex flex-row justify-center" style="gap: 1rem;">
  <button class="btn-prev">Previous</button>
  <button class="btn-play">Play</button>
  <button class="btn-next">Next</button>
</div>
```

---

## Accessibility (WCAG 2.1) & Best Practices

- **Avoid Horizontal Viewport Overflow (Success Criterion 1.4.10)**: Utilizing spacing utilities like `.justify-between` or `.justify-evenly` can push elements beyond the right border of mobile viewports if the total combined width of child elements exceeds viewport limits. Apply flex wrapping (`.flex-wrap`) and media queries to switch from rows to columns on smaller screen resolutions.
- **Maintain Consistent DOM Reading Order**: Ensure you preserve logical markup order in the HTML index. Do not reverse tab layouts using `flex-direction: row-reverse;` or custom ordering properties, as this makes keyboard focus tab sequences counter-intuitive for screen reader users.

---

## Browser Compatibility Notes

- **Full support**: `justify-content` has full standard compatibility across all modern desktop and mobile browsers.

---

## Verification & Testing

Verify that your styles load correctly by launching `demo.html` in your web browser. Ensure the sandbox parameters update flexbox layouts dynamically. Run standard project tests to confirm compliance:

```bash
npm test
```
