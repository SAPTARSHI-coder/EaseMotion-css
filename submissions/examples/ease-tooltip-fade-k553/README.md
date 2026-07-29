# Ease Tooltip Fade

## What does this do?
A **direction-aware** tooltip that fades and slides in from whichever side
it's positioned on — top, bottom, left, or right — complete with a small
caret arrow pointing at the trigger element.

## How is it different from a typical tooltip-fade utility?
- Provides four directional modifiers (`--top`, `--bottom`, `--left`,
  `--right`) instead of one fixed slide direction.
- Includes a CSS-only caret/arrow via `::after`, matching the tooltip's
  direction automatically.
- Triggers on `:focus-visible` as well as `:hover` for keyboard accessibility.
- No JavaScript or positioning library required — pure CSS.

## How is it used?
\`\`\`html
<div class="ease-tooltip-fade ease-tooltip-fade--top">
  Hover me
  <span class="tooltip">Tooltip text</span>
</div>

<button class="ease-tooltip-fade ease-tooltip-fade--right">
  Icon
  <span class="tooltip">Save changes</span>
</button>
\`\`\`

## Why is this useful?
Tooltips are common across buttons, icons, form fields, and nav items, and
often need to point in different directions depending on layout. This gives
developers that flexibility in pure CSS while fitting EaseMotion CSS's
animation-first, JS-free philosophy.