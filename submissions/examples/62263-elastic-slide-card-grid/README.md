# Elastic-Slide Card Grid

## Overview

This showcase implements issue #62263.

It demonstrates product details entering from the side with an elastic settling curve.

The interaction is pure CSS.

No JavaScript is required.

The detail layer is positioned inside the product card.

## Files

`demo.html` contains the product catalog.

`style.css` contains the layout and motion.

`README.md` explains the pattern.

## Motion model

The detail layer begins outside the card.

Its initial horizontal position is negative.

Its opacity is zero.

Its visibility is hidden.

The active state moves it into the card.

A cubic-bezier curve creates an overshoot.

The overshoot is intentionally small.

The final position settles at zero.

The effect creates a tactile entrance.

The hero panel uses a related spring keyframe.

## Accessibility

Product actions are standard links.

The card uses focus-within for keyboard access.

Focus-visible outlines are retained.

Reduced-motion preferences disable the strong slide.

The detail state remains available.

The product copy does not depend on animation.

## Responsive behavior

Desktop uses three columns.

Tablet uses two columns.

Mobile uses one column.

The hero becomes a single column.

The feature cards collapse.

Navigation becomes compact.

Footer information stacks.

The detail panel stays inside its card.

## CSS tokens

`--bg` controls the page background.

`--panel` controls the card surface.

`--modal` controls the detail surface.

`--line` controls borders.

`--text` controls primary type.

`--muted` controls secondary type.

`--accent` controls the highlight.

`--radius` controls shared corners.

## Customization

Adjust the starting translate value for a larger travel distance.

Adjust the cubic-bezier curve for more or less bounce.

Adjust the duration for faster movement.

Adjust the panel opacity for a different glass effect.

Change the accent token to match a brand.

Add more cards using the same markup.

The content and motion remain independent.

## Performance

There is no runtime JavaScript.

There are no timers.

There are no event listeners.

The detail transition only runs when a state changes.

The hero animation runs once.

The page remains idle afterward.

## Usage

Open `demo.html` directly.

Keep `style.css` beside it.

No build step is required.

No dependencies are required.

Copy the card structure to reuse the component.

Keep the focusable link within the card.

## Design intent

The direction of travel gives the detail layer energy.

The elastic easing keeps the motion friendly.

The surface remains readable throughout the interaction.

The effect works well for product catalogs.

It can also work for service cards.

It can also work for portfolio entries.

It can also work for dashboard summaries.

## Browser notes

The layout uses standard CSS Grid.

The glass effect is progressive enhancement.

The motion uses standard transforms.

No browser-specific script is required.

## Issue checklist

- [x] Pure HTML.
- [x] Pure CSS.
- [x] Required demo file.
- [x] Required stylesheet.
- [x] Required README.
- [x] CSS transition.
- [x] Keyframe animation.
- [x] Elastic easing.
- [x] Desktop responsiveness.
- [x] Tablet responsiveness.
- [x] Mobile responsiveness.
- [x] Focus support.
- [x] Reduced-motion support.
- [x] Issue number in folder name.

## Implementation notes

The card is the local containing block for the detail surface.

The detail surface starts outside the left edge.

Visibility and opacity prevent an inactive layer from being distracting.

The transform performs the actual movement.

The transition uses a custom cubic-bezier curve.

The curve intentionally overshoots the final position.

The overshoot is small enough to remain professional.

The active state settles at zero translation.

The hover and focus states share the same rule.

This makes pointer and keyboard behavior consistent.

The hero panel demonstrates a related spring idea.

The card content itself remains stable.

Only the supporting detail layer moves.

This keeps the interaction easy to scan.

The background remains static.

The glass surface adds depth without requiring images.

The product artwork can be replaced independently.

The motion is suitable for catalogs and service grids.

## Testing guidance

Open the demo at desktop width.

Hover each product card.

Confirm the detail layer enters from the side.

Watch for the small elastic settling motion.

Use Tab to reach a card action.

Confirm focus activates the detail state.

Resize to tablet width.

Confirm the two-column layout.

Resize to phone width.

Confirm the single-column layout.

Enable reduced motion.

Confirm the slide is removed.

Confirm the detail content remains usable.

## Reuse guidance

Keep the `.card` container.

Keep the `.detail` layer inside it.

Replace product content as needed.

Replace artwork independently.

Tune the starting translate value.

Tune the cubic-bezier curve carefully.

Tune duration for the surrounding interface.

Preserve focus-visible outlines.

Preserve reduced-motion behavior.

Avoid replacing the transform with layout animation.
