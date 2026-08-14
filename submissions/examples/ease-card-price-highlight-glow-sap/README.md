# ease-card-price-highlight-glow-sap

A "most popular" pricing card that continuously pulses a soft blue glow, drawing attention without being distracting, with a diagonal ribbon badge.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <div class="price-glow-sap">
     <div class="glow-badge">POPULAR</div>
     <h4>Plan Name</h4>
     <div class="glow-price">$29</div>
     <div class="glow-period">per month</div>
   </div>
```

## Customization
- Glow color/intensity/pulse speed.
- Badge text/rotation angle/position.

## Notes
- The badge ribbon is rotated and positioned to bleed slightly off the card's corner (`right: -30px`), a common "corner ribbon" technique using `overflow: hidden` on the parent to clip the excess.
- Glow pulses via `box-shadow` opacity/spread rather than `transform`, so the card itself never moves — only its perceived emphasis breathes in and out.
- Respects `prefers-reduced-motion`: the pulse animation is disabled and replaced with a static, permanently-visible glow, preserving the "featured" visual cue without motion.