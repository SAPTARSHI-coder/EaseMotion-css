# Interactive Carousel

Documentation and a standalone demonstration for the Interactive Carousel component requested in issue #78654.

## Overview

The Interactive Carousel presents a small set of cards in a horizontal track with clear previous and next controls. The example uses native buttons and a short script to move the track.

## Demo

Open `demo.html` to try the carousel. Each card contains a heading and supporting text, while the controls expose useful labels for keyboard and assistive-technology users.

## Usage

Keep the carousel viewport separate from its controls. Add or remove cards without changing the control structure, then connect the controls to the track movement logic.

## Accessibility

Controls are real buttons with accessible names. The track remains readable without hover, and reduced-motion preferences disable animated movement.

## Customization

Adjust card width, gap, viewport radius, and transition duration in `style.css`. The responsive rules change the visible card count on smaller screens.

## Files

- `demo.html` — complete carousel example.
- `style.css` — carousel layout and responsive styles.
- `README.md` — usage and accessibility notes.