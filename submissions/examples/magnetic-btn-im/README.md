# Magnetic Button

## What does this do?
A button that elastically pulls toward the cursor when hovered, then snaps back with a spring animation on mouseleave. CSS handles the spring easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`). ~12 lines of JS track the cursor offset from the button center and apply `transform: translate(x, y)`.

## How to use it
```html
<!-- Add data-magnetic to any button or link -->
<button class="magnetic-btn" data-magnetic>Get Started</button>

<!-- Control pull strength (default: 0.4) -->
<button class="magnetic-btn" data-magnetic data-magnetic-strength="0.6">Strong</button>

<!-- Works on links -->
<a href="#" class="magnetic-btn" data-magnetic>Link</a>
```

```js
// Required JS (~12 lines) — add once per page
document.querySelectorAll('[data-magnetic]').forEach(btn => {
  const strength = parseFloat(btn.dataset.magneticStrength) || 0.4;
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const deltaX = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const deltaY = (e.clientY - (rect.top + rect.height / 2)) * strength;
    btn.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)';
  });
});
```

## Variants
- `.magnetic-btn` — primary purple
- `.magnetic-btn--secondary/success/danger` — color variants
- `.magnetic-btn--outline` — transparent with border
- `.magnetic-btn--ghost` — minimal
- `.magnetic-btn--sm/lg` — size variants
- `data-magnetic-strength` — pull strength 0.1–1.0

## Why it fits EaseMotion CSS
EaseMotion has grow, lift, glow, shimmer — but nothing that physically reacts to cursor proximity. The magnetic effect is one of the most premium-feeling interactions in modern UI. Motion that responds to the user feels alive — exactly what animation-first means.
