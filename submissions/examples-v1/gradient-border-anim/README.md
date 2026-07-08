# Gradient Border Animation

## What

A set of cards with animated gradient borders built from conic-gradient and border-image. Each card has a rotating gradient border, a subtly animated border-radius, and a distinct border style (solid double-border, thick gradient, dashed overlay). Hovering any card pauses its border rotation.

## How

Each card uses `border-image: conic-gradient(...) 1` to paint the border with a rotating conic gradient. A `@keyframes rotate` animation on the `--angle` custom property (via `@property`) spins the gradient continuously. A second animation oscillates `border-radius` between 8px and 24px. Hover sets `animation-play-state: paused` on the border rotation. The double-border card layers a `::after` pseudo-element with a second contrasting conic-gradient. `prefers-reduced-motion` disables all border and radius animations.

## Why

Borders are often static, but animated borders can draw attention to key UI elements—cards, call-to-action buttons, highlighted panels. This example explores `border-image` with conic gradients (which differ from the more common linear approach), demonstrates `@property` for animating custom properties, and shows how multiple border layers can be composed with pseudo-elements.
