# Issue #22753 - Advanced: E-commerce - Outdoor Gear Shop

This submission adds a premium, responsive, one-page outdoor equipment landing page for **Northbound Supply** using only HTML, CSS, and existing EaseMotion CSS classes.

## What The Submission Adds

- A rugged, editorial-style outdoor storefront with a campaign-style hero and inline SVG mountain camp scene
- Activity-based product discovery cards for hiking, camping, trail running, climbing, backpacking, and winter gear
- A featured product showcase covering jackets, packs, stoves, poles, tents, and hydration
- A gear comparison table, adventure journal preview, customer reviews, newsletter signup, and branded footer
- Motion-enhanced buttons, cards, badges, and reveals using EaseMotion classes without JavaScript

## Required Sections Included

- Hero with adventure imagery
- Products by activity
- Gear comparison feature
- Adventure blog preview
- Reviews
- Newsletter signup
- Footer

## Folder Structure

```text
submissions/examples/22753-outdoor-gear-shop/
|-- demo.html
|-- style.css
`-- README.md
```

## EaseMotion Classes Used

- Entrance motion: `ease-fade-in`, `ease-slide-up`, `ease-delay-100`, `ease-delay-200`, `ease-delay-300`, `ease-delay-400`
- Buttons and interactions: `ease-btn`, `ease-btn-primary`, `ease-btn-outline`, `ease-btn-hover`, `ease-btn-lg`, `ease-btn-pill`
- Cards and surfaces: `ease-card`, `ease-card-glass`, `ease-card-shadow`, `ease-card-hover`
- Hover polish: `ease-hover-glow`, `ease-hover-lift`, `ease-hover-underline`
- Supporting components: `ease-badge`, `ease-badge-success`, `ease-badge-pulse`, `ease-avatar`, `ease-avatar-group`, `ease-compare-table`, `ease-input`

## Responsive Behavior

- Desktop uses a split hero, three-column activity and product grids, and multi-column content sections
- Tablet reduces to two-column grids and keeps comparison content readable within the card shell
- Mobile stacks all sections into a single-column flow, converts hero badges into inline chips, and keeps buttons full-width for easier tapping

## Browser Compatibility

- Opens directly in current Chrome, Edge, Firefox, and Safari without a build step
- Uses standards-based CSS features such as Grid, gradients, inline SVG, and `backdrop-filter`

## How To Open `demo.html`

1. Open `submissions/examples/22753-outdoor-gear-shop/demo.html` directly in a modern browser.
2. No server, package install, JavaScript, or build tooling is required.

## Notes

- No JavaScript is used anywhere in the submission.
- No external images, SVG files, icon libraries, frameworks, or remote assets are used.
- The hero artwork and product/activity visuals are created with inline SVG and CSS only.
