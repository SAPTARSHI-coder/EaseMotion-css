# 3D Flip Tabs Cyberpunk Neon

## Project Overview
This submission delivers a pure HTML and CSS cyberpunk landing page with futuristic hero content, animated 3D-flip tabs, vibrant glassmorphism cards, and a polished responsive dashboard layout. The experience is designed to feel premium, immersive, and accessible while staying lightweight and framework-free.

## Features
- Responsive hero section with neon branding and action buttons
- Six keyboard-accessible 3D flip tabs with hover and active states
- Futuristic dashboard and feature cards with glow effects
- Statistics, community panels, and footer sections for a complete landing experience
- Reduced-motion support and semantic HTML structure

## Folder Structure
```text
submissions/examples/3d-flip-tabs-cyberpunk-neon-nb/
├── demo.html
├── style.css
└── README.md
```

## Installation
No installation is required. Open the demo directly in a browser:

```bash
# From the repository root
start submissions/examples/3d-flip-tabs-cyberpunk-neon-nb/demo.html
```

## Usage
Include the stylesheet and use the provided semantic structure in your page:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <main class="page-shell">
      <header class="hero panel ease-fade-in">
        <div class="hero__copy">
          <h1 class="hero__title">Neon control deck</h1>
          <a href="#dashboard" class="button button--primary">Launch Interface</a>
        </div>
      </header>
    </main>
  </body>
</html>
```

## Responsive Design
The layout adapts across mobile, tablet, and desktop breakpoints with flexible grids, fluid typography, and stacked panels when space is limited. The tab list collapses gracefully and cards reflow without overflow.

## Accessibility Features
- Semantic HTML5 landmarks and sections
- Keyboard-accessible tab buttons with focus states
- ARIA roles for tablist, tab, and tabpanel components
- High contrast text and non-essential motion reduction support

## CSS Custom Properties
The stylesheet exposes reusable variables for timing, perspective, glow, spacing, and surface styling:

- `--flip-duration`
- `--flip-easing`
- `--flip-angle`
- `--flip-perspective`
- `--tab-radius`
- `--tab-shadow`
- `--tab-gap`
- `--tab-background`
- `--tab-active-color`
- `--tab-hover-scale`
- `--card-radius`
- `--card-shadow`
- `--primary-neon`
- `--secondary-neon`

## EaseMotion CSS Classes Used
This submission uses the existing EaseMotion utility classes where appropriate, including:

- `ease-fade-in`
- `ease-slide-up`
- `ease-scale-in`
- `ease-hover-glow`
- `ease-card`

## Browser Compatibility
The demo is built with standard HTML and CSS only, so it will work in modern evergreen browsers such as Chrome, Edge, Firefox, and Safari.

## Customization Guide
To tailor the appearance, adjust the CSS custom properties in the root block of the stylesheet. You can change the neon palette, increase or decrease animation depth, or tune the component radius and shadow intensity to match a different visual theme.
