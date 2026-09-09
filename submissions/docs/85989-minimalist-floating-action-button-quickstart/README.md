# Minimalist Floating Action Button — Quickstart

## Overview

This quickstart documents a compact floating action button for frequently used actions.

The pattern is designed to stay visually separate from primary page content.

It uses a native button for reliable keyboard and assistive technology behavior.

The presentation is intentionally lightweight.

No JavaScript is required for the visual component.

## Structure

Use a native `button` element for an action.

Give the control an accessible name.

Place it in a fixed-position wrapper when it should float over the page.

Keep enough space around the control for touch interaction.

Avoid covering important content with the button.

## Basic Setup

Copy the button markup from `demo.html`.

Load `style.css` after the base page styles.

Replace the sample icon with a project-approved icon.

Keep the accessible label descriptive of the action.

Use `type="button"` when the control appears inside a form.

## Accessibility

A floating button needs an accessible name.

If the icon has no text, use an accessible label.

Do not rely on tooltip text as the only name.

Maintain a visible focus indicator.

Keep the button usable at increased browser zoom.

## Keyboard Navigation

The button must be reachable using Tab.

Enter or Space activates a native button.

Focus should remain visible against the page background.

Do not implement custom keyboard events for a standard button.

## Touch Targets

Keep the interactive area large enough for touch input.

Avoid placing multiple floating controls too close together.

Leave sufficient spacing from viewport edges.

Consider device safe areas on mobile layouts.

## Modifier Classes

Use the base floating button class for common styles.

Use `fab--compact` for smaller non-primary actions.

Use `fab--contrast` when the page background reduces visibility.

Keep modifiers focused on presentation.

## Custom Properties

`--fab-size` controls the button dimensions.

`--fab-accent` controls the primary color.

`--fab-shadow` controls elevation.

`--fab-offset` controls distance from the viewport edge.

Custom properties make theme changes straightforward.

## Responsive Behavior

The button should remain inside the viewport.

Reduce offsets on small screens when appropriate.

Avoid fixed dimensions that become difficult to use on touch devices.

Test both portrait and landscape orientations.

## Reduced Motion

The component does not require animation.

Optional hover transitions should respect reduced-motion preferences.

Do not use continuous pulsing to indicate availability.

## Usage

Choose one clear primary action for the floating control.

Keep its purpose consistent across the page.

Do not place critical navigation exclusively inside a floating button.

Use a tooltip only as supporting information.

## Testing

Test the button using Tab, Enter, and Space.

Check the accessible name with browser accessibility tools.

Test at high zoom.

Test narrow mobile widths.

Check the control does not cover important content.

## Integration

Place the button near the end of the document when practical.

Use `position: fixed` only when viewport anchoring is required.

Use a positioned container instead when the action belongs to a specific card.

## Files

`README.md` contains this quickstart guide.

`demo.html` contains the standalone demonstration.

`style.css` contains the responsive component styles.

The implementation has no runtime dependency.

## Summary

A minimalist floating action button should be obvious without dominating the page.

Native button semantics provide the correct interaction model.

Clear labels, visible focus, and responsive spacing make the pattern reusable.
