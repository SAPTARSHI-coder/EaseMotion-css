# Fashion Designer Portfolio (#21774)

## 1. What does this do?

It provides a fully responsive, interactive, and high-fidelity fashion designer portfolio landing page (Valentina Voss Couture) showcasing collections, runway grids, press reviews, and stockist locations using only EaseMotion CSS.

## 2. How is it used?

Apply EaseMotion classes like `ease-navbar-glass` for sticky headers, `ease-card-lift` for hover effects on seasonal look cards, and transition delay helpers like `ease-delay-100` to stagger entrance animations:

```html
<div
  class="look-card ease-card-shadow ease-card-lift ease-hover-glow ease-slide-up ease-delay-100"
>
  <!-- Look illustration and details -->
</div>
```

## 3. Why is it useful?

It demonstrates a real-world, high-fidelity editorial portfolio page using EaseMotion CSS classes to implement elegant navigation menus, interactive lookbooks, runway showcase overlays, and responsive stockist layouts without writing custom keyframes or importing heavy third-party JavaScript libraries.

## Showcased EaseMotion Classes

- **Navigation**:
  - `ease-navbar-glass`, `ease-navbar-glass-sticky`, `ease-navbar-glass-blur`: Creates a premium glassmorphic sticky header navigation.
  - `ease-navbar-menu`, `ease-navbar-item`: Structures navigation link items.
- **Cards & Layout**:
  - `ease-grid-auto`: Standard auto-fit responsive grid container.
  - `ease-row`: Flexbox layout utilities.
  - `ease-card`, `ease-card-shadow`, `ease-card-lift`: Stylizes cards with shadow and lifting motion on hover.
- **Buttons & Forms**:
  - `ease-btn`, `ease-btn-primary`, `ease-btn-outline`, `ease-btn-sm`, `ease-btn-lg`, `ease-btn-pill`: Custom button types and sizing.
  - `ease-field`, `ease-field-label`, `ease-input`, `ease-select`: Custom form controls.
- **Animations & Hover Effects**:
  - `ease-fade-in`: Animates elements with smooth opacity entrance.
  - `ease-slide-up`, `ease-slide-down`: Entrance slide translations.
  - `ease-delay-100`, `ease-delay-200`, `ease-delay-300`, `ease-delay-400`, `ease-delay-500`: Orchestrates staggered animations.
  - `ease-hover-grow`, `ease-hover-lift`, `ease-hover-glow`, `ease-hover-shrink`, `ease-hover-shimmer`: Micro-interactions triggered on user hover.
