# Neumorphic Modal

Documentation showcase for EaseMotion CSS issue #78678.

## Overview

This example presents a modal-style surface using neumorphic shadows, clear hierarchy, responsive actions, and semantic dialog attributes. It focuses on the visual component rather than JavaScript dialog management.

## Structure

```text
submissions/examples/neumorphic-modal-78678/
├── demo.html
├── style.css
└── README.md
```

## Features

- Neumorphic modal surface.
- Semantic dialog attributes.
- Primary and secondary actions.
- Responsive action layout.
- Keyboard-visible focus state.
- CSS-only presentation.

## Integration

Copy the `.modal` section into the desired dialog container and include `style.css`. In a production application, connect the buttons to the application's modal lifecycle and ensure focus is moved into the dialog when it opens.

## Accessibility

The demo provides `role="dialog"`, `aria-modal`, `aria-labelledby`, and `aria-describedby`. Native buttons preserve keyboard interaction. Production implementations should additionally manage focus trapping and restoration when the modal is dynamically opened.

## Responsive Behavior

The modal uses fluid width and padding. At smaller widths, the action controls share the available width and the content spacing is reduced while remaining readable.

## Customization

The surface, text, light-shadow, and dark-shadow values are defined as custom properties in `style.css`. Adjust those variables together to preserve the characteristic raised and pressed effect.

## Files

- `demo.html` — complete dialog-style showcase.
- `style.css` — neumorphic surface, actions, responsive layout, and focus styling.
- `README.md` — integration and accessibility documentation.
