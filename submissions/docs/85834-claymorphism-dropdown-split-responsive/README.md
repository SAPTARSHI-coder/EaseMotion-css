# Claymorphism Dropdown Split Button — Responsive Breakpoints Layout

## Overview
This guide documents responsive breakpoint behavior for a Claymorphism Dropdown Split Button.

The component separates a primary action from a secondary menu action.

The layout uses native buttons and a menu container.

The responsive scope focuses on adapting spacing and arrangement at narrow widths.

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

Use native buttons for both actions.

The menu trigger owns the expanded state.

## Class Structure

`split-button` is the component block.

`split-button__primary` identifies the main action.

`split-button__toggle` identifies the menu trigger.

`split-button__menu` contains secondary choices.

Modifiers can represent compact or stacked layouts.

## Custom Properties

```css
.split-button {
  --split-radius: 1rem;
  --split-surface: #f4e7db;
  --split-accent: #5b4636;
  --split-shadow: 0 0.7rem 0 #d3bba7;
}
```

Override these values at the component scope.

Keep breakpoint rules focused on layout rather than duplicated theme values.

## Responsive Breakpoints

Use the wide layout when enough horizontal space is available.

Reduce padding at medium widths to preserve the action label.

Stack the controls at narrow widths when the combined width becomes constrained.

The menu should remain aligned with its trigger after the layout changes.

Avoid horizontal scrolling.

## Accessibility

Keep a visible focus indicator on both buttons.

Update `aria-expanded` whenever the menu opens or closes.

Use `aria-controls` to identify the controlled menu.

The menu items must remain keyboard reachable.

Do not rely on shadows or color alone to communicate state.

## Keyboard Navigation

Tab moves between interactive controls.

Enter and Space activate native buttons.

Escape can close an open menu when scripting is added.

Keep focus management predictable when the menu is opened dynamically.

Do not trap focus unnecessarily.

## Usage

Use the primary button for the most common action.

Keep secondary menu options related to that action.

Use short labels that remain readable at mobile widths.

## Testing

Test desktop, tablet, and mobile widths.

Test browser zoom at 200 percent.

Test keyboard-only interaction.

Test focus visibility.

Test expanded and collapsed menu states.

## Reduced Motion

Decorative transitions should respect `prefers-reduced-motion`.

The menu must remain usable without animation.

## Files

`README.md` documents the responsive configuration.

`demo.html` contains the standalone example.

`style.css` contains cleanly spaced responsive styles.

## Summary

The responsive split button preserves clear primary and secondary actions while adapting its layout to available width.