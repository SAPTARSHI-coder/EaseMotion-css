# Parallax Input Field

Documentation showcase for EaseMotion CSS issue #78679.

## Overview

The Parallax Input Field uses `:focus-within` to create a small depth shift when the input becomes active. The interaction is intentionally subtle and works without JavaScript.

## Structure

```text
submissions/examples/parallax-input-field-78679/
├── demo.html
├── style.css
└── README.md
```

## Features

- Semantic form and label.
- Email autocomplete support.
- Focus-within parallax lift.
- Layered focus shadow.
- Helper text for context.
- Responsive card spacing.
- Keyboard-visible button focus.
- Reduced-motion fallback.

## Usage

Open `demo.html` or copy the `.field-group` and button into an existing form. Keep the label associated with the input using the matching `for` and `id` attributes.

## Accessibility

The field uses a visible `<label>`, a native email input, native form controls, and a visible keyboard focus state. The parallax movement is removed when reduced motion is requested.

## Responsive Behavior

The card uses a fluid width and responsive padding. The input remains full width while preserving a comfortable touch target and readable helper text.

## Customization

The background, panel, text, accent, and border values are defined as custom properties. The lift distance can be adjusted on `.field:focus-within` to control the intensity of the parallax effect.

## Files

- `demo.html` — complete form field showcase.
- `style.css` — layout, focus parallax, responsive behavior, and motion rules.
- `README.md` — usage and accessibility documentation.
