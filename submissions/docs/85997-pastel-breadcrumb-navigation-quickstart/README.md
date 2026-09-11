# Pastel Breadcrumb Navigation — Quickstart

## Overview

This quickstart shows how to add a pastel breadcrumb navigation component.

The component uses semantic navigation and an ordered list.

It works with plain HTML and CSS.

No framework or JavaScript dependency is required.

The visual theme can be customized through CSS variables.

## Files

`README.md` explains setup and usage.

`demo.html` is a complete standalone example.

`style.css` contains layout, theme, and responsive rules.

Keep the three files together when reviewing the component.

## Basic Markup

Start with a `nav` element and an accessible label.

Place breadcrumb entries inside an ordered list.

Use links for pages users can revisit.

Mark the current page with `aria-current="page"`.

Keep separator content decorative.

## Setup

Copy the breadcrumb markup from the demo.

Link the stylesheet from the page head.

Replace the sample destinations with application routes.

Update labels to match the actual page hierarchy.

Keep the current location as the final item.

## Theme Variables

`--breadcrumb-accent` controls the main accent.

`--breadcrumb-surface` controls the background.

`--breadcrumb-text` controls primary text.

`--breadcrumb-muted` controls secondary text.

`--breadcrumb-border` controls the border color.

Override these values in a parent theme when needed.

## Modifiers

Use the base class for the standard breadcrumb.

Use `breadcrumb--compact` for tighter layouts.

Use `breadcrumb--contrast` when stronger emphasis is needed.

Keep modifier names consistent with the component convention.

## Accessibility

The navigation landmark needs an accessible label.

Previous locations should remain keyboard reachable.

The current location should be identifiable without color alone.

Focus indicators must remain visible.

Use native links instead of simulated clickable elements.

## Keyboard Support

Press Tab to move between breadcrumb links.

Press Enter to activate the focused link.

The current page is not required to be interactive.

Do not add custom keyboard JavaScript for native links.

## Responsive Behavior

The breadcrumb list wraps when space is limited.

Long labels remain readable rather than being clipped.

The component avoids fixed widths.

It can be placed inside cards, headers, or content areas.

## Reduced Motion

The basic component does not depend on animation.

Optional transitions should respect reduced-motion preferences.

Navigation remains usable when motion is disabled.

## Integration

Load the stylesheet after your reset or base styles.

Place the breadcrumb near the page heading when appropriate.

Use consistent hierarchy labels across the application.

Avoid duplicating the same navigation landmark unnecessarily.

## Testing

Check every breadcrumb link with the keyboard.

Verify `aria-current` on the current page.

Test narrow and wide viewport sizes.

Test browser zoom.

Confirm that theme changes preserve readable contrast.

## Summary

The quickstart provides a small, semantic navigation pattern.

CSS variables make the pastel presentation easy to adapt.

Native HTML supplies the core accessibility behavior.

The component is suitable for documentation and production interfaces.
