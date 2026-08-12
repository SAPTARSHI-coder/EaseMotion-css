# CSS Shimmer-Sweep Dropdown for Product Catalog

A lightweight, pure HTML and CSS dropdown component designed for modern product catalog layouts.

The Shimmer-Sweep Dropdown provides an expandable product-details section with a smooth shimmer-sweep animation on the dropdown trigger. It is built without JavaScript or external dependencies.

## Features

- Pure HTML and CSS
- No JavaScript required
- Smooth shimmer-sweep animation
- Expandable product details
- Native HTML `<details>` and `<summary>` interaction
- Keyboard accessible
- Visible focus state
- Responsive product-card layout
- Desktop, tablet, and mobile support
- Customizable animation timing
- `prefers-reduced-motion` support
- No external libraries or frameworks
- Works by opening `demo.html` directly in a browser

## Usage

1. Include `style.css` in the HTML page.
2. Add the product dropdown markup using the provided component classes.
3. Place the dropdown inside a product card.
4. Open `demo.html` directly in a browser to view the complete example.

The component can be reused for product catalogs, e-commerce interfaces, checkout pages, and product detail sections.

## CSS Custom Properties

The component provides CSS custom properties for controlling animation timing:

| Property | Description | Default |
|---|---|---|
| `--shimmer-duration` | Controls the shimmer animation speed | `1.2s` |
| `--shimmer-easing` | Controls the shimmer animation timing | `ease-in-out` |
| `--dropdown-duration` | Controls dropdown opening and closing speed | `320ms` |
| `--dropdown-easing` | Controls the dropdown transition timing | `cubic-bezier(0.22, 1, 0.36, 1)` |

These properties can be adjusted to customize the animation behavior according to the design requirements.

## How It Works

The component uses the native HTML `<details>` and `<summary>` elements to provide expandable product information without JavaScript.

The shimmer effect is implemented entirely with CSS using:

- CSS custom properties
- CSS pseudo-elements
- Linear gradients
- Background positioning
- CSS keyframe animation
- CSS transitions
- The native `open` state of the `<details>` element

The shimmer animation appears when the dropdown trigger is hovered or receives keyboard focus.

When the dropdown is opened, the product details become visible and the trigger icon provides visual feedback.

## Accessibility

The component is designed with accessibility in mind.

- Uses semantic HTML elements.
- Supports keyboard interaction through the native `<summary>` element.
- Provides a visible focus indicator.
- Decorative icons are hidden from assistive technologies where appropriate.
- Supports `prefers-reduced-motion`.

When reduced motion is enabled, animation and transition effects are minimized while the dropdown remains fully functional.

## Responsive Design

The product catalog uses a responsive CSS Grid layout.

- **Desktop:** Three-column product layout
- **Tablet:** Two-column product layout
- **Mobile:** Single-column product layout

The component adapts to different viewport sizes without requiring JavaScript.

## Browser Support

The component is designed for modern browsers supporting:

- CSS Grid
- CSS Custom Properties
- CSS Animations
- CSS Transitions
- CSS pseudo-elements
- HTML `<details>` and `<summary>`
- `prefers-reduced-motion`

No JavaScript or external dependencies are required.

## Why It Fits EaseMotion CSS

The Shimmer-Sweep Dropdown follows the lightweight and reusable approach of EaseMotion CSS.

It demonstrates how CSS animations can provide meaningful interaction feedback without JavaScript or external libraries.

The component provides:

- Lightweight implementation
- Pure HTML and CSS
- Reusable class-based styling
- Smooth CSS animation
- Responsive behavior
- Keyboard-friendly interaction
- Reduced-motion support
- Customizable animation timing
- No external dependencies

It is suitable for:

- Product catalogs
- E-commerce product listings
- Checkout interfaces
- Product comparison sections
- Product detail panels
- Shopping interfaces

## Files

```text
product-catalog-shimmer-sweep-dropdown/
├── demo.html
├── style.css
└── README.md