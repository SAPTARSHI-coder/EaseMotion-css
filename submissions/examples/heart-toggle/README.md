# Heart Toggle
A dependency-free heart/like toggle for the EaseMotion CSS gallery.

## Features
* Pure HTML and CSS
* Interactive checkbox-based toggle
* Heart changes from outlined to filled red when activated
* Small pulse-burst animation on activation
* Hover, active, and keyboard-focus states
* Responsive layout
* `prefers-reduced-motion` support
* No JavaScript or external dependencies

## Structure
```text
heart-toggle/
├── demo.html
├── style.css
├── README.md
└── PR.md
```

## Usage
Open `demo.html` in a browser. The heart can be activated with a mouse, touch input, or keyboard.
The hidden checkbox provides the interaction state while CSS sibling selectors control the visual transition.

## Accessibility
The toggle uses a native checkbox with an accessible label, making the control keyboard accessible without JavaScript. A visible `:focus-visible` state is included for keyboard users.
Reduced-motion preferences are respected through `prefers-reduced-motion`.

## Customization
The main colors and visual values are exposed as CSS custom properties near the top of `style.css`, making it easy to adapt the component to other EaseMotion themes.
