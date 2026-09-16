# Retro Pixel Ticker Marquee Row — Theming

## Overview

This guide documents theme customization for the Retro Pixel Ticker Marquee Row.

The component exposes presentation values through CSS custom properties.

This keeps the markup stable while allowing the visual system to change.

The implementation requires no JavaScript.

## Purpose

Use the ticker to present short, non-critical status or announcement messages.

Keep visual theming separate from message content.

Avoid making color the only way to communicate status.

Provide a readable default theme before applying a custom theme.

## Markup

The `.ticker` class defines the component surface.

The `.ticker__track` class contains the message sequence.

Each `.ticker__item` represents one message.

Optional modifier classes can describe compact or emphasized variants.

The HTML should remain unchanged when a theme changes.

## Theme Variables

`--ticker-bg` controls the item background.

`--ticker-text` controls item text.

`--ticker-border` controls item borders.

`--ticker-accent` controls highlighted labels.

`--ticker-gap` controls spacing between messages.

`--ticker-radius` controls corner rounding when the design calls for it.

## Custom Theme Example

Define variables on a theme wrapper rather than duplicating component rules.

Use a named theme class when multiple themes are required.

Keep values grouped together so design tokens are easy to audit.

Do not override unrelated global styles from the ticker theme.

## Modifier Classes

`.ticker--compact` can reduce spacing.

`.ticker--high-contrast` can provide a stronger visual separation.

`.ticker__item--accent` can highlight a selected message.

Modifiers should change presentation, not semantics.

## Accessibility

Check text contrast after every theme change.

Do not encode warning or success meaning using color alone.

Keep labels visible at high zoom levels.

Avoid low-opacity text for important messages.

Respect forced-colors and user preference where possible.

## Motion

The theme should not depend on animated effects.

Any scrolling treatment should provide a reduced-motion alternative.

Avoid flashing or rapidly changing colors.

The component should remain understandable as a static row.

## Responsive Behavior

Theme values should not force fixed widths.

Allow message items to wrap when space is limited.

Keep horizontal padding reasonable on small screens.

Test custom themes at mobile and desktop widths.

## Usage

Apply the base stylesheet once.

Set theme variables on a parent element.

Use the same HTML structure for every visual theme.

Replace sample messages with project-specific content.

## Testing Checklist

- Verify contrast in every theme.
- Test keyboard focus around nearby controls.
- Test browser zoom.
- Test forced-colors where supported.
- Test reduced-motion preferences.
- Test narrow viewport widths.
- Test long messages.

## Integration

The demo provides a complete reference structure.

The stylesheet contains the base theme and responsive rules.

Theme variables can be moved into an application design-token layer.

No component JavaScript is required for theming.

## Summary

CSS custom properties make the Retro Pixel Ticker Marquee Row easy to adapt.

Separating tokens from structure keeps themes maintainable and consistent.
