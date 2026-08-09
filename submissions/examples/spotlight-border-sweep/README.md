# Spotlight Border Sweep

A reusable, CSS-only highlight that travels along an element's border on
hover — only the border is animated, not the background or a glow layer.
No JavaScript required.

## Why

- Pure CSS — zero dependencies, zero JS
- Unique micro-interaction distinct from generic glow/shadow effects
- Lightweight and fully customizable via CSS custom properties
- Fits EaseMotion CSS's animation-first, composable design philosophy

## Usage

```html
<div class="spotlight-border-tay">
  <h3>Premium Card</h3>
  <p>Hover to see the animated border spotlight.</p>
</div>
```

Include `style.css`, wrap any content in `.spotlight-border-tay` — it works
on divs, cards, or buttons (see `--button` variant below). The spotlight
sweeps on hover, and on keyboard focus within the element.

### How it stays on the border only

A pseudo-element is painted with a `conic-gradient`, then clipped to just
the border ring using a `mask` composite (`content-box` XOR full box) — so
the moving light only ever touches the border stroke, never the fill.

## Customization

The component exposes CSS custom properties on `.spotlight-border-tay`:

| Variable            | Default              | Purpose                         |
|----------------------|-----------------------|------------------------------------|
| `--sb-border-color`  | `#d1d5db`             | Static border color                |
| `--sb-border-width`  | `2px`                 | Border (and spotlight ring) width  |
| `--sb-glow`          | `rgba(37,99,235,.9)`  | Spotlight streak color             |
| `--sb-duration`      | `1.1s`                | Full sweep duration (one rotation) |

```css
.spotlight-border-tay {
  --sb-glow: rgba(108, 92, 231, 0.9);
  --sb-duration: 0.7s;
}
```

## Modifier classes

- `.spotlight-border-tay--accent` — purple spotlight streak
- `.spotlight-border-tay--thick` — thicker border and streak
- `.spotlight-border-tay--fast` — quicker sweep
- `.spotlight-border-tay--dark` — for dark-background cards
- `.spotlight-border-tay--button` — pill-shaped button styling variant

All modifiers just override the custom properties above — combine or extend
freely.

## Accessibility

- The spotlight also activates on `:focus-within`, so keyboard users tabbing
  into the element see the same affordance as mouse hover.
- Respects `prefers-reduced-motion`: the sweep animation is disabled and the
  spotlight is shown in a static, fully-visible state instead of looping.

## Files

- `demo.html` — live demo with basic usage (card + button) + variant showcase
- `style.css` — component styles (`-tay` suffixed classes) + demo scaffolding
- `README.md` — this file

## Checklist

- [x] Does not duplicate an existing EaseMotion CSS class
- [x] Naming may be standardized by the maintainer
- [x] Submitted inside `submissions/` only