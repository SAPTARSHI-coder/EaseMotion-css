# Focus Mode Command Panel

## What does this do?

Focus Mode Command Panel is a self-contained HTML and CSS command surface that presents productivity actions as animated, keyboard-friendly rows with strong focus states and a compact session summary.

## How is it used?

Create a `command-panel` wrapper, then add `command-item` buttons with item-specific accent classes such as `item-plan`, `item-review`, `item-note`, or `item-share`.

```html
<button class="command-item item-plan" type="button">
  <span class="command-icon">01</span>
  <span class="command-copy">
    <strong>Plan next milestone</strong>
    <small>Open planning checklist with the highest impact items.</small>
  </span>
  <span class="command-key">P</span>
</button>
```

Available accent classes:

- `item-plan`
- `item-review`
- `item-note`
- `item-share`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to improve orientation: the panel enters gently, command rows appear in sequence, hover and focus states are clear, and the reduced-motion media query keeps the pattern accessible. The demo works directly in the browser with no JavaScript, CDNs, build tools, or external frameworks.
