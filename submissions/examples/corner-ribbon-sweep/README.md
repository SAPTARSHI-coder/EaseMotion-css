# Corner Ribbon Sweep

A reusable, CSS-only corner ribbon that sweeps into view on hover, using
only transforms and transitions. No JavaScript required.

## Why

- Pure CSS — zero dependencies, zero JS
- Reusable interaction for featured cards, pricing tiers, and promo UI
- Lightweight and fully customizable via CSS custom properties
- Fits EaseMotion CSS's animation-first, composable design philosophy

## Usage

```html
<div class="ribbon-card-tay">
  <span class="corner-ribbon-tay">Featured</span>
  <h3>Premium Plan</h3>
  <p>Unlock advanced features with our premium package.</p>
</div>
```

Include `style.css`, wrap any card content in `.ribbon-card-tay`, and drop
`.corner-ribbon-tay` inside it as the first child — it sweeps in on hover
(and on keyboard focus within the card).

## Customization

The component exposes CSS custom properties on `.corner-ribbon-tay`:

| Variable        | Default                          | Purpose                     |
|------------------|-----------------------------------|-------------------------------|
| `--cr-color`     | `#fff`                            | Ribbon text color             |
| `--cr-bg`        | `#2563eb`                         | Ribbon background color       |
| `--cr-duration`  | `0.5s`                            | Sweep animation duration      |
| `--cr-easing`    | `cubic-bezier(.34,1.56,.64,1)`    | Elastic overshoot curve       |

```css
.corner-ribbon-tay {
  --cr-bg: #6c5ce7;
  --cr-duration: 0.3s;
}
```

## Modifier classes

- `.corner-ribbon-tay--accent` — purple ribbon
- `.corner-ribbon-tay--success` — green ribbon, good for sale/promo labels
- `.corner-ribbon-tay--fast` — quicker sweep

All modifiers just override the custom properties above — combine or extend
freely.

## Accessibility

- The ribbon also reveals on `:focus-within`, so keyboard users tabbing into
  the card see the same affordance as mouse hover.
- Respects `prefers-reduced-motion`: the ribbon is shown fully revealed with
  no transition for users who have reduced motion enabled.

## Files

- `demo.html` — live demo with basic usage + variant showcase
- `style.css` — component styles (`-tay` suffixed classes) + demo scaffolding
- `README.md` — this file

## Checklist

- [x] Does not duplicate an existing EaseMotion CSS class
- [x] Naming may be standardized by the maintainer
- [x] Submitted inside `submissions/` only