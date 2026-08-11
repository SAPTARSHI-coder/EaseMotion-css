# Float Drift Tooltip Portfolio

## Overview
This submission presents a polished, self-contained creative portfolio showcase built with semantic HTML and CSS only. The experience highlights a premium float-drift tooltip interaction that feels calm, tactile, and production-ready while staying lightweight and accessible.

## Features
- Premium portfolio hero with branding, headline, CTAs, and interactive highlights
- Multiple tooltip variations for skills, project context, stats, and contact details
- Responsive project cards and skill cards with layered glass-inspired surfaces
- Keyboard-friendly focus states and reduced-motion support
- CSS custom properties for tuning duration, easing, spacing, radius, and shadow

## Folder structure
```text
float-drift-tooltip-portfolio-nb/
├── demo.html
├── style.css
└── README.md
```

## Installation / Usage
Open the demo directly in a browser:

```text
submissions/examples/float-drift-tooltip-portfolio-nb/demo.html
```

No build step or JavaScript framework is required.

## Responsive behavior
The layout shifts from a spacious two-column hero on desktop to a stacked one-column presentation on smaller screens. Cards, buttons, and tooltips remain readable and avoid clipping while preserving spacing and hierarchy.

## Accessibility notes
- Semantic sections, headings, buttons, and links are used throughout
- Tooltip triggers are keyboard reachable with visible focus states
- Colors and contrast have been chosen to remain readable in bright and dark environments
- Reduced-motion preferences simplify animation timing for motion-sensitive users

## CSS custom properties
The component exposes these configurable values in the stylesheet:

```css
:root {
  --tooltip-duration: 0.6s;
  --tooltip-easing: cubic-bezier(0.22, 1, 0.36, 1);
  --tooltip-distance: 18px;
  --tooltip-offset: 10px;
  --tooltip-scale: 1.01;
  --tooltip-radius: 18px;
  --tooltip-shadow: 0 24px 60px rgba(15, 23, 42, 0.16);
  --tooltip-background: linear-gradient(145deg, rgba(255, 255, 255, 0.97), rgba(243, 246, 255, 0.9));
  --tooltip-arrow-size: 10px;
}
```

## EaseMotion CSS classes demonstrated
The markup includes utility-inspired classes such as:
- `ease-fade-in`
- `ease-slide-up`
- `ease-card`
- `ease-hover-lift`

These are included alongside the local implementation to reflect the visual language of the EaseMotion ecosystem without recreating the framework utilities themselves.

## Browser compatibility
The demo is designed to work in modern evergreen browsers including Chrome, Edge, Firefox, and Safari.

## Customization guide
To personalize the look and motion:
1. Adjust the custom properties at the top of the stylesheet.
2. Swap the palette values for a brand-specific color system.
3. Tweak the section spacing, surface blur, or border radius to match a more editorial or more minimal aesthetic.
4. Expand the content blocks with additional cards or tooltip examples while keeping the same layout rhythm.
