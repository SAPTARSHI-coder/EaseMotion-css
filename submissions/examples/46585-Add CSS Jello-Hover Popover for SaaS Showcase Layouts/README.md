# CSS Jello-Hover Popover for SaaS Showcase

A pure CSS, JavaScript-free popover component that triggers a fun and engaging "Jello" animation upon opening. Designed to perfectly match modern SaaS (Software as a Service) showcase and landing page aesthetics.

## Features
- **Pure CSS (No JS)**: State is managed completely natively using the `:focus-within` and `:hover` pseudo-classes. No JavaScript required.
- **EaseMotion Jello Animation**: Utilizes a custom `@keyframes ease-jello` sequence to create a lively skew-and-scale wobble effect when the popover appears.
- **SaaS Showcase Aesthetic**: Features a clean, bright design with soft drop shadows, rounded corners, and vibrant indigo accents typical of top-tier SaaS landing pages.
- **Accessible & Responsive**: Fully usable via keyboard navigation (tabbing onto the trigger naturally opens the popover), and adapts to mobile layouts gracefully.

## EaseMotion Classes & Variables
- `.ease-popover-panel.ease-jello-hover`: The core animation class applied to the popover panel.
- `@keyframes ease-jello`: The custom keyframe animation driving the wobble effect.
- `--ease-jello-duration`: A customizable CSS variable (default: `900ms`) dictating the length of the jello bounce.
- `--ease-popover-offset-y`: Controls the vertical distance between the popover and the trigger button.

## Usage
Simply drop the `.ease-popover-container` markup into your hero section or navigation bar. To customize the animation timing or spacing, adjust the CSS variables defined in the `:root` scope.

### Quick Start
Open `demo.html` in your browser to view the interactive SaaS hero layout and test the jello-hover popover in action.
