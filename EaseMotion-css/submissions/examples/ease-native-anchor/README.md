# Ease Native Anchor Component

## 1. What does this do?

The `ease-native-anchor` component demonstrates native CSS Anchor Positioning. It tethers an element (such as a tooltip or dropdown menu) directly to a trigger element (a button) purely in CSS without requiring JavaScript positioning logic or calculations.

## 2. How is it used?

Define the anchor trigger using `anchor-name` and attach the target element using `position-anchor`, `anchor()`, and `position-try-options`:

```css
/* 1. Define the Anchor Element */
.ease-anchor-btn {
  anchor-name: --tooltip-trigger;
}

/* 2. Position the Tethered Element */
.ease-tooltip {
  position: absolute;
  position-anchor: --tooltip-trigger;
  top: calc(anchor(bottom) + 8px);
  left: anchor(center);
  translate: -50% 0;
  position-try-options: flip-block;
}
```

```html
<button class="ease-anchor-btn" popovertarget="ease-tooltip">Click for Anchored Tooltip</button>
<div id="ease-tooltip" class="ease-tooltip" popover>
  I am tethered natively via CSS Anchor Positioning.
</div>
```

## 3. Why is it useful?

CSS Anchor Positioning provides browser-native tethering and collision detection (such as `position-try-options: flip-block`). This completely replaces heavy JavaScript positioning libraries like Popper.js and Floating UI, eliminating script execution overhead, resize listener listeners, layout thrashing, and third-party dependencies while maintaining top-notch performance and responsiveness.
