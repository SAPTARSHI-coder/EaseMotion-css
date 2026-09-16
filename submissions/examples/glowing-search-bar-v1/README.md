# Glowing Search Bar
A pure CSS glowing search input with dark-mode styling for the EaseMotion CSS component collection.

## Features
* Dark fintech-inspired visual treatment
* Purple neon focus glow
* Smooth focus and hover transitions
* Animated panel entrance
* Search icon and submit action
* Keyboard shortcut hint
* Responsive desktop, tablet, and mobile layouts
* Visible keyboard focus state
* `prefers-reduced-motion` support
* No JavaScript
* No external dependencies

## Structure
```text
glowing-search-bar/
├── demo.html
├── style.css
└── README.md
```

## Implementation
The component uses:
* CSS custom properties for EaseMotion-style design tokens
* CSS Grid and Flexbox
* `:focus-within` for the glowing input state
* CSS transitions and keyframes
* Native HTML search input semantics
* Responsive media queries
The glow is created entirely with CSS using layered borders, shadows, gradients, and pseudo-elements.

## Accessibility
The search field includes:
* A visually hidden `<label>`
* Native `<input type="search">`
* A semantic search form
* Keyboard-visible focus styling
* Reduced-motion handling through `prefers-reduced-motion`

## Usage
Copy `demo.html` and `style.css` into your project and adapt the EaseMotion variables to match your application theme.
The form currently demonstrates the visual component only. A real project can connect the form submission to its own search functionality.
