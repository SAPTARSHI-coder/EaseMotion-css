# Claymorphism Dropdown Split Button — Accessibility Setup

## Overview
This guide documents accessible setup for the Claymorphism Dropdown Split Button.

The component separates a primary action from a menu trigger.

Native buttons provide the interaction foundation.

The guide covers semantics, expanded state, keyboard navigation, and focus behavior.

## Markup

```html
<div class="split-button">
  <button class="split-button__primary" type="button">Save</button>
  <button class="split-button__toggle" type="button" aria-expanded="false" aria-controls="save-menu" aria-label="More save options">⌄</button>
  <div class="split-button__menu" id="save-menu" hidden>
    <button type="button">Save as template</button>
    <button type="button">Save and close</button>
  </div>
</div>
```

Keep native button semantics.

The toggle controls the menu visibility.

## State

`aria-expanded="false"` represents a closed menu.

Set it to `true` when the menu is visible.

The `hidden` attribute keeps a closed menu out of the accessibility tree.

`aria-controls` identifies the controlled menu.

## Keyboard Navigation

Tab moves focus through the controls.

Enter and Space activate native buttons.

Escape should close an open menu when interactive behavior is implemented.

Do not trap focus inside the menu.

Return focus to the trigger when closing the menu programmatically.

## Focus

Every interactive element needs a visible focus state.

Focus indicators must remain visible against the claymorphism surface.

Do not remove outlines without providing a stronger replacement.

## Class Structure

`split-button` is the component wrapper.

`split-button__primary` is the main action.

`split-button__toggle` opens the menu.

`split-button__menu` contains related choices.

Use modifiers for visual variants without changing semantics.

## Custom Properties

```css
.split-button {
  --split-surface: #f4e7db;
  --split-accent: #5b4636;
  --split-focus: #1b6cff;
}
```

Keep accessibility colors configurable while maintaining contrast.

## Responsive Behavior

Stack or resize the control when horizontal space becomes limited.

Keep all labels readable at mobile widths.

Avoid clipping the menu or creating horizontal scrolling.

## Reduced Motion

Disable decorative movement under `prefers-reduced-motion`.

The menu must remain fully usable without transitions.

## Testing Checklist

- Test Tab and Shift+Tab.
- Test Enter and Space.
- Test Escape behavior.
- Confirm `aria-expanded` updates.
- Confirm focus remains visible.
- Test browser zoom.
- Test mobile widths.
- Test screen-reader announcements.

## Files

`README.md` contains the accessibility guidance.

`demo.html` contains the standalone structure.

`style.css` contains the presentation rules.

## Summary

Accessible split-button behavior depends on native controls, accurate state, predictable focus, and clear labels.