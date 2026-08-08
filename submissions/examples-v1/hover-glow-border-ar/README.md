# Animated Glow Border Hover Effect

## What does this do?
This adds a highly stylized hover effect where an element (like a pricing card) appears to have a glowing gradient border continuously rotating around it. The glow intensifies when the user hovers over the element.

## How is it used?
Wrap your content inside a container with the `.hover-glow-border` class. The actual content must be inside an inner container with the `.hover-glow-border-content` class to mask the middle of the gradient background.

Example:
```html
<div class="hover-glow-border">
  <div class="hover-glow-border-content">
    <h3>Card Content</h3>
    <p>This is inside the glowing border.</p>
  </div>
</div>
```

## Why is it useful?
- It creates a premium, modern aesthetic commonly seen in SaaS pricing tables or crypto dashboards.
- It is notoriously tricky to animate gradient borders smoothly purely with CSS. This implementation solves it efficiently using an animated pseudo-element (`::before`) with a `conic-gradient`, masking the center with the inner content block.
