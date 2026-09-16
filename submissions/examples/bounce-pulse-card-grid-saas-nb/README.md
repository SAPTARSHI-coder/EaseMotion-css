# Bounce-Pulse Card Grid SaaS Showcase

A premium SaaS landing page section with hover-activated bounce + pulse feature cards, pricing tiers, and testimonials. This example is built with pure HTML and CSS and highlights EaseMotion CSS-friendly styling.

## Features

- Hero section with logo, headline, description, and CTA buttons
- Responsive feature card grid with bounce-pulse hover interaction
- Pricing preview cards matching the same motion pattern
- Customer testimonial cards with ratings
- Accessible keyboard focus states and reduced motion support
- Modern SaaS aesthetic with soft shadows, rounded surfaces, and flexible spacing

## Folder structure

```text
bounce-pulse-card-grid-saas-nb/
├── demo.html
├── style.css
└── README.md
```

## Installation / Usage

Open `submissions/examples/bounce-pulse-card-grid-saas-nb/demo.html` in any modern browser.

If you want to use the component in a project, link the stylesheet:

```html
<link rel="stylesheet" href="submissions/examples/bounce-pulse-card-grid-saas-nb/style.css">
```

Then copy the HTML structure from `demo.html` into your page.

## Responsive behavior

- Single-column layout on mobile
- Two-column hero layout on tablet
- Three-column feature, pricing, and testimonial grids on desktop
- Text and spacing scale for comfortable reading at all breakpoints

## Accessibility notes

- Semantic HTML5 structure with `header`, `main`, `section`, `article`, and `footer`
- Keyboard-accessible card containers using `tabindex="0"`
- Visible focus outlines for interactive links and buttons
- `prefers-reduced-motion` support disables motion and transitions
- High contrast text and accessible button states

## CSS custom properties

The example exposes the following CSS variables:

- `--card-duration`
- `--card-easing`
- `--card-bounce-distance`
- `--card-pulse-scale`
- `--card-radius`
- `--card-shadow`
- `--card-background`
- `--card-gap`
- `--card-hover-shadow`

You can adjust timing, easing, hover intensity, shadows, background, and spacing from the root.

## EaseMotion CSS classes demonstrated

This example uses several EaseMotion-inspired utility patterns:

- `ease-card-hover` for card hover motion
- `ease-card-shadow` for soft floating shadows
- `ease-slide-in-left` for light entrance movement
- `ease-hover-lift` for CTA hover states

## Browser compatibility

Works in recent versions of:

- Chrome
- Firefox
- Edge
- Safari

## Customization guide

- Update `--accent` and background variables for brand color themes
- Adjust `--card-radius` for softer or sharper card corners
- Tune `--card-duration` and `--card-easing` for faster or calmer motion
- Change the hero headline, feature copy, pricing labels, and testimonials for your product
- Add new cards by duplicating the existing `.feature-card`, `.pricing-card`, or `.testimonial-card` elements
