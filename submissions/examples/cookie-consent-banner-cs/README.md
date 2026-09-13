# Cookie Consent Banner
A responsive, dependency-free cookie consent banner for the EaseMotion CSS gallery.

## Features
* Pure HTML and CSS
* Responsive cookie consent layout
* Accept and preferences actions
* Cookie-themed CSS illustration
* Hover and active button states
* Keyboard focus styling
* Semantic dialog structure
* `prefers-reduced-motion` support
* No JavaScript or external dependencies

## Structure
```text
cookie-consent-banner/
├── demo.html
├── style.css
├── README.md
└── PR.md
```

## Usage
Open `demo.html` in a browser to view the cookie consent banner.
The demo uses native checkbox controls wrapped inside styled labels to provide a small CSS-only interactive state for the action buttons.

## Implementation
The banner is constructed with semantic HTML and custom CSS.
The layout uses CSS Grid on larger screens and switches to a stacked action layout on smaller screens. The cookie icon is drawn entirely with CSS shapes.
No JavaScript, icon library, framework, or external dependency is required.

## Accessibility
The banner uses `role="dialog"` with an accessible heading and description.
Native checkbox controls provide keyboard interaction, while visually styled focus states make keyboard navigation visible.
The component also respects `prefers-reduced-motion`.

## Customization
Colors, spacing, borders, shadows, typography, and animation values are exposed as CSS custom properties at the top of `style.css`.
