# Cyberpunk Timeline

Documentation for the Cyberpunk Timeline requested in issue #81532.

## Scope

This submission documents the accessibility-integration variant named in the issue title.
The guide focuses on reusable markup, class conventions, CSS variables, and keyboard behavior.
It is designed to be copied into an existing EaseMotion CSS project without extra dependencies.

## Features

- Neon-inspired timeline presentation.
- Vertical event hierarchy with clear ordering.
- Reusable timeline item and modifier classes.
- CSS custom properties for visual overrides.
- Keyboard-friendly interactive controls where applicable.
- Visible focus treatment for keyboard users.
- Reduced-motion support for animated transitions.
- Responsive layout for narrow screens.

## Markup

Use a semantic section to introduce the timeline.
Use an ordered list when the events represent a sequence.
Each event should contain a heading, time or status, and supporting description.
Keep decorative elements separate from meaningful timeline content.
A copy-paste example is available in `demo.html`.

## Class Naming

Use `.timeline` for the component root.
Use `.timeline__list` for the ordered event collection.
Use `.timeline__item` for each event.
Use `.timeline__marker` for the visual event marker.
Use `.timeline__content` for the event information panel.
Use modifier classes such as `.timeline__item--active` for state changes.
Keep modifier names tied to state rather than visual implementation details.

## CSS Variables

The component exposes variables for background, text, accent, spacing, and motion.
Override variables on the component root instead of rewriting selector rules.
This keeps the component portable across different themes.
Example overrides can be found in the demo stylesheet.

## Accessibility

Use meaningful headings for each timeline event.
Do not rely on color alone to communicate event status.
Keep text contrast strong against the cyberpunk surface.
Interactive elements must be native buttons or links.
Use `:focus-visible` for a clear keyboard focus state.
Provide accessible names for icon-only controls.
Decorative glow and scan-line effects should not contain essential information.
Respect `prefers-reduced-motion` by reducing or removing movement.

## Keyboard Interaction

Tab should move through interactive elements in logical document order.
Do not make decorative timeline markers keyboard focusable.
If an event expands content, use a button and expose its state with `aria-expanded`.
If a control targets a panel, connect it with `aria-controls`.
Keep the active event understandable without pointer hover.

## Responsive Behavior

The desktop layout uses a wider content rail and separated event panels.
At smaller widths, the timeline collapses into a single readable column.
Spacing and marker size are reduced without removing event information.
Long headings and descriptions should wrap naturally.

## Customization

Change the accent color through the component variables.
Adjust the timeline gap to control event density.
Change marker size without changing the semantic markup.
Tune transition duration for the desired interaction speed.
Replace the surface treatment while retaining the component class structure.

## Demo

Open `demo.html` directly in a browser.
The demo contains representative events, active-state styling, and accessible focus behavior.
It is self-contained and does not require a build step.

## Browser Support

The implementation uses standard HTML and CSS features supported by modern browsers.
The core timeline remains usable when animation is unavailable.

## Files

- `demo.html` — expanded standalone timeline example.
- `style.css` — formatted component and responsive styles.
- `README.md` — feature-specific documentation.

## Verification

Check the timeline at desktop and mobile widths.
Navigate interactive controls with the keyboard.
Confirm visible focus indicators.
Test the page with reduced motion enabled.
Verify that status information is not conveyed by color alone.
