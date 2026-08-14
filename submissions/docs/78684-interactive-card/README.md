# Interactive Card

Documentation and a standalone demonstration for the Interactive Card component requested in issue #78684.

## Overview

The Interactive Card provides a focused surface for content with a subtle hover and focus response. It is suitable for product summaries, feature links, profiles, and dashboard items.

## Demo

Open `demo.html` to preview several cards with headings, supporting text, and an action link.

## Usage

Use an article or link as the card container depending on whether the entire card is interactive. Keep the primary action identifiable and avoid using hover as the only way to expose information.

## Accessibility

Keyboard focus receives the same visual treatment as pointer interaction. Text remains readable without animation, and reduced-motion preferences remove movement.

## Customization

Adjust card spacing, elevation, border radius, hover movement, and responsive columns in `style.css`.

## Files

- `demo.html` — complete card examples.
- `style.css` — interactive and responsive styles.
- `README.md` — usage and accessibility guide.