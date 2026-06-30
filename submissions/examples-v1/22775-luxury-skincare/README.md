# Issue #22775 - Advanced: E-commerce - Luxury Skincare

This submission adds a premium, responsive, one-page luxury clinical skincare landing page for **Maison Cellulaire**, built with plain HTML, scoped CSS, inline SVG artwork, and existing EaseMotion CSS classes.

## What This Submission Adds

- A direct-open luxury skincare storefront with an editorial, clinical, and premium visual direction
- Inline SVG hero art featuring a serum bottle, cream jar, dropper bottle, pearl glow, botanical accents, gold highlights, and floating ingredient cards
- Four premium product cards for hydrating, barrier, brightening, and overnight ritual essentials
- Ingredient science cards for peptides, ceramides, hyaluronic acid, vitamin C, and niacinamide
- A CSS-only results gallery, verified buyer review cards, auto-refill CTA, and branded footer

## Required Sections Included

- Hero with luxury product hero shot
- Product grid with key ingredients
- Science behind the products
- Before and after results gallery
- Reviews with verified buyer tags
- Subscription and auto-refill CTA
- Footer

## Folder Structure

```text
submissions/examples/22775-luxury-skincare/
|-- demo.html
|-- style.css
`-- README.md
```

## EaseMotion Classes Used

- Entrance motion: `ease-fade-in`, `ease-slide-up`
- Hover and glow: `ease-hover-lift`, `ease-hover-glow`, `ease-btn-hover`, `ease-card-hover`
- Components: `ease-card`, `ease-card-glass`, `ease-btn`, `ease-btn-primary`, `ease-btn-outline`, `ease-badge`, `ease-field`, `ease-input`, `ease-select`

## Responsive Behavior

- Desktop: split hero layout, four-up product grid, five-card science grid, and multi-column review and results sections
- Tablet: hero stacks more comfortably with two-column product, review, and results layouts
- Mobile: single-column sections, full-width actions, simplified floating card placement, and readable spacing without overflow

## Browser Compatibility

- Built for modern browsers with support for CSS Grid, gradients, `backdrop-filter`, and inline SVG
- Suitable targets include current Chrome, Edge, Firefox, and Safari

## How To Open

1. Open `demo.html` directly in a modern browser.
2. No server, JavaScript, build step, package install, or external asset loading is required.

## Notes

- Uses no JavaScript and no external images, fonts, SVG files, or icon libraries
- Links the repository root `easemotion.css` plus local `style.css`
- Keeps all changes isolated to `submissions/examples/22775-luxury-skincare/`
