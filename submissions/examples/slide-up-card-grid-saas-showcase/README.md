# CSS Slide-Up Card Grid - SaaS Showcase Layouts

A modern, highly interactive, and responsive CSS slide-up card grid designed specifically for SaaS showcase layouts. This example demonstrates how to build premium hover-elevated cards featuring high-fidelity mock UI components (such as charts, workflow diagrams, integration grids, and security badges) using pure HTML and CSS.

## Overview

The **CSS Slide-Up Card Grid** utilizes modern CSS styling practices like Grid, Flexbox, custom properties, and transitions to create a premium, dark-themed SaaS feature grid. On hover, cards lift up smoothly and project ambient glow shadows that change dynamically based on the card's accent.

## Features

- **Pure HTML + CSS**: No JavaScript dependencies or large framework setups.
- **Smooth Elevating Hover Effect**: Premium CSS transition curves (`cubic-bezier`) that slide cards upward and expand internal UI elements.
- **Glassmorphism**: Soft background blur filters combined with semi-transparent card borders.
- **Responsive Layout**: Powered by CSS Grid `auto-fit` to adjust seamlessly across mobile, tablet, and desktop viewports.
- **High-Fidelity Mock Components**: Embedded visual indicators for real-time analytics, triggers, integration partners, and security compliance.
- **A11y Friendly**: Meets accessibility standards using semantic HTML5 elements, `:focus-visible` styles, and keyboard focus delegation.
- **Reduced Motion Support**: Detects `prefers-reduced-motion: reduce` preference and safely disables animations.

## Folder Structure

```
slide-up-card-grid-saas-showcase/
├── demo.html     # Semantic showcase structure
├── style.css     # Design tokens and layout rules
└── README.md     # Setup and customization guide
```

## Installation

To integrate the CSS Slide-Up Card Grid into your project, copy the markup from `demo.html` and the corresponding styles from `style.css`.

Alternatively, clone the repository and open the `demo.html` file in your browser to run the live preview:

```bash
# Clone the repository
git clone https://github.com/Bheemeswari497/EaseMotion-css.git

# Navigate to the showcase folder and open in browser
cd EaseMotion-css/submissions/examples/slide-up-card-grid-saas-showcase
open demo.html
```

## Usage

Simply structure your cards with a main grid container and semantic `<article>` cards:

```html
<section class="card-grid" aria-label="Features">
    <article class="saas-card card-analytics">
        <div class="card-glow-edge"></div>
        <div class="card-header">
            <!-- Icon and tag wrapper -->
        </div>
        <div class="card-body">
            <h2>Feature Title</h2>
            <p>Feature details and descriptions.</p>
            <!-- Mock Component Markup -->
        </div>
        <div class="card-footer">
            <a href="#" class="card-cta-btn">Learn More</a>
        </div>
    </article>
</section>
```

## Customization using CSS Variables

You can easily adapt this template to fit your corporate brand identity by modifying the custom properties defined at the root of `style.css`:

```css
:root {
    --bg-color: #080b11;                /* Main page background */
    --text-primary: #f8fafc;            /* Heading color */
    --text-muted: #94a3b8;              /* Subtitles / body copy */
    
    --card-bg: rgba(17, 24, 39, 0.6);   /* Card glass backdrop background */
    --card-border-default: rgba(255, 255, 255, 0.08);
    --card-border-hover: rgba(99, 102, 241, 0.4);
    
    /* Hover Lift Distance */
    --slide-offset: 16px;               /* Height the card elevates on hover */
}
```

## Accessibility

- **Focus ring**: Interactive anchors use `:focus-visible` to render a high-contrast dashed border only when navigated with keyboards, keeping mouse hover outlines clean.
- **Focus propagation**: The `.saas-card:focus-within` selector highlights the parent card container when keyboard users tab onto the internal call-to-action link.
- **Semantic structure**: Designed using standard `<main>`, `<header>`, `<section>`, and `<article>` tags to ensure assistive technology tools scan and read the DOM correctly.
- **Aria attributes**: Included `aria-hidden="true"` on non-interactive aesthetic decorations and mock components to avoid cluttering screen reader cues.

## Browser Support

- Chrome (Desktop & Mobile)
- Safari (macOS & iOS)
- Firefox
- Microsoft Edge

## License Note

This example is released under the MIT License. Feel free to copy, modify, and utilize it in your private or commercial projects.
