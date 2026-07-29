# Contextual Sibling Dock Magnet Effect (`ease-dock-magnet`)

A smooth macOS-inspired dock magnification proximity curve built entirely with pure CSS selectors.

## Mechanics

This utility leverages CSS proximity selectors and transform matrices to dynamically scale target objects and their immediate forward and backward adjacent sibling components without relying on high-overhead JavaScript resize calculation bounds.

- **Target Item Node:** Expands to `scale(1.5)` upon active focus/hover conditions.
- **Primary Adjacent Sibling Blocks:** Expand partially to `scale(1.25)` using forward general sibling selectors (`+`) and the backward parenthood pseudo-class (`:has()`).
- **Secondary Adjacent Sibling Blocks:** Scale subtly to `scale(1.1)` to produce an organic layout warp across the navbar structure.

## File Contents
- `demo.html`: The glassmorphic preview implementation layout dashboard.
- `style.css`: The independent, composable utility selectors rule sheets.

## Integration Setup
To use this effect in your layout designs, plug the core structural class hooks onto your list elements:
```html
<ul class="ease-dock-magnet">
  <li class="ease-magnet-item">...</li>
  <li class="ease-magnet-item">...</li>
</ul>
```
## By
Pari Dubey