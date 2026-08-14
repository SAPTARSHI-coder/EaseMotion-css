# Material Design Split Button — Basic Usage

## Overview
A split button separates the primary action from related secondary actions.
The pattern is useful when one action is dominant and alternatives are available.

## Markup
```html
<div class="split-button" role="group" aria-label="Save options">
  <button class="split-button__primary" type="button">Save</button>
  <button class="split-button__menu" type="button" aria-label="More save options">⌄</button>
</div>
```

## Class Naming
`split-button` is the group block.
`split-button__primary` is the main action.
`split-button__menu` is the secondary control.

## Usage
Use one clear primary action.
Keep secondary choices related to that action.
The example does not implement menu state; the host application supplies it.

## Styling
Expose surface, border, radius, spacing, and focus values as variables.
Keep the two controls visually connected while preserving separate focus targets.

## Accessibility
Use native buttons for both actions.
Give the menu button an explicit accessible name.
Keep the group label meaningful.
Do not depend on icons alone to identify the secondary action.

## Keyboard Guidance
Both buttons must be reachable independently.
Native button activation provides Enter and Space support.
Maintain a logical tab sequence.

## Responsive Design
Allow the group to shrink with its container.
Prevent labels from becoming clipped.

## Motion
Optional transitions should respect reduced-motion preferences.

## Testing
Test keyboard navigation, focus visibility, labels, narrow layouts, and menu integration.

## Files
`README.md` contains the usage documentation.
`demo.html` provides the standalone example.
`style.css` provides clean component styling.

## Maintenance
Keep menu behavior in the application layer.
Keep visual structure in the component stylesheet.
