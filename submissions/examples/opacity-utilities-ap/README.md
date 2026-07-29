# EaseMotion CSS — Opacity Utilities

This directory implements core utility classes for controlling element transparency (opacity), interactive hover states, active states, and transition mappings in EaseMotion CSS.

---

## What is Opacity?

The CSS `opacity` property sets the degree of transparency of an element.

- `1` is fully opaque (completely visible).
- `0` is fully transparent (completely invisible, though still present in the DOM layout).
- Fractional values (e.g. `0.5`) render the element semi-transparent.

---

## Utility Classes Reference

EaseMotion CSS provides core classes for managing base opacity values and state modifiers:

### 1. Base Opacities

Applied directly to elements to set initial transparency:

| Utility Class  | CSS Equivalent              | Description                                |
| :------------- | :-------------------------- | :----------------------------------------- |
| `.opacity-0`   | `opacity: 0 !important;`    | Fully transparent (invisible, selectable). |
| `.opacity-5`   | `opacity: 0.05 !important;` | 5% opacity.                                |
| `.opacity-10`  | `opacity: 0.1 !important;`  | 10% opacity.                               |
| `.opacity-25`  | `opacity: 0.25 !important;` | 25% opacity (ideal for dividers).          |
| `.opacity-40`  | `opacity: 0.4 !important;`  | 40% opacity.                               |
| `.opacity-50`  | `opacity: 0.5 !important;`  | 50% opacity (half transparent).            |
| `.opacity-75`  | `opacity: 0.75 !important;` | 75% opacity (ideal for disabled forms).    |
| `.opacity-90`  | `opacity: 0.9 !important;`  | 90% opacity.                               |
| `.opacity-100` | `opacity: 1 !important;`    | 100% opaque (fully visible).               |

### 2. Hover Opacity Modifiers

Changes the opacity of an element when a user hovers over it:

- `.hover-opacity-0:hover`
- `.hover-opacity-20:hover`
- `.hover-opacity-50:hover`
- `.hover-opacity-70:hover`
- `.hover-opacity-80:hover`
- `.hover-opacity-90:hover`
- `.hover-opacity-100:hover`

### 3. Active Click Opacity Modifiers

Changes the opacity of an element when it is clicked/active:

- `.active-opacity-20:active`
- `.active-opacity-50:active`
- `.active-opacity-75:active`
- `.active-opacity-100:active`

---

## Usage Examples

### 1. Glassmorphic Card (Hover Focus Glow)

Build a modern blurred card sheet that brightens smoothly on hover:

```html
<div class="glass-card opacity-75 hover-opacity-100 speed-medium">
  <h4>Metrics Report</h4>
  <p>Dashboard configurations</p>
</div>
```

### 2. Image Caption Hover Reveal

Fades out a dark overlay and fades in a text caption layer when the banner is hovered:

```html
<div class="image-wrapper" style="position: relative;">
  <!-- Dark mask layer (fades out on hover) -->
  <div class="dark-mask opacity-70 hover-opacity-30 speed-medium"></div>
  <img src="photo.jpg" alt="Art Banner" />

  <!-- Text Caption layer (fades in on hover) -->
  <div class="caption-content opacity-0 hover-opacity-100 speed-medium">
    <h3>Scenic Depth</h3>
  </div>
</div>
```

### 3. Disabled Form Button (Locked state)

Form fields and submit actions that are disabled set `.opacity-50` to signal they are locked:

```html
<input
  type="text"
  class="input-field opacity-50"
  placeholder="Locked field"
  disabled
/>
<button class="submit-btn opacity-50" disabled>Submit Form</button>
```

---

## Accessibility (WCAG 2.1) & Best Practices

- **Preserve Text Readability (Success Criterion 1.4.3)**: Placing text inside transparent containers (such as `.opacity-40` or `.opacity-50` text blocks) can reduce the contrast ratio below the required WCAG AA standard of 4.5:1. Only apply opacity utility classes to non-text elements (background overlays, borders, decorative grids) or ensure that transparent text remains readable against its backing container.
- **Maintain Keyboard Focus Indicators (Success Criterion 2.4.7)**: Avoid applying low opacity modifiers to buttons or links when they have keyboard focus, as this can make focus outline rings invisible. Keep focus states fully visible.

---

## Verification & Testing

Verify opacity transitions by opening `demo.html` in your browser. Select different base and hover transparency settings and hover over the target block.

To run project smoke tests, use:

```bash
npm test
```
