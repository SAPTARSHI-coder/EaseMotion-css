# ease-hover-card-gradient-border-sap

A card whose gradient border ring fades in only on hover, using a masked pseudo-element (no static border consuming layout space).

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <div class="gradient-border-hover-sap"><h3>Title</h3><p>Text</p></div>
```

## Notes
- Border ring is the same masked `::before` technique as the always-on spinning gradient border component, but here it's static and simply fades in/out via opacity on hover instead of rotating continuously.
- `isolation: isolate` + `z-index: -1` keeps the pseudo-element correctly layered behind card content while still clipped to the card.
- Respects `prefers-reduced-motion`: opacity fade duration is shortened but not removed, since a fade-in/out is a minor, non-continuous state signal rather than persistent motion.