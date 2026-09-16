# Neon Pulse Button
A pure HTML and CSS animated button featuring a glowing neon drop-shadow and a subtle pulse effect on hover and keyboard focus.

## Features
* Neon purple glow
* Animated hover/focus pulse
* Slight scale-up and scale-down animation
* Increased glow intensity during interaction
* Smooth transitions
* Responsive layout
* Keyboard-accessible focus state
* `prefers-reduced-motion` support
* No JavaScript
* No external dependencies

## Structure
```text
neon-pulse-button/
├── demo.html
├── style.css
└── README.md
```

## Implementation
The component uses EaseMotion-inspired CSS custom properties for:
* Background and surface colors
* Text colors
* Accent colors
* Glow intensity
* Border radius
* Animation easing and transitions
The neon effect is created with layered `box-shadow`, a blurred pseudo-element, and CSS gradients.
The pulse animation uses `transform: scale()` together with changing shadow intensity to create the requested glowing interaction.

## Accessibility
The button uses a native `<button>` element and includes:
* Keyboard interaction
* `:focus-visible` styling
* Visible focus outline
* Reduced-motion support
When `prefers-reduced-motion: reduce` is enabled, the continuous pulse and other decorative motion are effectively disabled.

## Usage
Copy `demo.html` and `style.css` into your project and customize the EaseMotion variables to match your preferred theme.
The button is intentionally presentation-focused and can be connected to any application action.
