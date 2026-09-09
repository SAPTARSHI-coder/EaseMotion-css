# Neumorphic Tab Bar

Documentation showcase for EaseMotion CSS issue #78680.

## Overview

The Neumorphic Tab Bar demonstrates a compact tablist using a raised container and inset active state. The component is intentionally CSS-focused while retaining semantic tab roles for integration into an interactive application.

## Structure

```text
submissions/examples/neumorphic-tab-bar-78680/
├── demo.html
├── style.css
└── README.md
```

## Features

- `tablist` and `tab` semantics.
- `aria-selected` state.
- Associated example tab panel.
- Raised and inset neumorphic states.
- Responsive wrapping.
- Keyboard-visible focus styling.
- No JavaScript dependency for presentation.

## Usage

Open `demo.html` to inspect the component. In an application, connect each tab button to its corresponding panel and update `aria-selected` as the active tab changes.

## Accessibility

The example uses native buttons so keyboard users can focus and activate each control. `aria-selected`, `aria-controls`, and `aria-labelledby` establish the relationship between tabs and panels.

A production implementation should also add the appropriate keyboard arrow-key behavior for a fully managed tab interface.

## Responsive Behavior

The bar wraps on smaller screens and allows each tab to retain a practical minimum width. The panel remains below the control with consistent spacing.

## Customization

Adjust the surface, light-shadow, dark-shadow, text, and muted variables in `style.css` to match the surrounding interface.

## Files

- `demo.html` — semantic tablist and panel markup.
- `style.css` — neumorphic surfaces, active state, spacing, responsiveness, and focus styling.
- `README.md` — integration and accessibility documentation.
