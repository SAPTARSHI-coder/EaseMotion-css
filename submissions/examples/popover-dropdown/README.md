## What

A navigation bar with dropdown menus built using the CSS Popover API (`popover` attribute, `popovertarget`, and `popovertargetaction`). Three dropdowns (Products, Resources, Account) demonstrate custom positioning, arrow indicators via `::before`, and default light-dismiss behavior — all without JavaScript.

## How

- Trigger buttons use `popovertarget="id"` and `popovertargetaction="toggle"` to control the popover.
- Each `.dropdown` is a `<div popover>` that the browser automatically top-layer renders.
- Arrow indicators are created with `::before` pseudoelements using `clip-path` to form a triangle.
- `.dropdown--right` shifts the popover anchor via `right: 0;` for edge-aligned menus.
- Top-layer rendering ensures dropdowns appear above all other content without `z-index` battles.
- `prefers-reduced-motion` disables the popover entrance animation.

## Why

The Popover API replaces countless JavaScript dropdown implementations with a declarative, accessible, and performant browser-native solution. It provides automatic light-dismiss, top-layer rendering (no `z-index` stacking issues), and proper focus management. This example shows a real-world navigation pattern that works with zero JavaScript for the core interaction.
