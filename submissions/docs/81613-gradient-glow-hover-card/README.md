# Gradient Glow Hover Card — Basic Usage

## Overview
This guide documents the basic usage of the Gradient Glow Hover Card.
The component provides a reusable card surface with a gradient glow on hover.

## Markup
```html
<article class="glow-card">
  <p class="glow-card__eyebrow">Featured</p>
  <h2 class="glow-card__title">Product discovery</h2>
  <p class="glow-card__text">A simple card with a controlled hover treatment.</p>
</article>
```

## Class Naming
`glow-card` is the component block.
Use `glow-card__eyebrow`, `glow-card__title`, and `glow-card__text` for internal elements.
Keep component selectors independent from page layout selectors.

## Basic Behavior
The card remains visually stable before interaction.
Hover reveals the glow without changing the document layout.
The effect should complement readable content rather than obscure it.

## Custom Properties
Design tokens can be overridden from the component scope.

```css
.glow-card {
  --card-radius: 1.25rem;
  --card-surface: #121827;
  --card-glow: #7c5cff;
}
```

## Responsive Design
Cards should stretch to their available column width.
Avoid fixed widths that cause horizontal scrolling.
Reduce decorative effects when space is constrained.

## Accessibility
Use semantic article or link markup according to the card's purpose.
Do not make hover the only way to discover important information.
Maintain readable contrast between text and the card surface.

## Keyboard Guidance
If the card is actionable, use a native link or button.
Provide a visible focus state matching the hover treatment.
Do not require a pointer to understand the card's destination.

## Motion
Keep the hover transition subtle.
Respect `prefers-reduced-motion` for optional transitions.

## Usage
Copy the markup into the page and load `style.css`.
Replace the sample text with content relevant to the host interface.
Use a link or button when the card needs an action.

## Testing
Check narrow and wide layouts.
Check keyboard focus.
Check contrast.
Check hover behavior.
Check reduced-motion preferences.

## Files
`README.md` contains the documentation.
`demo.html` contains the standalone demonstration.
`style.css` contains the presentation rules.

## Maintenance
Keep content semantics in HTML.
Keep glow styling in CSS.
Use variables for theme customization.
