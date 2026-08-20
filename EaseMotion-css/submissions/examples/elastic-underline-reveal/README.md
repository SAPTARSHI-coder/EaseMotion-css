# Elastic Underline Reveal

A reusable, CSS-only hover underline that expands from the center with a
subtle elastic overshoot before settling into place. No JavaScript required.

## Why

- Pure CSS — zero dependencies, zero JS
- Modern micro-interaction for nav links, buttons, and inline links
- Lightweight and fully customizable via CSS custom properties
- Fits EaseMotion CSS's animation-first philosophy

## Usage

```html
<a href="#" class="elastic-underline-tay">Documentation</a>
```

Include `style.css` and apply the class to any `<a>` (or other inline
element) — it works immediately, no extra markup needed.

## Customization

The component exposes CSS custom properties on `.elastic-underline-tay`:

| Variable        | Default                          | Purpose                          |
|------------------|-----------------------------------|-----------------------------------|
| `--eu-color`     | `currentColor`                    | Underline color                   |
| `--eu-height`    | `2px`                             | Underline thickness                |
| `--eu-offset`    | `-4px`                            | Vertical gap below the text        |
| `--eu-duration`  | `0.45s`                           | Reveal animation duration          |
| `--eu-easing`    | `cubic-bezier(.34,1.56,.64,1)`    | Elastic overshoot curve            |

```css
.elastic-underline-tay {
  --eu-color: #6c5ce7;
  --eu-duration: 0.3s;
}
```

## Modifier classes

- `.elastic-underline-tay--accent` — purple accent color
- `.elastic-underline-tay--thick` — bolder underline, larger offset
- `.elastic-underline-tay--fast` — quicker reveal
- `.elastic-underline-tay--dark` — for dark-background nav/hero sections

All modifiers just override the custom properties above — combine or extend
freely.

## Accessibility

- Underline also reveals on `:focus-visible`, not just `:hover`, so keyboard
  users get the same affordance.
- Respects `prefers-reduced-motion`: the width transition is removed for
  users who have reduced motion enabled.

## Files

- `demo.html` — live demo with nav usage + variant showcase + inline example
- `style.css` — component styles (`-tay` suffixed classes) + demo scaffolding
- `README.md` — this file

## Checklist

- [x] Does not duplicate an existing EaseMotion CSS class
- [x] Naming may be standardized by the maintainer
- [x] Submitted inside `submissions/` only