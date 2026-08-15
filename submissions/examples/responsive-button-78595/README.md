# Responsive Button

Documentation showcase for EaseMotion CSS issue #78595. This example demonstrates a flexible action group that remains readable and touch-friendly from desktop screens down to narrow mobile layouts.

## Files

- `demo.html` — semantic button examples and action grouping.
- `style.css` — responsive sizing, spacing, interaction states, and reduced-motion behavior.

## Features

The example includes primary and secondary actions with distinct visual hierarchy. Buttons use native elements so click, keyboard, focus, and disabled-state behavior can be extended naturally in a real application.

The layout uses flexible spacing instead of fixed viewport dimensions. Buttons can therefore grow with their labels without breaking the surrounding card.

## Usage

Replace the example labels with product-specific actions. Keep `<button>` for operations performed inside the current page and use links when the action navigates to another resource.

## Accessibility

- Native button elements provide keyboard interaction.
- `:focus-visible` is used for a clear focus indicator.
- Text labels remain visible at all supported sizes.
- Touch targets retain comfortable padding on small screens.
- Reduced-motion preferences are respected.

## Responsive Behavior

The action row uses wrapping and a mobile breakpoint. On smaller screens the buttons become full-width or stack cleanly, preventing cramped controls and horizontal overflow.

## Customization

Adjust button padding, radius, typography, shadows, colors, and transition timing in `style.css`. The component can be adapted for forms, dashboards, landing pages, or account actions.

## Preview

Open `demo.html` and resize the browser window. Hover and focus each action to inspect the interactive states, then test the layout at a narrow viewport.
