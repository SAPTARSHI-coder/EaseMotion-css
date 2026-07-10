# Cyberpunk Neon Elastic Slide Tooltip

## 1. What does this do?
This component provides a pure CSS tooltip that slides in elastically from four directions (top, bottom, left, right) on hover or keyboard focus, styled in a premium Cyberpunk Neon aesthetic.

## 2. How is it used?
Wrap the target trigger element (like a button) and the tooltip container inside a relative container, and link them using standard accessibility attributes.

### HTML Structure:
```html
<div class="tooltip-wrapper">
  <!-- Trigger Element -->
  <button class="cyber-btn btn-cyan" aria-describedby="tooltip-top-id">
    LAUNCH UNIT
  </button>
  
  <!-- Tooltip Element -->
  <div id="tooltip-top-id" class="cyber-tooltip tooltip-top" role="tooltip">
    <div class="tooltip-header">
      <span>WARP CORE</span>
    </div>
    <p class="tooltip-body">Initiates main reactor plasma purge.</p>
  </div>
</div>
```

### Directional Classes:
Apply one of the following placement modifier classes on the `.cyber-tooltip` element:
- `tooltip-top`: Positioned above trigger, slides upward elastically.
- `tooltip-bottom`: Positioned below trigger, slides downward elastically.
- `tooltip-left`: Positioned to the left of trigger, slides leftward elastically.
- `tooltip-right`: Positioned to the right of trigger, slides rightward elastically.

