# Floating Action Chip Reveal

A reusable, CSS-only action chip that rises and fades into view when its
parent card is hovered or focused. No JavaScript required.

## Why

- Pure CSS — zero dependencies, zero JS
- Modern micro-interaction for dashboards, cards, and SaaS UIs
- Lightweight and fully customizable via CSS custom properties
- Fits EaseMotion CSS's animation-first, composable design philosophy

## Usage

```html
<div class="action-card-tay">
  <h3>Project Alpha</h3>
  <p>Hover to reveal the action chip.</p>
  <span class="floating-chip-tay">View Details</span>
</div>
```

Include `style.css`, wrap card content in `.action-card-tay`, and place
`.floating-chip-tay` (a `<span>`, `<a>`, or `<button>`) as its last child —
it rises and fades in on hover or keyboard focus-within.

## Customization

The component exposes CSS custom properties on `.floating-chip-tay`:

| Variable        | Default   | Purpose                    |
|------------------|-----------|------------------------------|
| `--fc-color`     | `#fff`    | Chip text color              |
| `--fc-bg`        | `#2563eb` | Chip background color        |
| `--fc-border`    | `transparent` | Chip border color        |
| `--fc-duration`  | `0.35s`   | Reveal animation duration    |

```css
.floating-chip-tay {
  --fc-bg: #6c5ce7;
  --fc-duration: 0.2s;
}
```

## Modifier classes

- `.floating-chip-tay--accent` — purple chip background
- `.floating-chip-tay--outline` — transparent, border-only chip
- `.floating-chip-tay--fast` — quicker reveal

All modifiers just override the custom properties above — combine or extend
freely.

## Accessibility

- Reveals on `:focus-within` as well as `:hover`, so keyboard users tabbing
  to the chip (e.g. when it's an `<a>` or `<button>`) can see and reach it.
- Respects `prefers-reduced-motion`: the vertical slide is removed and only
  the opacity fade remains for users who have reduced motion enabled.

## Files

- `demo.html` — live demo with basic usage + variant showcase
- `style.css` — component styles (`-tay` suffixed classes) + demo scaffolding
- `README.md` — this file

## Checklist

- [x] Does not duplicate an existing EaseMotion CSS class
- [x] Naming may be standardized by the maintainer
- [x] Submitted inside `submissions/` only