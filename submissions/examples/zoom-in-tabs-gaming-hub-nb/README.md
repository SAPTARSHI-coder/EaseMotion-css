# Zoom-In Tabs for Gaming Hub Layouts

## Overview
A polished, self-contained gaming dashboard showcase built with semantic HTML and CSS-only zoom-in tab interactions. The experience highlights a premium esports-inspired UI with animated tab focus, responsive cards, and accessible motion support.

## Features
- Modern gaming hero section with CTA buttons
- CSS-only zoom-in tab switching with active-state emphasis
- Realistic gaming content for featured games, trends, releases, esports, community, and downloads
- Responsive layout for mobile, tablet, and desktop screens
- Accessible tab semantics, visible focus states, and reduced-motion support
- CSS custom properties for animation timing, scale, radius, shadows, and colors

## Folder structure
```text
zoom-in-tabs-gaming-hub-nb/
├── demo.html
├── style.css
└── README.md
```

## Installation / Usage
1. Open the folder in your browser by launching demo.html directly.
2. Review the hero section and interactive tabs.
3. Customize the appearance by editing the CSS variables at the top of style.css.

## Responsive behavior
The layout uses a fluid grid and flexible card system so the hero, tabs, and statistics stack gracefully across small screens and widescreen displays.

## Accessibility notes
The component uses semantic HTML5 landmarks, keyboard-friendly tab controls, visible focus styling, and a reduced-motion fallback that disables non-essential transitions when the user requests it.

## CSS custom properties
```css
:root {
  --tab-duration: 320ms;
  --tab-easing: cubic-bezier(0.22, 1, 0.36, 1);
  --tab-scale: 1.04;
  --tab-radius: 1.25rem;
  --tab-shadow: 0 18px 45px rgba(9, 18, 40, 0.28);
  --tab-background: linear-gradient(135deg, rgba(92, 71, 255, 0.16), rgba(0, 220, 255, 0.12));
  --tab-active-color: #7c9bff;
  --tab-hover-scale: 1.02;
  --tab-gap: 0.9rem;
}
```

## EaseMotion CSS classes demonstrated
The demo intentionally uses utility-style class names such as:
- ease-fade-up
- ease-card-surface
- ease-button

These help communicate the visual motion language while keeping the component self-contained.

## Browser compatibility
The showcase is compatible with modern evergreen browsers including:
- Chrome
- Edge
- Firefox
- Safari

## Customization guide
To adapt the experience for another product theme, update the accent palette, spacing, and the animated tab states in style.css. You can also swap the placeholder content in demo.html to match a different brand voice.

## HTML usage example
```html
<link rel="stylesheet" href="style.css" />
<div class="page-shell">
  <section class="tabs-shell" role="tablist" aria-label="Gaming hub sections">
    <input class="tab-input" type="radio" name="gaming-tabs" id="tab-featured" checked />
    <label class="tab-control" for="tab-featured" role="tab" aria-selected="true">Featured Games</label>
    <div class="tab-panels">
      <section class="tab-panel" id="panel-featured" role="tabpanel">
        <div class="game-card">Nova Drift</div>
      </section>
    </div>
  </section>
</div>
```
