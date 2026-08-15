# ease-hover-nav-underline-follow-sap

A nav bar underline that follows whichever link is currently hovered (not just the active one), sliding smoothly between links and fading out when the cursor leaves the nav entirely.

## Usage
1. Copy `style.css` into your project.
2. Copy the `.nav-underline-follow-sap` markup from `demo.html` — any number of `.nav-underline-follow-sap__link` items plus one `.nav-underline-follow-sap__indicator` span.
3. Include the `mouseenter`/`mouseleave` script from `demo.html` — measuring link position/width requires JS; CSS handles the slide/fade transition.

## Customization
- Adjust `gap` between links for spacing.
- Change the `0.3s cubic-bezier(...)` transition for slide feel.
- Swap the gradient on the indicator to restyle.

## Accessibility
This is a purely visual hover enhancement; ensure your active-page link is still indicated separately (e.g. `aria-current="page"` + a persistent style) since this indicator only tracks hover, not selection.

## Browser support
All modern browsers.