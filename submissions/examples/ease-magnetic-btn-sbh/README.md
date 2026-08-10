# ease-magnetic-btn

An interactive button that gently drifts toward the cursor on hover and springs back to its origin when the pointer leaves.

## What does this do?

Adds a **magnetic hover interaction** to buttons: each button subtly follows the user's cursor while hovered, creating a premium, tactile feel, then eases back with a soft overshoot (spring) when the pointer exits.

## How is it used?

1. Add the `mag-btn` class to a `<button>` and the `data-magnetic` attribute to enable tracking.
2. Optionally set `data-strength` (0–1) to control how strongly the button follows the cursor (default `0.4`).
3. Wrap the visible text in a `.mag-btn__label` span — it drifts slightly more than the button for a layered parallax effect.

```html
<link rel="stylesheet" href="style.css" />

<button type="button" class="mag-btn mag-btn--primary" data-magnetic data-strength="0.4">
  <span class="mag-btn__label">Primary Action</span>
</button>
```

The demo ships four variants — `mag-btn--primary`, `mag-btn--ghost`, `mag-btn--pill`, and `mag-btn--icon` — to show how the magnetic effect adapts to different button shapes.

### How it works under the hood

A tiny inline script reads the pointer position relative to each button's center and writes it to the `--mx` / `--my` CSS custom properties (as percentages). The CSS drives the actual motion with `transform: translate3d(var(--mx), var(--my), 0)`, so the GPU handles compositing. A separate spring easing curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`) is applied only on the *return* so the button bounces back naturally while tracking stays 1:1 with the cursor.

## Why is this useful?

- **Animation-first philosophy** — it is a reusable motion utility, not a static component, matching EaseMotion CSS's core mission.
- **Performance-friendly** — motion runs on `transform` + CSS variables (no per-frame layout thrash), and `will-change: transform` keeps it on the compositor.
- **Accessible by default** — respects `prefers-reduced-motion` (motion is fully disabled), keeps semantic `<button>` elements, and exposes `:focus-visible` outlines for keyboard users.
- **Reusable & composable** — the strength is data-driven per button, and the four modifier classes show it slots into any button style without restructuring markup.

## Files

- `demo.html` — self-contained interactive demo (open directly in a browser; no server, CDNs, or build step required).
- `style.css` — the magnetic button styles and variants.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation, as described in the contribution guide.
