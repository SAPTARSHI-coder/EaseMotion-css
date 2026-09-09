# Hover Card Preview Popup

Cards with a hover preview popup. Hovering over a card shows a rich popup preview with more details, animated with scale and fade transitions.

## Features

- Scale + opacity popup animation via `--preview-duration` custom property
- Popup positioned absolutely near the hovered card
- Rich preview content (image, title, description, price)
- N-th child positioning logic to keep popups within viewport
- Glassmorphism trigger cards with lift-on-hover effect
- Responsive grid layout
- Respects `prefers-reduced-motion`

## Usage

Customize via `:root` variables:

```css
--preview-duration: 0.35s;
--preview-bg: #1e293b;
--preview-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
--preview-radius: 16px;
--preview-border: 1px solid rgba(255, 255, 255, 0.08);
--preview-text-color: #f1f5f9;
```
