# Morphing Avatar

Documentation showcase for EaseMotion CSS issue #78681.

## Overview

The Morphing Avatar is a CSS-only profile treatment that changes from a rounded square into a circular avatar when hovered or focused. The interaction adds depth without requiring JavaScript.

## Structure

```text
submissions/examples/morphing-avatar-78681/
├── demo.html
├── style.css
└── README.md
```

## Features

- Rounded-to-circular shape transition.
- Hover and keyboard focus interaction.
- Accessible avatar label.
- Responsive sizing.
- Profile metadata chips.
- Visible focus state.
- Reduced-motion fallback.

## Usage

Replace the `EM` initials with an image or initials for the target profile. Keep the accessible label meaningful when the avatar represents a real person or account.

## Accessibility

The avatar is focusable and exposes an accessible label through `aria-label`. The profile action remains a native anchor and receives a visible keyboard focus state.

## Responsive Behavior

The avatar scales down on smaller screens and the profile container uses fluid padding to keep the component comfortable on narrow devices.

## Customization

Adjust the gradient colors, avatar dimensions, border radius, and transition duration in `style.css`. The default transition can be disabled through `prefers-reduced-motion`.

## Files

- `demo.html` — complete profile and avatar markup.
- `style.css` — morphing shape, spacing, interaction, responsiveness, and motion rules.
- `README.md` — usage and accessibility documentation.
