# Pastel Breadcrumb Navigation — Theming

## Overview

This guide documents a pastel breadcrumb navigation pattern with theme-friendly CSS.

Breadcrumbs help users understand their current location within a hierarchy.

The visual treatment uses soft surfaces, readable labels, and configurable accents.

The implementation uses semantic navigation markup and plain CSS.

No JavaScript is required for the basic presentation.

## Structure

Wrap the breadcrumb trail in a `nav` element.

Give the navigation an accessible label.

Use an ordered list for the hierarchy.

Represent the current page with `aria-current="page"`.

Use links for previous locations.

Do not use decorative separators as the only relationship cue.

## Theming

The component exposes colors through CSS custom properties.

Override the accent variable to match a product brand.

Override the surface variable for light or dark themes.

Adjust text and muted text variables independently.

Keep contrast requirements in mind when changing pastel colors.

## Custom Properties

`--breadcrumb-accent` controls links and active emphasis.

`--breadcrumb-surface` controls the component background.

`--breadcrumb-text` controls primary text.

`--breadcrumb-muted` controls secondary labels and separators.

`--breadcrumb-border` controls the component boundary.

## Modifier Classes

Use the base breadcrumb class for common layout.

Use `breadcrumb--compact` when vertical space is limited.

Use `breadcrumb--contrast` when a stronger visual treatment is required.

Keep modifiers optional and predictable.

Avoid changing semantic meaning through presentation classes.

## HTML Example

The demo contains a complete semantic breadcrumb trail.

Each previous location is represented by an anchor.

The current location is not presented as a clickable destination.

The navigation label describes the purpose of the landmark.

## Accessibility

The breadcrumb navigation must have an accessible name.

The current page should be announced through `aria-current`.

Do not rely on color to distinguish the current location.

Ensure links have a visible focus indicator.

Maintain readable text at browser zoom.

## Keyboard Navigation

Every breadcrumb link should be reachable with Tab.

Enter activates a focused link.

Focus should follow the document order.

Do not add custom keyboard handlers when native links already work.

Keep focus visible against pastel backgrounds.

## Responsive Behavior

Allow long breadcrumb labels to wrap naturally.

Prevent the page from requiring horizontal scrolling.

A compact variant can reduce gaps on small screens.

Do not hide essential hierarchy without providing an alternative.

## Reduced Motion

The base component does not require animation.

Optional hover transitions should respect reduced-motion preferences.

Navigation must remain fully usable when motion is disabled.

## Usage

Copy the semantic structure from `demo.html`.

Load `style.css` after the base page styles.

Change custom properties at the component or theme level.

Keep the hierarchy aligned with the actual page structure.

## Testing

Test all links with keyboard navigation.

Verify the current-page indicator.

Check contrast after changing pastel colors.

Test long labels at narrow widths.

Test browser zoom and reduced motion.

## Files

`README.md` explains the theming approach.

`demo.html` provides a standalone example.

`style.css` contains the component and theme variables.

The submission is intentionally dependency-free.

## Summary

Pastel styling should enhance hierarchy without reducing clarity.

CSS custom properties make the component easy to adapt to different themes.

Semantic navigation and native links provide the accessible foundation.
