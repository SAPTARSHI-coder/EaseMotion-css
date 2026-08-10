# ease-filter-blur-xk

Blur-to-clear reveal effect for images or text, on hover or click.

Resolves: #35128

## Overview

A reveal effect built entirely on the CSS `filter: blur()` property.
Content starts heavily blurred and smoothly clears to full focus on
interaction. Three variants are included: an image gallery (hover to
reveal), inline spoiler text (click to reveal), and a scroll-triggered
image reveal.

## Markup

**Image (hover variant, default):**

```html
<figure class="ease-filter-blur-xk">
  <img src="..." alt="..." />
  <figcaption>Hover to clear</figcaption>
</figure>
```

**Text (click variant):**

```html
<span class="ease-filter-blur-xk ease-filter-blur-xk--click ease-filter-blur-xk--text"
      tabindex="0" role="button" aria-pressed="false" aria-label="Hidden spoiler, click to reveal">
  the narrator was the culprit all along
</span>
```

**Image (scroll variant):**

```html
<figure class="ease-filter-blur-xk ease-filter-blur-xk--scroll" id="scrollImage">
  <img src="..." alt="..." />
  <figcaption>Revealed on scroll</figcaption>
</figure>
```

Toggle `.is-revealed` via JS (click or `IntersectionObserver`, depending on
variant) — see `demo.html` for the exact handlers.

## CSS Variables

| Variable      | Default | Description                              |
|-----------------|---------|---------------------------------------------|
| `--efb-blur`  | `14px`  | Blur radius applied in the hidden state        |
| `--efb-speed` | `0.45s` | Duration of the blur-to-clear transition        |

Example override:

```html
<figure class="ease-filter-blur-xk" style="--efb-blur: 24px; --efb-speed: 0.8s;">
  ...
</figure>
```

## Interactive Triggers (Acceptance Criteria)

Three patterns are demonstrated in `demo.html`:

1. **Hover** (default, image variant) — `filter: blur(var(--efb-blur))`
   transitions to `blur(0)` on `:hover` / `:focus-within`, paired with a
   subtle `scale(1.05) → scale(1)` zoom-out for added depth.
2. **Click** (text variant) — an inline spoiler phrase toggles an
   `is-revealed` class on click or `Enter`/`Space` when focused, clearing
   the blur; clicking again re-blurs it.
3. **Scroll** (image variant) — a `--scroll` modifier keeps the image
   blurred until it enters the viewport, then adds `is-revealed` via
   `IntersectionObserver` (threshold 0.4).

## Accessibility

- The text spoiler variant uses `role="button"`, `tabindex="0"`, and
  `aria-pressed` so its toggle state is announced correctly, plus a
  descriptive `aria-label` since the visible text itself is intentionally
  obscured.
- `user-select` is disabled while the spoiler is blurred (to prevent
  copying hidden text) and re-enabled once revealed.
- Image variant uses `:focus-within` so keyboard users tabbing to a link
  or control inside the figure also trigger the reveal.
- Respects `prefers-reduced-motion: reduce` by collapsing the blur
  transition duration to near-zero, so content still becomes readable
  without the animated effect.

## Files

- `demo.html` — hover image reveal (2 examples), click-to-reveal spoiler
  text, scroll-triggered image reveal, and a CSS-variable customization
  example.
- `style.css` — component styles for all three variants (image/hover,
  text/click, image/scroll), plus reduced-motion and responsive handling.
- `README.md` — this file.