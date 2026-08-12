# EaseMotion CSS Tooltip Component

A lightweight, accessible, pure CSS tooltip component designed for EaseMotion. It does not require any JavaScript and relies on CSS transitions and pseudo-elements triggered on hover or focus.

---

## Classes Reference

- `.ease-tooltip`: Core wrapper class. Placed directly on the host element. It configures the positioning context and default styles.
- `.ease-tooltip--top`: Positions the tooltip directly above the element, shifting upwards on entry.
- `.ease-tooltip--bottom`: Positions the tooltip directly below the element, shifting downwards on entry.
- `.ease-tooltip--left`: Positions the tooltip to the left of the element, shifting leftwards on entry.
- `.ease-tooltip--right`: Positions the tooltip to the right of the element, shifting rightwards on entry.

---

## Customization (CSS Variables)

You can easily override look, feel, and performance using these custom variables:

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-tooltip-bg` | The background color of the tooltip bubble and arrow pointer | `#0f172a` |
| `--ease-tooltip-color` | The text color inside the tooltip bubble | `#f8fafc` |
| `--ease-tooltip-delay` | Transition delay to prevent immediate flash on rapid hover | `0s` |

---

## How to Use

### 1. Basic HTML Structure
Add the classes and define the content using the `data-tooltip` attribute. For screen reader accessibility, make sure to add a corresponding `aria-label` or role specification.

```html
<!-- Tooltip on Top -->
<button class="ease-tooltip ease-tooltip--top" data-tooltip="Save changes" aria-label="Save changes">
  Save
</button>

<!-- Tooltip on Right -->
<button class="ease-tooltip ease-tooltip--right" data-tooltip="Delete item" aria-label="Delete item">
  Delete
</button>
```

### 2. Custom Theming Example
Specify inline styles or CSS rules to customize individual tooltip colors and triggers:

```html
<button 
  class="ease-tooltip ease-tooltip--top" 
  style="--ease-tooltip-bg: #818cf8; --ease-tooltip-color: #0f172a; --ease-tooltip-delay: 0.15s;" 
  data-tooltip="Premium feature!" 
  aria-label="Premium feature!">
  Upgrade
</button>
```

---

## Accessibility (A11y)
- **Keyboard Navigation**: Unlike simple `:hover` tooltips, this component utilizes `:focus-within` and `:focus-visible`. If a user tabs to the button with their keyboard, the tooltip is rendered automatically.
- **Screen Reader Support**: The tooltip content is linked via standard accessibility tags such as `aria-label`.
- **Reduced Motion**: Respects systems' preference settings by stripping shifts and delay transitions when `prefers-reduced-motion: reduce` is detected.