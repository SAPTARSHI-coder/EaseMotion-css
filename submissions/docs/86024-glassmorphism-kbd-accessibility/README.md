# Glassmorphism Kbd Key Display — Accessibility

## Overview

This guide documents the accessible usage of the Glassmorphism Kbd Key Display.

The component presents keyboard shortcuts using semantic keyboard markup.

Its visual treatment can remain decorative without replacing native semantics.

The example is intentionally framework-free.

## Purpose

Use this pattern to communicate shortcuts beside buttons, controls, or help text.

The visual surface uses CSS custom properties for easy customization.

The semantic `<kbd>` element identifies keyboard input for assistive technology.

Decorative blur and transparency should never carry essential meaning.

## Markup

Use a descriptive container around related shortcuts.

Use one `<kbd>` element for each physical or logical key.

Use visible text to explain what a shortcut performs.

Keep the shortcut order consistent with the actual key sequence.

Avoid using images of keyboard keys as the only representation.

## Modifier Classes

The base class is `.kbd-display`.

Individual keys use `.kbd-display__key`.

A modifier can be represented with `.kbd-display__key--modifier`.

A compact presentation can use `.kbd-display--compact`.

Keep modifiers predictable so documentation examples remain reusable.

## Custom Properties

`--kbd-bg` controls the key surface.

`--kbd-border` controls the key border.

`--kbd-text` controls readable key text.

`--kbd-shadow` controls the depth effect.

`--kbd-radius` controls corner rounding.

## Keyboard Guidance

The component itself should not become an unnecessary interactive control.

Keyboard shortcuts should have an alternative interaction path.

Do not trap focus inside the visual component.

Do not use positive `tabindex` values for decorative keys.

Document shortcuts that conflict with browser or assistive-technology commands.

## Accessibility

Maintain readable contrast between key text and its surface.

Do not communicate shortcut meaning through color alone.

Keep text labels visible when the visual effect is unavailable.

Respect user zoom and text scaling.

Ensure focus indicators remain visible around nearby interactive controls.

## Responsive Behavior

Allow key groups to wrap on narrow screens.

Avoid forcing a horizontal viewport overflow.

Use compact spacing at small widths.

Preserve readable key labels when the layout becomes constrained.

Test with browser zoom and mobile viewport sizes.

## Reduced Motion

The visual component does not require animation.

Any hover transition should honor `prefers-reduced-motion`.

Avoid continuously animated blur or glow effects.

The shortcut meaning must remain available without motion.

## Usage

Place the component near the action it describes.

Use concise labels for common shortcuts.

Keep the markup readable in documentation pages.

Replace example keys with the actual shortcuts supported by the application.

## Testing Checklist

- Verify semantic keyboard markup.
- Check text contrast.
- Test browser zoom.
- Test keyboard navigation around nearby controls.
- Test small viewport widths.
- Test reduced-motion preferences.
- Confirm the visual effect is not required for meaning.

## Integration

The demo can be copied into a documentation page without JavaScript.

The stylesheet contains the presentation rules.

The HTML provides the semantic structure.

Custom properties can be overridden at a parent scope.

## Summary

The Glassmorphism Kbd Key Display combines a decorative surface with semantic keyboard notation.

Keeping the semantics independent from the visual treatment makes the pattern easier to reuse.
