# CSS 3D Flip Popover for Dashboard Analytics Layouts

### 1. What does this do?
A pure CSS animated popover that reveals a detail panel using a smooth 3D card-flip transition, designed for dashboard analytics card interactions with zero JavaScript overhead.

### 2. How is it used?
Use a hidden checkbox toggle, a label trigger, and a scene wrapper containing a front/back card pair:

```html
<div class="flip-popover-container">
  <input type="checkbox" id="flip-toggle" class="flip-popover-toggle">
  <label for="flip-toggle" class="flip-popover-trigger">View Details</label>

  <div class="flip-popover-scene">
    <div class="flip-popover-card">
      <div class="flip-popover-front">Summary content</div>
      <div class="flip-popover-back">Detailed content</div>
    </div>
  </div>
</div>
```

Customize via CSS custom properties:

| Property | Default | Description |
|---|---|---|
| `--flip-duration` | `0.6s` | Flip animation speed |
| `--flip-easing` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Front-face easing curve |
| `--flip-back-easing` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Back-face easing curve |
| `--flip-scale` | `0.9` | Initial scale factor |
| `--flip-perspective` | `800px` | 3D perspective depth |

### 3. Why is it useful?
Dashboard analytics layouts frequently need to show concise metric summaries with the ability to expand into detailed breakdowns. This component provides that pattern with a visually engaging 3D flip animation, full keyboard accessibility (Space/Enter to toggle), `prefers-reduced-motion` support, and complete responsiveness — all without any JavaScript dependency, aligning with EaseMotion CSS's zero-runtime philosophy.
