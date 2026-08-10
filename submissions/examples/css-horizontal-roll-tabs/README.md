# CSS Horizontal Roll Tabs

A pure CSS tabs component styled as a dashboard analytics panel, where each panel rolls in from the side rather than fading or sliding flat. No JavaScript, no dependencies.

## How it works

Same radio-hack tab switching as elsewhere in the framework. The roll effect combines two transforms on each panel at once: `translateX()` to move it in from the right, and `rotateX()` to tilt it around the horizontal axis, with `transform-origin: left center` so it rotates around its left edge rather than its center. Moving and rotating together at the same time is what makes it read as a "roll" rather than a plain slide or a plain rotate.

`perspective` is set on the parent `.ease-tabs-scene`, the same requirement as any CSS 3D transform, so the `rotateX` actually has visible depth instead of just squashing flat.

## Files

- `demo.html` – a 3-tab dashboard analytics panel (Today, This Week, This Month)
- `style.css` – all styling, custom properties, and the roll transition
- `README.md` – this file

## Custom properties

Set on `:root` in `style.css`:

- `--ease-roll-duration` – 0.5s
- `--ease-roll-easing` – cubic-bezier(0.65, 0, 0.35, 1)
- `--ease-roll-radius` – 12px
- `--ease-roll-perspective` – 1000px (lower = more dramatic roll)
- `--ease-roll-distance` – 60px, how far sideways the panel starts
- `--ease-roll-angle` – 45deg, how far rotated the panel starts
- `--ease-roll-bg` – panel background
- `--ease-roll-border` – border color
- `--ease-roll-text` – panel title color
- `--ease-roll-muted-text` – panel description color
- `--ease-roll-accent` – active tab border color

Example override:

```css
:root {
  --ease-roll-distance: 100px;
  --ease-roll-angle: 60deg;
}
```

## Notes

- `perspective` must stay on the parent scene, not the panel, for the 3D roll to render correctly
- Fully responsive, with breakpoints at 768px and 480px
- Respects `prefers-reduced-motion` — all transform/transition is disabled, panels appear instantly with no roll