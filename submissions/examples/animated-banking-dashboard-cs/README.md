# Animated Banking Dashboard
A polished banking/fintech dashboard example for EaseMotion, built with semantic HTML and pure CSS.

## Features
* 3D credit card with hover tilt
* Animated card shine effect
* Total balance overview
* Checking and savings account breakdown
* Quick banking actions
* Animated spending bar chart
* Spending category breakdown
* Savings goals with animated progress bars
* Recent transaction history
* Categorized transaction icons
* Upcoming bill payment list
* Responsive dashboard layout
* Keyboard-focusable controls
* `prefers-reduced-motion` support

## File Structure
```text
submissions/examples/animated-banking-dashboard/
├── demo.html
├── style.css
└── README.md
```

## Implementation
The component uses:
* HTML5 semantic elements
* CSS Grid and Flexbox
* CSS custom properties
* `transform` and `perspective` for the 3D card
* CSS keyframe animations for charts, progress bars, and card shine
* Responsive media queries
* No JavaScript
* No external libraries or dependencies

## 3D Card Effect
The credit card uses CSS perspective and 3D transforms. Hovering over the card changes its `rotateX()` and `rotateY()` values to create a lightweight interactive tilt effect.
The shine is implemented with a pseudo-element-style overlay and a CSS animation that sweeps across the card.

## Accessibility
The demo includes:
* Semantic buttons for interactive controls
* Accessible labels for icon-only controls
* Visible keyboard focus states
* Reduced-motion support through `prefers-reduced-motion`
The displayed financial information is static demo content and is not connected to a real banking service.

## Usage
Open `demo.html` in a browser with `style.css` in the same directory.
This example is intended as a visual UI demonstration rather than a production banking application.
