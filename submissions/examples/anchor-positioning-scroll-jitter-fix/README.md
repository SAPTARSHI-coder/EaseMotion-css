# CSS Anchor Positioning Scroll Jitter Fix

## What does this do?
This fix addresses scroll jitter issues when using CSS anchor positioning. Scroll jitter occurs when positioned elements cause layout recalculations during smooth scrolling.

## The Problem

When using CSS anchor positioning (`anchor-name`, `position-anchor`) with smooth scrolling, some browsers experience:

1. **Layout Thrashing**: The scroll position jumps or stutters during smooth scroll
2. **FOUC (Flash of Unstyled Content)**: Brief visual glitch before positioned elements settle
3. **Performance Issues**: Excessive layout recalculations causing jank

## The Solution

This fix uses a two-part approach:

1. **Anchor Scope Isolation**: Use `position: absolute` with explicit containing blocks to prevent layout propagation issues.

2. **Smooth Scroll Stability**: Add scroll-margin to anchor targets to prevent clipping and reduce recalculation triggers.

## Usage

```html
<div class="alm-anchor-scroll-viewport">
  <div class="alm-anchor-trigger-btn" style="anchor-name: --my-anchor">
    Button
  </div>
  
  <!-- Anchor Target Area -->
  <div class="alm-scroll-spacer">
    Scroll content here...
  </div>
  
  <!-- Positioned Element using anchor -->
  <div class="alm-anchor-tooltip" style="position-anchor: --my-anchor">
    Tooltip content
  </div>
</div>
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.alm-sandbox-stage` | Outer container with dark theme styling |
| `.alm-anchor-scroll-viewport` | Scrollable container with fixed height |
| `.alm-anchor-trigger-btn` | Button that establishes anchor point |
| `.alm-anchor-tooltip` | Tooltip positioned relative to anchor |
| `.alm-scroll-spacer` | Demo spacer for scroll testing |

## Key Properties

- `anchor-name`: Establishes an anchor identifier
- `position-anchor`: Links an element to an anchor
- `scroll-margin-top`: Prevents anchor from being hidden under sticky headers
- `position: absolute`: Keeps positioned elements out of document flow

## Benefits

- ✅ Smoother scrolling experience
- ✅ No layout thrashing during scroll
- ✅ Predictable anchor positioning
- ✅ Better scroll performance

## Browser Support

- Chrome 125+ (CSS Anchor Positioning)
- Firefox 130+ (CSS Anchor Positioning)
- Safari 18+ (CSS Anchor Positioning)

Note: For older browsers, elements will render without anchor positioning but still work.
