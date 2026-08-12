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

### CSS Custom Properties:
Exposed parameters can be customized at the `:root` level or scoped to a specific parent class:
- `--tooltip-duration`: Duration of the fade/slide transition (default: `0.5s`).
- `--tooltip-ease`: Easing function for the elastic spring/overshoot transition (default: `cubic-bezier(0.34, 1.56, 0.64, 1)`).
- `--tooltip-slide-offset`: The distance the tooltip slides from (default: `20px`).
- `--tooltip-scale-factor`: The starting scale when hidden (default: `0.92`).

---

## 3. Why is it useful?
It aligns with EaseMotion's philosophy of offering human-readable, high-fidelity motion experiences with zero runtime JavaScript overhead. By employing standard CSS transitions combined with carefully tuned cubic-bezier curves, the tooltip achieves physical spring simulation that remains performant, interruptible, and fully keyboard accessible.
