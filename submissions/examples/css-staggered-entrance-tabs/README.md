# CSS Staggered Entrance Tabs

A pure CSS tabs component styled as a product catalog, where each panel's content — tag, title, description, price — animates in one piece at a time rather than all at once. No JavaScript, no dependencies.

## How it works

Tab switching uses the standard radio-hack pattern. The staggering happens inside each panel: every direct child gets the class `.ease-tabs-item` and the same `@keyframes` fade-up animation, but `nth-child` selectors assign each one a progressively later `animation-delay`, calculated from a single `--ease-stagger-step` custom property multiplied per position. This means the tag appears first, then the title, then the description, then the price, each roughly 80ms after the last.

Since the delay is computed from one shared custom property rather than hardcoded per element, changing the pacing for the whole component is a one-line change.

## Files

- `demo.html` – a 3-tab product catalog (Headphones, Keyboard, Backpack)
- `style.css` – all styling, custom properties, tab switching, and the stagger animation
- `README.md` – this file

## Custom properties

Set on `:root` in `style.css`:

- `--ease-stagger-duration` – 0.4s, how long each item's own fade-up takes
- `--ease-stagger-easing` – ease-out
- `--ease-stagger-step` – 0.08s, the delay added per item position
- `--ease-stagger-radius` – 10px
- `--ease-stagger-bg` – panel background
- `--ease-stagger-border` – border color
- `--ease-stagger-text` – title text color
- `--ease-stagger-muted-text` – description and inactive tab color
- `--ease-stagger-accent` – active tab underline, tag, and price accent

Example override:

```css
:root {
  --ease-stagger-step: 0.15s;
  --ease-stagger-accent: #22c55e;
}
```

## Notes

- If you add or remove items inside a panel, add a matching `nth-child(n)` rule with the next delay multiple, or later items will all inherit the last defined delay
- Fully responsive, with breakpoints at 768px and 480px
- Respects `prefers-reduced-motion` — all items appear instantly at full opacity with no stagger for users who have that set