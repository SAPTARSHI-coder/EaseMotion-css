# 3D Accordion

Documentation and a standalone demonstration for the 3D Accordion component requested in issue #78659.

## Overview

The 3D Accordion combines expandable content with a restrained perspective effect. It helps organize related information while adding visual depth to the interaction.

## Demo

Open `demo.html` and activate the accordion buttons to reveal their content. The example includes multiple sections and a clear active state.

## Usage

Use a button for each accordion trigger and keep the associated panel immediately available in the document structure. The example script updates `aria-expanded` and the panel visibility.

## Accessibility

Accordion triggers are native buttons with `aria-expanded` and `aria-controls`. Content remains keyboard accessible, and motion is reduced when requested by the user.

## Customization

Adjust perspective, panel spacing, border radius, and transition timing in `style.css`.

## Files

- `demo.html` — complete accordion example.
- `style.css` — 3D panel and responsive styles.
- `README.md` — implementation and accessibility notes.