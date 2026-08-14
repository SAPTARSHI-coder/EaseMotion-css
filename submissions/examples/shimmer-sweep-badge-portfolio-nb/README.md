# Shimmer Sweep Badge Portfolio

## Overview
This submission presents a polished creative portfolio layout that highlights reusable shimmer-sweep badges for featured work, availability, expertise, and recognition. The demo stays lightweight, semantic, and fully self-contained while echoing the refined motion language of EaseMotion CSS.

## Features
- Premium portfolio hero with logo, intro, CTA actions, and prominent badges
- Multiple shimmer-sweep badge variations with a subtle, professional sweep animation
- Featured project cards, skill cards, and contact cards with consistent spacing and hierarchy
- Responsive layout that adapts cleanly from mobile to desktop
- Accessible focus states and reduced-motion support

## Folder structure
```text
submissions/examples/shimmer-sweep-badge-portfolio-nb/
├── demo.html
├── style.css
└── README.md
```

## Installation / Usage
Open the demo directly in a browser:

```bash
# From the repository root
start submissions/examples/shimmer-sweep-badge-portfolio-nb/demo.html
```

You can also copy the badge markup into your own project:

```html
<span class="badge badge--featured">Featured Project</span>
```

## Responsive behavior
The layout uses a fluid two-column hero on larger screens, then shifts to a single-column experience on smaller devices. Badge grids and cards collapse smoothly to preserve readability and spacing without overflow.

## Accessibility notes
- Semantic HTML5 landmarks and heading hierarchy are used throughout the page
- Visible focus styles are provided for links and buttons
- Color contrast remains strong for body text and badge labels
- The shimmer animation is reduced or disabled automatically when users prefer less motion

## CSS custom properties
The component exposes the following configurable variables in the stylesheet:

```css
--badge-duration
--badge-easing
--badge-radius
--badge-padding
--badge-background
--badge-text-color
--badge-highlight-color
--badge-shadow
--shimmer-width
```

## EaseMotion CSS classes demonstrated
The demo uses the following EaseMotion-inspired utility classes where they fit naturally:

- `ease-fade-in`
- `ease-slide-up`
- `ease-flex`
- `ease-grid`
- `ease-btn`
- `ease-btn-primary`
- `ease-btn-outline`
- `ease-card`
- `ease-card-shadow`
- `ease-card-hover`

## Browser compatibility
This demo is designed to work well in modern evergreen browsers, including:
- Chrome
- Edge
- Firefox
- Safari

## Customization guide
To adapt the badge system, adjust the CSS variables at the top of the stylesheet for duration, radius, padding, palette, and shadow. You can also create additional badge variants by extending the existing `.badge--*` modifiers while keeping the same shimmer structure.
