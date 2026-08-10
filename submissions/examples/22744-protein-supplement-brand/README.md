# Issue #22744 - Advanced: E-commerce - Protein Supplement Brand

This submission adds a premium, responsive supplement e-commerce landing page at `submissions/examples/22744-protein-supplement-brand/` using only HTML, CSS, inline SVG artwork, and existing EaseMotion CSS classes.

## What The Submission Adds

- A bold, athletic, product-focused landing page for the fictional brand `Velocity Nutrition`
- A premium hero section with an inline SVG product visual showing a protein tub, shaker bottle, scoop, powder-energy accents, a performance dashboard badge, and floating product callouts
- Responsive product merchandising, ingredient/science content, testimonials, pricing bundles, and a subscription CTA
- Direct-open browser compatibility with no JavaScript, no frameworks, and no external assets

## Required Sections Included

1. Hero with athletic imagery-style visual
2. Product grid by goal
3. Ingredients and science section
4. Athlete testimonials
5. Bundle deals
6. Subscribe CTA
7. Footer

## Folder Structure

```text
submissions/examples/22744-protein-supplement-brand/
├── demo.html
├── style.css
└── README.md
```

## EaseMotion Classes Used

- `.ease-fade-in`
- `.ease-slide-in-left`
- `.ease-slide-in-right`
- `.ease-slide-up`
- `.ease-float`
- `.ease-ambient-glow`
- `.ease-hover-lift`
- `.ease-hover-glow`
- `.ease-hover-shimmer`
- `.ease-card`
- `.ease-card-hover`
- `.ease-card-glass`
- `.ease-card-glow`
- `.ease-card-lift`
- `.ease-btn`
- `.ease-btn-primary`
- `.ease-btn-outline`
- `.ease-btn-lg`
- `.ease-btn-pill`
- `.ease-badge`
- `.ease-badge-success`
- `.ease-badge-pulse`

## Responsive Behavior

- Desktop uses a two-column hero and multi-column grids for products, bundles, and testimonials
- Tablet collapses major sections to single-column layouts where needed while keeping cards balanced
- Mobile stacks navigation, CTAs, metrics, and all card grids into clean single-column flows
- Spacing, badge placement, and the hero visual scale down to avoid overflow and preserve readability

## Browser Compatibility

- Opens directly in modern Chromium-based browsers, Firefox, Safari, and Edge
- Uses only HTML, CSS, inline SVG, and the repository's `easemotion.css` entrypoint

## How To Open `demo.html`

1. Navigate to `submissions/examples/22744-protein-supplement-brand/`
2. Open `demo.html` directly in a browser

Because the page links to `../../../easemotion.css`, no build step or local server is required.

## Notes

- No JavaScript is included
- No external images, fonts, SVG files, or icon libraries are used
- All product art is created with inline SVG and CSS
- Copy uses responsible supplement language such as "supports recovery" and "helps meet protein goals"
