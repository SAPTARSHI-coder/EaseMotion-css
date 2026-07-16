# Art Studio Classes Landing Page (#21804)

## 1. What does this do?

It provides a fully responsive, interactive, and beautifully designed landing page for an Art Education Business (Aura Art Studio) showcasing layout, grid card variants, buttons, and animations powered entirely by EaseMotion CSS.

## 2. How is it used?

Apply EaseMotion classes like `ease-navbar-glass` for sticky headers, `ease-card-lift` for hover elevation on class and instructor cards, and transition delay helpers like `ease-delay-100` to stagger entrance animations:

```html
<div
  class="ease-card ease-card-shadow ease-card-lift ease-hover-glow ease-slide-up ease-delay-100"
>
  <h3>Painting & Color Theory</h3>
</div>
```

## 3. Why is it useful?

It demonstrates a real-world, high-fidelity business conversion page using EaseMotion CSS classes to implement elegant navigation menus, pricing blocks, instructor profiles, hover-overlay student galleries, and responsive registration forms without relying on custom keyframes or third-party JS animation libraries.

## Showcased EaseMotion Classes

- **Navigation**:
  - `ease-navbar-glass`, `ease-navbar-glass-sticky`, `ease-navbar-glass-blur`: Creates a premium glassmorphic sticky header navigation.
  - `ease-navbar-menu`, `ease-navbar-item`: Structures navigation link items.
- **Cards & Layout**:
  - `ease-grid-auto`: Standard auto-fit responsive grid container.
  - `ease-row`, `ease-center`: Flexbox layout utilities.
  - `ease-card`, `ease-card-shadow`, `ease-card-lift`: Stylizes cards with shadow and lifting motion on hover.
  - `ease-neon-border`, `ease-neon-purple`: Adds a vibrant modern glow border to callouts/highlighted cards.
- **Buttons & Forms**:
  - `ease-btn`, `ease-btn-primary`, `ease-btn-outline`, `ease-btn-sm`, `ease-btn-lg`, `ease-btn-pill`: Custom button types and sizing.
  - `ease-field`, `ease-field-label`, `ease-input`, `ease-select`: Custom form controls.
- **Animations & Hover Effects**:
  - `ease-fade-in`: Animates elements with smooth opacity entrance.
  - `ease-slide-up`, `ease-slide-down`: Entrance slide translations.
  - `ease-delay-100`, `ease-delay-200`, `ease-delay-300`, `ease-delay-500`: Orchestrates staggered animations.
  - `ease-hover-grow`, `ease-hover-lift`, `ease-hover-glow`, `ease-hover-shrink`, `ease-hover-shimmer`: Micro-interactions triggered on user hover.
