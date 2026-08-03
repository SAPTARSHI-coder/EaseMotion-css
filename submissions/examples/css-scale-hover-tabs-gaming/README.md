# CSS Scale-Hover Tabs (Gaming Hub)

A pure CSS tabs component styled as a gaming hub category browser, with a sliding indicator bar and a scale-hover effect on each trigger. No JavaScript, no dependencies.

## How it works

This builds on the same radio-hack pattern used in tabs elsewhere in the framework, with one addition: a sliding indicator bar under the tab row. Since all four tabs sit in an equal-width CSS Grid, each one occupies a known 25% slice, so the indicator can move to the correct tab purely with `translateX(0%, 100%, 200%, 300%)` based on which radio is checked — no JavaScript measuring of tab positions needed.

The hover scale on each trigger is deliberately transform-only, so it never affects the grid layout or shifts the indicator's math, even while a tab is being hovered and another is active at the same time.

## Files

- `demo.html` – a 4-tab gaming category browser (Action, RPG, Strategy, Indie)
- `style.css` – all styling, custom properties, sliding indicator, and hover scale
- `README.md` – this file

## Custom properties

Set on `:root` in `style.css`:

- `--ease-tabs-duration` – 0.3s
- `--ease-tabs-easing` – cubic-bezier(0.4, 0, 0.2, 1)
- `--ease-tabs-radius` – 8px
- `--ease-tabs-bg` – panel background
- `--ease-tabs-border` – border color
- `--ease-tabs-text` – inactive tab text color
- `--ease-tabs-active-text` – active tab / panel text color
- `--ease-tabs-accent` – indicator bar color
- `--ease-tabs-accent-glow` – indicator glow color
- `--ease-tabs-hover-scale` – how much a tab scales on hover (1.08 = 8%)

Example override:

```css
:root {
  --ease-tabs-accent: #ef4444;
  --ease-tabs-accent-glow: rgba(239, 68, 68, 0.35);
}
```

## Notes

- If you add or remove tabs, update both the grid column count and the indicator's `translateX` percentages to match (currently built for exactly 4 equal-width tabs)
- Fully responsive, with breakpoints at 768px and 480px
- Radio/label pairing keeps tabs keyboard-navigable by default
- Respects `prefers-reduced-motion` — hover scale, indicator sliding, and the panel entrance animation are all disabled for users who have that set