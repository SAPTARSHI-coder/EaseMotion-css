# EaseMotion Design Token Playground

An interactive documentation showcase that lets you **live-edit EaseMotion CSS design tokens** — colors, motion speeds, border radius, and shadows — and instantly see buttons, cards, and animations re-theme in real time.

> Submission track: `submissions/docs/ease-token-playground-sp/`
> Contributor suffix: `sp`

---

## What does this do?

EaseMotion CSS is themed entirely through CSS custom properties (design tokens) such as `--ease-color-primary`, `--ease-speed-fast`, and `--ease-radius-md`. The README documents how to override them, but reading about tokens and *feeling* them are two different things.

This playground turns the documentation into an interactive learning tool:

- **Token control panel** — color pickers and sliders for the most-used tokens
- **Side-by-side comparison** — a read-only "default tokens" preview next to your live-edited "custom tokens" preview
- **Live animation stage** — replay `ease-fade-in`, `ease-slide-up`, and `ease-zoom-in` and watch their timing follow your motion tokens
- **Copy your theme** — a generated `:root { ... }` block you can paste straight into any project

## How is it used?

1. Open `demo.html` in a browser (EaseMotion CSS loads from the jsDelivr CDN).
2. Move any control in the left panel:
   - **Colors** — `--ease-color-primary`, `--ease-color-primary-dark`, `--ease-color-success`, `--ease-color-danger`
   - **Motion** — `--ease-speed-fast`, `--ease-speed-medium`, `--ease-speed-slow`
   - **Shape & depth** — `--ease-radius-md` and shadow intensity (`--ease-shadow-md`)
3. Watch the right-hand "custom" preview update instantly, while the "default" preview stays fixed as a baseline.
4. Click the animation replay chips to see entrance animations run at your custom speeds.
5. Press **Copy CSS** to copy the generated `:root` override block.

Example output you can paste into your own stylesheet:

```css
:root {
  --ease-color-primary: #f97316;
  --ease-speed-fast: 100ms;
  --ease-radius-md: 1rem;
}
```

## Why is it useful?

- **Teaches the token system** — beginners immediately understand that EaseMotion theming requires zero Sass/PostCSS, just CSS variables.
- **Faster theme prototyping** — designers can dial in a brand palette and motion feel, then export the overrides in one click.
- **Reinforces the framework philosophy** — every visual change in the demo flows through documented `--ease-*` tokens; nothing is hard-coded.
- **Safe and self-contained** — no backend, no build step, no changes to `core/` or `components/`.

## How the live preview works

The custom preview panel is a scoped container. Token overrides are applied as inline custom properties on that container only, so:

- the **default panel** keeps the framework's original token values, and
- the **custom panel** inherits your edited values through the normal CSS cascade —
  exactly how a real project would override tokens on `:root`.

## Accessibility

- Every control has a visible `<label>` and keyboard-accessible native input.
- Focus states use `:focus-visible` outlines driven by `--ease-color-primary`.
- Copy feedback is announced through an `aria-live="polite"` status region.
- `prefers-reduced-motion: reduce` is respected: playground micro-interactions collapse to near-zero duration, and the animation stage informs the user that motion is minimized (EaseMotion CSS itself also globally reduces animation under this preference).

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Self-contained playground UI + vanilla JS logic |
| `style.css` | Playground layout styles (all values reference `--ease-*` tokens) |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/` — no existing files modified, no deletions.
- Uses the official CDN bundle (`easemotion.min.css`); no framework source copied.
- Folder name carries the unique contributor suffix `-sp` per the naming policy.
