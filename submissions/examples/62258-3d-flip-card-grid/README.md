# 3D-Flip Card Grid

## Overview

This showcase implements issue #62258.

It demonstrates a product grid with a two-sided 3D card.

The front presents the product identity.

The back presents supporting product information.

The transition is pure CSS.

No JavaScript is required.

## Structure

`demo.html` contains three accessible product cards.

Each card contains an outer perspective context.

Each card contains an inner transform surface.

The front and back share the same footprint.

The back is rotated 180 degrees in its resting CSS state.

`style.css` defines perspective and transform behavior.

## Motion model

The parent establishes perspective.

The inner wrapper uses `transform-style: preserve-3d`.

The front uses `backface-visibility: hidden`.

The back is rotated around the Y axis.

Hovering rotates the inner wrapper.

Focus-within activates the same state.

The transition uses a smooth cubic-bezier curve.

The result reads as a physical card turn.

## Accessibility

Product actions are normal links.

The cards remain keyboard reachable.

Focus-visible outlines are provided.

Focus-within activates the same flip state.

A reduced-motion query is included.

Reduced-motion mode avoids the rotation.

The alternate content remains reachable through focus.

The motion is never required to understand the product.

## Responsive layout

Large screens use three columns.

Medium screens use two columns.

Phones use one column.

The hero changes to one column.

The guide cards also collapse.

The navigation becomes compact.

The footer stacks on mobile.

The card height adapts at the mobile breakpoint.

## CSS tokens

`--bg` defines the page foundation.

`--panel` defines the glass surface.

`--line` defines the card border.

`--text` defines primary type.

`--muted` defines secondary type.

`--accent` defines the motion accent.

`--radius` defines shared rounding.

## Customization

Change the perspective value for stronger depth.

Change the rotation axis for a different effect.

Change the duration for a faster flip.

Change the easing curve for a softer turn.

Change the accent for another visual identity.

Additional cards can use the same markup.

The product artwork is independent from the motion.

## Performance

The component contains no JavaScript.

There are no timers.

There are no pointer event handlers.

The transform is state-driven.

The browser handles the interpolation.

The page remains idle when no card is active.

## Usage

Open `demo.html` directly.

Keep `style.css` in the same directory.

No package manager is required.

No build step is required.

Copy the `flip-card` structure when reusing the component.

Keep both faces inside the transform wrapper.

## Design intent

The flip is used to reveal secondary information.

The front is concise.

The back is explanatory.

The spatial relationship stays visible during the turn.

This makes the interaction suitable for product catalogs.

It can also work for team profiles.

It can also work for portfolio pieces.

It can also work for feature comparisons.

## Browser considerations

3D transforms are progressively enhanced.

The cards still contain semantic content without motion.

Backdrop blur is visual enhancement only.

The layout uses standard CSS Grid.

No browser-specific script is required.

## Issue checklist

- [x] Pure HTML.
- [x] Pure CSS.
- [x] Required demo file.
- [x] Required stylesheet.
- [x] Required documentation.
- [x] CSS transitions.
- [x] Keyframe animation.
- [x] Perspective.
- [x] 3D transform.
- [x] Responsive desktop layout.
- [x] Responsive tablet layout.
- [x] Responsive mobile layout.
- [x] Focus support.
- [x] Reduced-motion support.
- [x] Issue number in folder name.

## Implementation notes

The outer card establishes a perspective distance.

The inner wrapper contains both visual faces.

The front face is the initial reading surface.

The back face is rotated before interaction.

Both faces are hidden from the reverse side.

This prevents mirrored text during the turn.

The transform origin remains centered.

The easing curve gives the rotation a natural finish.

The card remains a normal document element.

The motion does not change document layout.

The front artwork is decorative.

The back copy carries detailed information.

The action remains a standard link.

The focus state activates the same transform.

Reduced motion removes the physical rotation.

The alternate content remains available.

This pattern is suitable for product discovery.

It can be adapted to pricing comparisons.

It can be adapted to team profiles.

It can be adapted to portfolio cards.

## Testing guidance

Open the page at desktop width.

Hover each card and observe the rotation.

Confirm the front and back share the same footprint.

Use Tab to reach the product action.

Confirm focus activates the same state.

Resize to tablet width.

Confirm the grid becomes two columns.

Resize to phone width.

Confirm the grid becomes one column.

Enable reduced motion.

Confirm the strong rotation is removed.

Confirm both content states remain understandable.

## Reuse guidance

Keep the `.flip-card` perspective container.

Keep the `.flip-inner` transform surface.

Keep the two `.face` elements together.

Replace artwork with project-specific visuals.

Replace copy with useful secondary information.

Retheme the custom properties.

Tune perspective carefully.

Tune duration for the surrounding interface.

Preserve focus-visible styles.

Preserve reduced-motion behavior.
