# Popover Blur Entrance — Dashboard Analytics

### 1. What does this do?
A pure CSS popover that transitions in with a smooth blur-to-clear entrance effect, styled for dark dashboard analytics interfaces.

### 2. How is it used?
Add the wrapper, checkbox, trigger label, and content container:

```html
<div class="popover-wrapper">
  <input type="checkbox" id="my-toggle" class="popover-toggle">
  <label for="my-toggle" class="popover-trigger">Open</label>
  <div class="popover-content">
    Your content here
  </div>
</div>
```

Customize via CSS custom properties:

```css
:root {
  --popover-blur: 10px;
  --popover-speed: 0.4s;
  --popover-easing: cubic-bezier(0.16, 1, 0.3, 1);
  --popover-scale: 0.9;
}
```

### 3. Why is it useful?
Adds a zero-JavaScript popover with a modern blur-entrance transition to the EaseMotion library. Designed for dashboard analytics UIs — dark glass aesthetic, metric-focused content, keyboard accessible, and fully configurable through standard CSS custom properties.
