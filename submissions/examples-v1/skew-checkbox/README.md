# Skew Checkbox (`ease-checkbox--skew`)

A "Space" themed checkbox — the box sits tilted at rest, like an angled console panel, then snaps upright with a glow and a comet-trail checkmark when activated. Built with **pure CSS**, no JavaScript.

## Files

- `demo.html` — standalone live demo
- `style.css` — the component

## How it works

- **No JS**: uses a real `<input type="checkbox">` (visually hidden but focusable/keyboard-operable) plus the `~` sibling combinator to style `.ease-checkbox__box` based on `:checked`, `:focus-visible`, and `:disabled`.
- **Skew-to-upright motion**: the box starts at `transform: skew(var(--ease-checkbox-skew))` and un-skews with a spring-like `ease-checkbox-pop` keyframe (overshoot via `cubic-bezier(0.34, 1.56, 0.64, 1)`) when checked.
- **Comet-trail check**: the checkmark is two CSS-only strokes (`::after`) that scale in on check, plus a `.ease-checkbox__trail` element that streaks across via `ease-checkbox-comet`.
- **Starfield texture**: subtle `radial-gradient` speckles on `::before` give the "space" feel without any images.
- **Accessibility**:
  - Native checkbox retained for screen readers and form semantics — nothing is faked with `<div>`s.
  - `:focus-visible` outline for keyboard users.
  - `:disabled` state dims the control and disables interaction.
  - Respects `prefers-reduced-motion`: disables the pop/comet animations, box still switches states instantly.

## Customization

\`\`\`css
.ease-checkbox--skew {
  --ease-checkbox-skew: -14deg;
  --ease-checkbox-glow: #7f5af0;
  --ease-checkbox-bg: #0d0f1a;
  --ease-animation-duration: 420ms;
}
\`\`\`

## Naming

Uses the `ease-` prefix (`ease-checkbox--skew`, `ease-checkbox__box`, `ease-checkbox__trail`, `ease-checkbox-pop` / `ease-checkbox-comet` keyframes) to match EaseMotion CSS conventions per the issue requirements.