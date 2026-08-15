# Ease Bounce Hover

## What does this do?
Triggers a **multi-bounce with decaying amplitude** on hover/focus — like a
ball settling after a drop — instead of a single up-down bounce transition.
Includes an optional horizontal shake-bounce variant.

## How is it different from a typical bounce-hover utility?
- Uses a multi-step `@keyframes` animation with decreasing bounce heights,
  not a single-peak transform transition.
- Adds a `--horizontal` modifier for elements better suited to sideways
  motion (e.g., list items, nav links).
- Triggers on `:focus-visible` as well as `:hover` for keyboard accessibility.
- Respects `prefers-reduced-motion`.

## How is it used?
\`\`\`html
<button class="ease-bounce-hover">Hover Me</button>

<div class="ease-bounce-hover ease-bounce-hover--card">
  Card content
</div>

<img class="ease-bounce-hover ease-bounce-hover--horizontal" src="..." />
\`\`\`

## Why is this useful?
Gives contributors a more natural, physics-like bounce feel for buttons,
cards, icons, and product images — fitting EaseMotion CSS's animation-first,
customizable philosophy while standing apart from a flat single-bounce
effect.