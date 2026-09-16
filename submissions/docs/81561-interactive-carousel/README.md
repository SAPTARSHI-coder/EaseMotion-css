# Interactive Carousel

Documentation for the basic-usage Interactive Carousel requested in issue #81561.

## Scope

This guide follows the basic-usage requirement from the issue title.
It explains the carousel structure, reusable classes, CSS variables, controls, and keyboard guidance.
The component uses native buttons for navigation and keeps the content readable as a standalone demo.

## Features

- Horizontal interactive card track.
- Previous and next controls.
- Responsive card sizing.
- Native button controls.
- Custom CSS variable overrides.
- Clear focus states.
- Reduced-motion support.
- Touch-friendly spacing.

## Structure

Use a viewport wrapper to hide overflowing slides.
Place cards inside a track element.
Keep previous and next controls outside the clipping viewport.
Each card should contain a clear heading and supporting content.
The full example is provided in `demo.html`.

## Class Naming

Use `.carousel` for the component root.
Use `.carousel__viewport` for the clipped viewing area.
Use `.carousel__track` for the moving card row.
Use `.carousel__slide` for each card.
Use `.carousel__controls` for navigation buttons.
Use `.carousel__button` for previous and next actions.
Use modifier classes for optional states rather than duplicating the base component.

## CSS Variables

Variables control card width, gap, surface, border, radius, and transition timing.
Override them on `.carousel` to adapt the component to an existing design system.
Keep movement timing centralized so all slide transitions remain consistent.

## Basic Usage

Add the viewport, track, slides, and controls from the demo.
Give each navigation button an accessible name.
Connect controls to the track movement logic when JavaScript is added.
Keep the number of visible cards responsive rather than hard-coding viewport sizes.
Do not place essential information only inside hover states.

## Accessibility

Use native buttons for carousel navigation.
Keep button focus visible with `:focus-visible`.
Ensure each card has readable content without pointer interaction.
Provide accessible names for icon-only controls.
Do not make decorative slide elements keyboard targets.
Respect `prefers-reduced-motion` by disabling or shortening track animation.

## Keyboard Interaction

Tab should move through the carousel controls and meaningful card links.
Enter or Space should activate native buttons.
Do not override standard keyboard behavior unnecessarily.
Keep control order predictable.
If a more advanced carousel adds roving focus, document that behavior separately.

## Responsive Behavior

The desktop layout can display several cards at once.
At medium widths the card width decreases while preserving readable content.
On narrow screens one primary card can occupy the viewport.
Controls remain reachable without covering the card content.

## Customization

Change card width and gap through variables.
Adjust surface and border values for different themes.
Tune transition duration for faster or slower movement.
Modify corner radius without changing markup.
Use a stronger focus ring if the carousel is placed on a low-contrast surface.

## Demo

Open `demo.html` directly in a browser.
The demo includes multiple cards, navigation controls, and responsive presentation.
It requires no build step for the visual example.

## Files

- `demo.html` — expanded carousel example.
- `style.css` — formatted carousel and responsive styling.
- `README.md` — basic usage and accessibility documentation.

## Verification

Test the controls with the keyboard.
Check the carousel at multiple viewport widths.
Confirm focus remains visible.
Verify cards remain readable without hover.
Test reduced-motion behavior.
