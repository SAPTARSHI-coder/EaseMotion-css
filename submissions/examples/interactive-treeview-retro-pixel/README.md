# Interactive Treeview Menu with Retro Pixel Styling
A responsive treeview navigation component built with pure HTML and CSS.

## Features
- Retro pixel-inspired visual design
- Nested expandable tree navigation
- Pure CSS interaction using `<details>` and `<summary>`
- No JavaScript dependencies
- Responsive across mobile, tablet, and desktop
- EaseMotion-compatible CSS variables and design tokens
- Keyboard-accessible native disclosure controls
- Visible focus states
- `prefers-reduced-motion` support
- No external dependencies

## Files
- `demo.html` — Treeview markup and demonstration
- `style.css` — Complete styling and responsive behavior
- `README.md` — Documentation

## Usage
Open `demo.html` directly in a modern browser.
The tree branches use native HTML disclosure elements, so JavaScript is not required for expanding and collapsing navigation items.

## Accessibility
The component uses native `<details>` and `<summary>` controls for expandable sections.
It also includes:
- Semantic navigation
- Keyboard-accessible controls
- Visible `:focus-visible` states
- Reduced-motion support through `prefers-reduced-motion`

## Responsive Behavior
The layout adapts to smaller screens by:
- Reducing spacing and typography
- Keeping the navigation inside the viewport
- Preserving readable touch targets
- Stacking footer status information on narrow screens
