# Ease Expand Control

## What does this do?

A compact control for indicating whether content is collapsed or expanded.

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<button class="expand-control" aria-label="Expand details">
    <span class="expand-icon">⌄</span>
</button>
```

### Collapsed state

```html
<div class="expand-item">
    <button class="expand-control" aria-label="Expand details">
        <span class="expand-icon">⌄</span>
    </button>
</div>
```

### Expanded state

Add the `expanded` class:

```html
<div class="expand-item expanded">
    <button class="expand-control" aria-label="Collapse details">
        <span class="expand-icon">⌄</span>
    </button>
</div>
```

### Features

- Expand icon
- Collapsed state
- Expanded state
- Rotation animation
- Hover interaction
- Responsive sizing
- Pure CSS
- No JavaScript required

## Why is it useful?

Expand controls are commonly used for panels, lists, settings sections, FAQs, and other interfaces containing expandable content.

This component provides clear visual feedback for collapsed and expanded states using a smooth icon rotation while following the animation-first philosophy of EaseMotion CSS.