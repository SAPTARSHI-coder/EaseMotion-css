# SaaS Modern Header Navbar — Theming

## Overview
This guide documents the theming configuration for the SaaS Modern Header Navbar Menu.
The component uses semantic navigation markup and CSS custom properties for visual control.
The example is designed to be copied into documentation or a product prototype.

## Scope
- Theme-level custom properties.
- Navbar modifier classes.
- Responsive navigation layout.
- Keyboard navigation guidance.
- Accessible landmark structure.
- Standalone demo usage.

## Markup
Use a `header` containing a `nav` landmark and an unordered list for navigation links.
Keep link text descriptive and preserve a logical source order.

```html
<header class="saas-navbar saas-navbar--compact">
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

## Modifiers
Use `saas-navbar--compact` for a denser header presentation.
Additional modifiers can change alignment or surface treatment without changing markup.
Keep modifier names attached to the component block for predictable maintenance.

## Custom Properties
The component exposes variables for surface, text, accent, spacing, radius, and shadow.
Override them from a theme scope rather than editing every selector.

```css
.saas-navbar {
  --navbar-surface: #ffffff;
  --navbar-text: #182033;
  --navbar-accent: #315efb;
  --navbar-radius: 1rem;
  --navbar-gap: 1.25rem;
}
```

## Accessibility
The `nav` element provides a native navigation landmark.
Give it an accessible label when multiple navigation landmarks exist.
Use real links for navigation rather than clickable generic elements.
Provide visible focus states for keyboard users.
Do not rely on hover alone to expose essential destinations.

## Keyboard Navigation
Links must remain reachable with the Tab key.
Focus order should match the visual order.
Do not remove browser focus indicators without a stronger replacement.
If a mobile menu is added, its trigger should be a real button with state information.

## Responsive Behavior
The navigation list should wrap or collapse at an intentional breakpoint.
Keep tap targets comfortable on narrow screens.
Avoid horizontal overflow caused by fixed widths.
Test intermediate widths rather than only mobile and desktop extremes.

## Customization
Change theme variables at the component or page scope.
Use the accent variable for links and active states.
Keep contrast suitable for both light and dark themes.
Avoid hard-coding colors in individual modifier selectors when a variable is available.

## Demo
Open `demo.html` directly in a browser to inspect the themed header.
Resize the viewport to verify responsive behavior.
Use keyboard navigation to verify focus visibility and order.

## Testing Checklist
- Validate navigation landmarks.
- Test every link with the keyboard.
- Test visible focus indicators.
- Test narrow viewport widths.
- Test wide viewport widths.
- Test custom property overrides.
- Test contrast after theme changes.
- Test reduced-motion preferences.

## File Structure
`README.md` documents theming and usage.
`demo.html` provides a standalone example.
`style.css` contains the presentation and theme variables.

## Implementation Notes
Keep structure in HTML and presentation in CSS.
Prefer custom properties for reusable design tokens.
Use modifiers only for meaningful variants.
The component can be embedded into a larger SaaS page without framework dependencies.
