# Pure CSS Ribbon Banner Design

A modern ribbon banner component built entirely with HTML and CSS.

## Features

- Pure CSS implementation
- No JavaScript required
- No external assets
- Decorative dual ribbon design
- CSS pseudo-element folds
- Gradient styling
- Hover effects
- Responsive layout
- Keyboard focus support
- Reduced-motion support
- Clean and reusable structure

## Files

- `demo.html` — Banner structure and content
- `style.css` — Complete styling and responsive rules
- `README.md` — Component documentation

## Usage

Link the stylesheet in `demo.html`:

    <link rel="stylesheet" href="style.css">

The ribbon structure uses:

    <div class="ribbon ribbon-left" aria-hidden="true">
        <span>LIMITED</span>
    </div>

    <div class="ribbon ribbon-right" aria-hidden="true">
        <span>FEATURED</span>
    </div>

## How It Works

The ribbons use CSS transforms for their angled appearance.

    .ribbon-left {
        transform: rotate(-45deg);
    }

    .ribbon-right {
        transform: rotate(45deg);
    }

CSS pseudo-elements create the folded ribbon ends without images or SVG assets.

## Customization

Colors can be changed through CSS variables:

    :root {
        --primary: #6d4aff;
        --primary-dark: #5032d6;
        --secondary: #ff5f9e;
    }

Ribbon labels can be changed directly in the HTML.

## Accessibility

The component includes:

- Semantic HTML
- Descriptive link text
- Keyboard focus styling
- Decorative elements using `aria-hidden`
- Reduced-motion support

## Responsive Design

The layout adapts to different screen sizes using media queries.

On smaller screens:

- Ribbon sizes are reduced.
- Content width adjusts automatically.
- Typography scales responsively.
- Spacing is optimized for mobile devices.

## Browser Compatibility

The component uses modern CSS features including:

- CSS custom properties
- Gradients
- Transforms
- Pseudo-elements
- Transitions
- Media queries
- `clamp()`
- `prefers-reduced-motion`

## Testing

Test the component using VS Code Live Server or by opening `demo.html` in a browser.

Verify the ribbon positioning, hover effects, focus state, responsiveness, and reduced-motion behavior.

## Issue

EaseMotion CSS Issue #71879 — Pure CSS Ribbon Banner Design

