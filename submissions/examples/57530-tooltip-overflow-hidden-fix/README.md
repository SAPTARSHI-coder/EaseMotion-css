# Tooltip Overflow Clipping Fix

## The Problem

In CSS layout design, tooltips are typically positioned using `position: absolute` relative to their parent trigger buttons (which have `position: relative`).

However, if an ancestor container (like a `.card` layout) has `overflow: hidden` (or `overflow: auto` / `overflow: scroll` to clip content, crop images, or manage grid/carousel bounds), **any nested absolute elements will be cropped by that container's boundary** if their containing block resides inside it. As a result, the tooltips are cut off and rendered completely unreadable.

This showcase demonstrates three pure CSS techniques to break tooltips out of `overflow: hidden` containers.

---

## The CSS Solutions

### 1. Solution A: CSS Anchor Positioning (Modern Web Standard)

Modern CSS introduces **Anchor Positioning**, allowing absolute and fixed elements to position themselves relative to a designated anchor on the screen, completely disregarding parent overflow constraints.

#### How it works:

We declare the trigger button as the anchor using the `anchor-name` property. The tooltip is positioned using `position: fixed` to remove it from the parent card's clipping tree, but stays tethered to the button using the `position-anchor` property. The browser recalculates its layout coordinates in real-time, even during page scrolling.

#### HTML / CSS:

```html
<button class="action-btn anchor-trigger" aria-label="Button Trigger">
  Trigger Button
</button>
<span class="tooltip-bubble tooltip-anchor" role="tooltip">Tooltip text</span>
```

```css
.anchor-trigger {
  anchor-name: --my-anchor;
}

.tooltip-anchor {
  position: fixed; /* Escapes overflow hidden clipping */
  position-anchor: --my-anchor;
  bottom: calc(anchor(--my-anchor top) + 10px);
  left: anchor(--my-anchor center);
  transform: translateX(-50%);
}
```

---

### 2. Solution B: Decoupled Container Structure (Legacy-Friendly)

A robust structural layout solution that works across all older browsers without relying on experimental APIs.

#### How it works:

An absolutely positioned element is positioned relative to its nearest **positioned ancestor** (any element with `position: relative`, `absolute`, `fixed`, or `sticky`). If we separate the container that establishes the positioning context and the container that clips overflow, we can bypass the clipping completely:

1. An outer wrapper `card-outer-wrap` is given `position: relative` (to serve as the containing block).
2. The inner wrapper `card-inner-clip` is given `overflow: hidden`, but is kept `position: static` (not positioned).
3. The tooltip, nested inside, bubbles up past the static inner wrapper and positions itself relative to the outer wrapper, which does not clip overflow.

#### HTML / CSS:

```html
<!-- Outer wrapper establishes containing block context -->
<div class="card-outer-wrap" style="position: relative;">
  <!-- Inner container handles overflow clipping -->
  <div class="card-inner-clip" style="position: static; overflow: hidden;">
    <button class="action-btn" aria-label="Button Trigger">
      Hover
      <!-- Tooltip is absolute relative to card-outer-wrap -->
      <span class="tooltip-bubble tooltip-structural" role="tooltip"
        >Tooltip text</span
      >
    </button>
  </div>
</div>
```

```css
.tooltip-structural {
  position: absolute;
  bottom: 242px; /* Positioned relative to card-outer-wrap */
  left: 50%;
  transform: translateX(-50%);
}
```

---

### 3. Solution C: Viewport Fixed Position Breakout

Useful for fixed layouts, application modals, or sticky panels that do not shift position on document scroll.

#### How it works:

Setting `position: fixed` removes the element from the card container flow, positioning it relative to the viewport instead. We apply fixed coordinates (such as offset-margins or precise heights) to place it near the trigger, ensuring it is drawn in the top layer.

---

## Custom CSS Properties

You can customize the layout themes and tooltips by modifying these variables:

| Property             | Default Value                            | Description                                             |
| -------------------- | ---------------------------------------- | ------------------------------------------------------- |
| `--bg-tooltip`       | `#ffffff`                                | Background color of the tooltip bubble.                 |
| `--text-tooltip`     | `#0a0b10`                                | Color of the tooltip text.                              |
| `--tooltip-shadow`   | `0 10px 30px -5px rgba(0, 0, 0, 0.4)...` | Drop shadow styling for the tooltips.                   |
| `--transition-speed` | `0.3s`                                   | Default duration for hover state transition animations. |

---

## Accessibility Compliance

- **Keyboard Support**: Focus states are integrated using `:focus-within` selectors. Keyboard users can Tab through buttons, which triggers the tooltip transitions and allows reading their content.
- **Screen Reader Support**: Uses appropriate semantic components (e.g. `button`, `span`) along with matching `role="tooltip"` and `aria-label` properties.
- **Motion Reduction**: Disables coordinate and scaling transitions when `prefers-reduced-motion: reduce` is detected to prevent motion sickness.
