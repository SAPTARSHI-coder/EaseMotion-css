# CSS Zoom-In Popover

A pure CSS popover styled as a player stats breakdown, click-triggered with a zoom-in entrance. No JavaScript, no dependencies.

## How it works

Unlike a hover-tooltip, this popover stays open once clicked, since it's driven by a checkbox rather than `:hover`. The trigger label toggles the checkbox, and the popover itself scales in from `scale(0.85)` to `scale(1)` with `transform-origin: top left`, anchored at the corner nearest the trigger.

A second label inside the popover, also tied to the same checkbox, acts as a close button.

## Files

- `demo.html` – a "view breakdown" trigger revealing a season stats popover
- `style.css` – all styling, custom properties, and the zoom-in transition
- `README.md` – this file

## Custom properties

Set on `:root` in `style.css`:

- `--ease-popover-duration` – 0.25s
- `--ease-popover-easing` – cubic-bezier(0.34, 1.56, 0.64, 1) (slight overshoot for a springy zoom)
- `--ease-popover-radius` – 10px
- `--ease-popover-bg` – popover background
- `--ease-popover-border` – border color
- `--ease-popover-text` – heading text color
- `--ease-popover-muted-text` – stat label color
- `--ease-popover-accent` – close button color

Example override:

```css
:root {
  --ease-popover-accent: #22c55e;
  --ease-popover-duration: 0.2s;
}
```

## Notes

- Click-triggered rather than hover-triggered, so it works on touch devices too
- Fully responsive; popover width shrinks slightly at the 480px breakpoint
- Respects `prefers-reduced-motion` — the popover appears/disappears instantly with no zoom