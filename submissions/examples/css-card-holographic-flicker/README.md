# Holographic Flicker Card

A polished, accessible and performant **Holographic Flicker Card**
built entirely with semantic HTML and vanilla CSS.

## ✨ Features

- Pure HTML and CSS
- No JavaScript
- Holographic gradient effect
- Subtle flicker / scan-line animation
- Animated light sweep
- Glassmorphism-inspired surface
- Dark and light color-scheme support
- Keyboard accessible
- Visible focus states
- Reduced-motion support
- Responsive layout
- Hardware-friendly transforms
- No external dependencies

## 🎨 Design

The component combines:

- CSS conic gradients
- Layered pseudo-elements
- Gradient overlays
- CSS animations
- Backdrop-style visual treatment
- Transform-based interaction
- Accessible focus states

The holographic layer continuously rotates to create a
dynamic spectrum effect while the scan layer provides the
flickering visual treatment.

## ♿ Accessibility

The card includes:

- Semantic HTML
- Keyboard focus support
- `tabindex="0"` on the interactive card surface
- Descriptive `aria-labelledby`
- Decorative layers hidden using `aria-hidden`
- Visible `:focus-visible` styles
- `prefers-reduced-motion` support

Users who prefer reduced motion receive a simplified
static presentation.

## ⚡ Performance

The component avoids JavaScript and expensive layout operations.

Animations primarily use:

- `transform`
- `opacity`

The card also uses `isolation` to keep visual compositing
contained within the component.

## 🌙 Theme Support

The component automatically adapts to the user's preferred
color scheme using:

```css
@media (prefers-color-scheme: light)