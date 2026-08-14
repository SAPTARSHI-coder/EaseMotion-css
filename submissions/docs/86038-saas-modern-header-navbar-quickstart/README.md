# SaaS Modern Header Navbar — Quickstart

## Overview
This quickstart documents the SaaS Modern Header Navbar Menu.
It provides copy-ready HTML, modifier guidance, responsive behavior, and accessibility notes.

## Markup
Use a semantic header and navigation landmark.
Keep navigation destinations as real links.

```html
<header class="saas-navbar">
  <a class="saas-navbar__brand" href="#">Acme</a>
  <nav aria-label="Primary navigation">
    <ul class="saas-navbar__list">
      <li><a href="#features">Features</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#docs">Docs</a></li>
    </ul>
  </nav>
</header>
```

## Classes
`saas-navbar` is the component block.
`saas-navbar__brand` identifies the brand link.
`saas-navbar__list` contains navigation links.
Use modifiers for intentional visual variants.

## Custom Properties
Theme surface, text, accent, spacing, radius, and shadow through CSS variables.
Override variables at a page or theme scope.

## Accessibility
Use a labeled `nav` landmark.
Keep links keyboard reachable.
Preserve visible focus indicators.
Do not use hover as the only interaction.

## Responsive Behavior
Allow navigation to wrap at narrow widths.
Avoid fixed widths that create horizontal scrolling.
Keep action targets comfortable for touch users.

## Demo
Open `demo.html` to inspect the complete standalone example.
Use Tab to test keyboard navigation and resize the viewport for responsive behavior.

## Files
`README.md` contains this guide.
`demo.html` contains the demonstration.
`style.css` contains the presentation rules.

## Testing
Test keyboard navigation, focus visibility, mobile widths, desktop widths, and custom theme variables.
