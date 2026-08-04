# Spring Physics Tabs

## What does this do?
A pure-CSS tab component where the active-state indicator and panel transitions use a spring/overshoot easing curve instead of a linear one, styled with a glassmorphism (frosted-glass) aesthetic.

## How is it used?
Structure three radio inputs paired with labels inside a `.spring-tabs` container, followed by a `.spring-tab-indicator` element and one `.spring-tab-panel` per tab:

```html
<div class="spring-tabs" role="tablist">
  <input type="radio" name="spring-tabs" id="tab-1" class="spring-tab-input" checked>
  <label class="spring-tab-label" for="tab-1">Overview</label>

  <input type="radio" name="spring-tabs" id="tab-2" class="spring-tab-input">
  <label class="spring-tab-label" for="tab-2">Details</label>

  <span class="spring-tab-indicator" aria-hidden="true"></span>

  <div class="spring-tab-panel" id="panel-1">...</div>
  <div class="spring-tab-panel" id="panel-2">...</div>
</div>
```

The spring feel is tunable without touching any rule, via custom properties set on `.spring-tabs`:

```css
.spring-tabs {
  --spring-duration: 0.6s;
  --spring-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
  --tab-active-scale: 1.04;
}
```

## Why is it useful?
It fits EaseMotion's zero-JavaScript philosophy: tab switching, the sliding indicator, and panel entry are all driven by the native `:checked` state and CSS sibling selectors, with no script required. Because the radio inputs stay in the tab order and respond to arrow keys and space, the component is keyboard accessible by default rather than needing ARIA scripting bolted on afterward. `prefers-reduced-motion` is respected so the spring effect degrades gracefully for users who need it to.