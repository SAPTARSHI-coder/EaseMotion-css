# Icon Wiggle Hover

## What does this do?

Applies a playful, quick rotate oscillation (wiggle) to an icon or element on hover, drawing attention to interactive triggers without causing layout shifts.

## How is it used?

Simply add the class to your interactive button or container element. When hovered, any icon child (`svg`, `i`, `.icon`, or `.wiggle-target`) will run the wiggle animation:

```html
<!-- The icon inside this button will wiggle on hover -->
<button class="ease-icon-wiggle-hover-ag">
  <svg class="icon" ...></svg>
  <span>Notifications</span>
</button>

<!-- Or apply it directly to an element to wiggle it on hover -->
<span class="ease-icon-wiggle-hover-ag">🔔</span>
```

## Why is it useful?

It provides a subtle, satisfying micro-interaction for icon-based triggers (like buttons, toolbars, and navigation items). By keeping the rotation fast and centered, it gives the interface a responsive, springy, and premium feel while avoiding heavy layout reflows or requiring JavaScript.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open demo.html directly in your browser to see the effect.
