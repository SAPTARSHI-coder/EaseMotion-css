# Zoom-In Modal for Product Catalogs

## Overview

This showcase implements issue #62226.

The interaction uses a scale-based modal entrance.

The component is written with pure HTML and CSS.

No JavaScript is needed.

No external UI library is required.

The active product becomes visually closer to the user.

The effect uses scale, translation, opacity, and blur.

## Files

`demo.html` contains the complete product catalog.

`style.css` contains the visual system and motion.

`README.md` documents reuse and accessibility.

## Interaction

The modal begins slightly smaller than its final size.

Its opacity starts at zero.

Its visibility is hidden.

A small blur separates the resting state.

The modal is anchored to the bottom of its product card.

Hovering the card activates the modal.

Focusing an interactive child activates it too.

The modal scales to one.

The modal returns to full opacity.

The blur is removed.

The translation is removed.

The result feels like the interface is moving closer.

## Accessibility

The layout uses semantic HTML.

The primary navigation is labelled.

Interactive controls are normal links.

Focus-visible outlines are explicit.

The modal uses `:focus-within`.

Keyboard users therefore receive the same state.

The component does not depend on pointer events alone.

A reduced-motion query is included.

Reduced-motion users see no pronounced scale transition.

The content remains available in the final layout.

## Responsive layout

The catalog uses three columns on large screens.

The grid becomes two columns on tablets.

The grid becomes one column on phones.

The hero becomes a single column below the desktop breakpoint.

Navigation becomes compact on small screens.

The explanatory cards also collapse.

Footer metadata stacks on narrow screens.

## Design tokens

`--bg` controls the page background.

`--panel` controls the glass card surface.

`--modal` controls the modal surface.

`--line` controls borders.

`--text` controls primary text.

`--muted` controls secondary text.

`--accent` stores the highlight color.

`--accent-soft` controls the accent pill.

`--radius` controls shared geometry.

## Customization

Adjust the initial scale to make the entrance stronger.

Adjust the translation for a larger vertical arrival.

Adjust blur for a softer transition.

Adjust transition timing for a faster response.

Change the accent token to match a product brand.

Change the panel opacity to tune the glass effect.

Additional cards can reuse the same structure.

The product copy is independent from the animation.

## Performance

The implementation contains no JavaScript.

There are no timers.

There are no event listeners.

The modal transition runs only on interaction.

The hero support animation is a single keyframe sequence.

The rest of the page remains idle.

This keeps the interaction easy to reason about.

## Browser behavior

The layout uses CSS Grid and Flexbox.

Backdrop blur is progressive enhancement.

The cards remain usable when blur is unavailable.

The animation uses broadly supported CSS properties.

No build process is needed.

## Usage

Open `demo.html` in a browser.

Keep `style.css` beside the HTML file.

Copy the card structure into another page when needed.

Keep the focusable link inside the card.

The `focus-within` selector will preserve keyboard access.

## EaseMotion principles

Motion should communicate hierarchy.

Scale creates proximity.

Blur creates depth.

Opacity creates arrival.

Translation gives the motion direction.

The combination is intentionally restrained.

It can work in catalogs, dashboards, portfolios, and service listings.

## Issue checklist

- [x] Pure HTML.
- [x] Pure CSS.
- [x] Required demo file.
- [x] Required stylesheet.
- [x] Required documentation.
- [x] CSS transitions.
- [x] Keyframe animation.
- [x] Responsive desktop layout.
- [x] Responsive tablet layout.
- [x] Responsive mobile layout.
- [x] Focus-visible support.
- [x] Reduced-motion support.
- [x] Issue number in folder name.
- [x] Feature-specific folder.

## Implementation notes

The modal uses a transform-based scale rather than changing width or height.

This prevents the card layout from reflowing during interaction.

The transform origin is placed near the lower center of the card.

The result feels connected to the product surface.

The blur is removed at the same time as the scale settles.

The opacity transition softens the initial appearance.

Visibility changes prevent an inactive layer from remaining interactive.

The focus-within selector gives keyboard users an equivalent state.

The supporting hero animation demonstrates the same visual language.

The product content stays readable without motion.

The feature is self-contained and easy to extract.

## Testing guidance

Open the demo at desktop width.

Hover each product card.

Confirm the modal grows into focus.

Use Tab to reach the product action.

Confirm focus opens the same modal state.

Resize to tablet width.

Confirm the grid becomes two columns.

Resize to phone width.

Confirm the grid becomes one column.

Enable reduced motion.

Confirm the scale transition is removed.

Confirm the product details remain available.
