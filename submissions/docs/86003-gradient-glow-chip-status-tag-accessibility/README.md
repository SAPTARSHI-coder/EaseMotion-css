# Gradient Glow Chip Status Tag — Accessibility

## Overview

This guide documents an accessible status chip pattern with a gradient-glow visual treatment.

The component communicates short status information without depending on color alone.

It is intended for dashboards, filters, cards, tables, and notification summaries.

The example uses semantic HTML and plain CSS.

No framework is required.

## Structure

Use a `span` for non-interactive status information.

Use a button only when the chip performs an action.

Give interactive controls an accessible name.

Keep the status text visible to sighted users.

Do not use decorative icons as the only status indicator.

## Accessibility

Status meaning should remain understandable without the glow effect.

Pair color with text such as Active, Pending, or Offline.

Maintain readable contrast between text and the chip surface.

Avoid rapidly flashing glow animations.

Respect reduced-motion preferences.

Keep focus indicators visible for interactive variants.

## HTML Example

The demo provides a complete markup example.

The status label is placed inside a dedicated chip element.

An optional icon can reinforce the state without replacing its text.

Interactive chips should use native buttons or links.

Do not add unnecessary ARIA roles when native semantics are sufficient.

## Modifier Classes

Use a base chip class for shared structure.

Add state modifiers such as `chip--success` or `chip--warning`.

Use `chip--interactive` for actionable variants.

Keep modifiers focused on presentation or state.

Avoid deeply nested selector chains.

## Custom Properties

Expose the accent color through a CSS custom property.

Expose the surface color through a CSS custom property.

Expose glow intensity through a separate variable.

This allows themes to change without rewriting component rules.

Custom properties should have sensible fallback values.

## Keyboard Navigation

Static chips require no keyboard interaction.

Interactive chips must be reachable with Tab.

Enter or Space should activate a native button.

Focus must remain visually distinguishable.

Do not remove the browser focus outline without a replacement.

## Responsive Behavior

Keep chip text on one readable line where practical.

Allow wrapping when a narrow layout requires it.

Avoid fixed widths that cause clipping.

Use the same component at mobile and desktop sizes.

## Reduced Motion

Decorative glow should be disabled or simplified for reduced-motion users.

The status itself must remain visually clear.

Avoid transitions that delay important state feedback.

## Usage

Copy the component markup from `demo.html`.

Load `style.css` after the page reset or base stylesheet.

Replace the sample statuses with application-specific values.

Keep status terminology consistent throughout the interface.

## Testing

Test the chip using keyboard navigation.

Check the component at high browser zoom.

Verify readable contrast in every state.

Test with reduced motion enabled.

Check that status meaning remains clear without color.

## Files

`README.md` contains this implementation guide.

`demo.html` contains the standalone accessible example.

`style.css` contains the presentation and responsive rules.

The three files can be reviewed independently.

## Summary

The gradient glow is decorative rather than semantic.

Text and native interaction provide the accessible foundation.

The pattern is lightweight and reusable across documentation and production interfaces.
