# Float-Drift Card Grid

## Overview

This showcase implements issue #62267.

It adds gentle ambient movement to a product card grid.

The cards use CSS keyframes for vertical drift.

The effect is continuous but deliberately subtle.

Interaction pauses the card motion.

No JavaScript is required.

## Files

`demo.html` contains the complete catalog.

`style.css` defines the float animation and visual system.

`README.md` documents implementation and reuse.

## Motion model

Each card receives the same float keyframe.

Cards use different negative delays.

The phase difference prevents synchronized movement.

The vertical distance remains small.

The active card pauses its animation.

The detail panel then enters normally.

This creates an ambient background rhythm.

The motion does not compete with product content.

## Accessibility

Product actions are normal links.

The cards support focus-within.

Focus-visible outlines remain visible.

Reduced-motion disables the float keyframes.

Reduced-motion also removes hover translation.

The content remains fully visible.

The animation is decorative rather than essential.

## Responsive behavior

Desktop uses three columns.

Tablet uses two columns.

Mobile uses one column.

The hero becomes one column.

The feature cards collapse.

Navigation becomes compact.

Footer information stacks.

The detail panel remains inside its card.

## CSS custom properties

`--bg` defines the page background.

`--panel` defines glass surfaces.

`--modal` defines the detail surface.

`--line` defines borders.

`--text` defines primary text.

`--muted` defines secondary text.

`--accent` defines the highlight.

`--radius` defines shared rounding.

## Customization

Change the float distance for stronger movement.

Change the duration for faster drift.

Change negative delays to alter phase relationships.

Change the easing function for another rhythm.

Change the accent for another brand.

Add more cards with unique animation delays.

The product content remains independent.

## Performance

There is no JavaScript.

There are no timers.

There are no event listeners.

The motion uses a simple keyframe transform.

The active state pauses the animation.

The detail transition only runs on interaction.

The page remains lightweight.

## Usage

Open `demo.html` directly.

Keep the stylesheet beside it.

No build step is required.

No dependencies are required.

Copy the card markup to extend the collection.

Use the existing delay classes as a rhythm guide.

## Design intent

Float creates a sense of lightness.

The small movement suggests an ambient interface.

Different phases create visual variety.

Pausing on interaction improves readability.

The pattern works for catalogs.

It can work for portfolio grids.

It can work for service tiles.

It can work for dashboard summaries.

## Browser notes

The layout uses standard CSS Grid.

The animation uses standard keyframes.

Backdrop blur is progressive enhancement.

No browser-specific script is required.

## Issue checklist

- [x] Pure HTML.
- [x] Pure CSS.
- [x] Required demo file.
- [x] Required stylesheet.
- [x] Required README.
- [x] CSS keyframes.
- [x] Smooth transitions.
- [x] Desktop responsiveness.
- [x] Tablet responsiveness.
- [x] Mobile responsiveness.
- [x] Focus support.
- [x] Reduced-motion support.
- [x] Issue number in folder name.
