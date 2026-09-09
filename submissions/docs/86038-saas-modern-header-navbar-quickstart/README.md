# SaaS Modern Header Navbar — Quickstart

## Overview
This quickstart documents the SaaS Modern Header Navbar Menu.
It provides copy-ready structure, responsive behavior, and accessibility guidance.

## Purpose
Use the header for product branding and primary navigation.
Keep the most important destinations easy to discover.

## Markup
Use a semantic header and navigation landmark.
Keep navigation destinations as real links.
Use a clear brand link for the product identity.

## Classes
`saas-navbar` is the component block.
`saas-navbar__brand` identifies the brand link.
`saas-navbar__list` contains navigation links.
Use modifiers for intentional visual variants.

## Navigation
Keep labels concise and descriptive.
Group related destinations logically.
Avoid unnecessary navigation items.

## Custom Properties
Theme surface, text, accent, spacing, radius, and shadow through CSS variables.
Override variables at a page or theme scope.
Keep theme tokens consistent with the host design system.

## Accessibility
Use a labeled `nav` landmark.
Keep links keyboard reachable.
Preserve visible focus indicators.
Do not use hover as the only interaction.
Use native buttons for menu toggles when needed.

## Responsive Behavior
Allow navigation to adapt when horizontal space becomes limited.
Wrap or collapse navigation instead of creating horizontal scrolling.
Keep action targets comfortable for touch users.

## Typography
Use the product's existing type scale where possible.
Keep navigation labels readable at browser zoom.
Avoid overly small utility text.

## Visual Design
Keep the header visually distinct from page content.
Use restrained borders and spacing for a modern SaaS appearance.
Do not reduce contrast for decorative minimalism.

## Reduced Motion
Respect `prefers-reduced-motion` for optional menu transitions.
Navigation remains usable when animation is disabled.

## Integration
Place the header near the top-level page structure.
Keep navigation data separate from presentation styles.
Communicate active navigation state with more than color alone.

## Demo
Open `demo.html` to inspect the complete standalone example.
Use Tab to test keyboard navigation.
Resize the viewport to inspect responsive behavior.

## Customization
Change CSS variables instead of rewriting component selectors.
Adjust spacing and radius to match the host design system.
Keep the semantic structure unchanged.

## Testing
Test keyboard navigation.
Test visible focus states.
Test mobile widths.
Test desktop widths.
Test long navigation labels.
Test browser zoom.
Test reduced motion.

## Browser Support
The component uses standard HTML and CSS.
Modern browsers support the responsive features used by the demo.

## Files
`README.md` contains this guide.
`demo.html` contains the demonstration.
`style.css` contains the presentation rules.

## Summary
The SaaS header provides a reusable navigation foundation.
Keep semantics native and let responsive CSS handle presentation changes.
Use the demo as the starting point for product integration.
