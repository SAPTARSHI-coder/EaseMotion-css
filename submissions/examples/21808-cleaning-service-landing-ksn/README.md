# Cleaning Service Landing Page (#21808)

## 1. What does this do?

It provides a fully responsive, interactive, and modern cleaning service landing page (SparklePro) showcasing layout, styling, and transitions powered entirely by EaseMotion CSS.

## 2. How is it used?

Apply EaseMotion classes like `ease-navbar-glass` for sticky glassmorphism headers, `ease-card-lift` for hover effects on cards, and transition utilities like `ease-slide-up` for entrance animations:

```html
<div
  class="ease-card ease-card-shadow ease-card-lift ease-hover-glow ease-slide-up"
>
  <h3>Residential Clean</h3>
</div>
```

## 3. Why is it useful?

It demonstrates a real-world, high-fidelity business conversion page using EaseMotion CSS classes to implement elegant navigation menus, interactive scheduling calendars, before/after showcases, and responsive grid layouts without relying on custom keyframes or third-party JS animation libraries.

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
  - `ease-chip`: Displays inline tag-style badges.
  - `ease-field`, `ease-field-label`, `ease-input`, `ease-select`: Custom form controls.
- **Animations & Hover Effects**:
  - `ease-fade-in`: Animates elements with smooth opacity entrance.
  - `ease-slide-up`, `ease-slide-down`: Entrance slide translations.
  - `ease-delay-100`, `ease-delay-200`, `ease-delay-300`, `ease-delay-500`: Orchestrates staggered animations.
  - `ease-hover-grow`, `ease-hover-lift`, `ease-hover-glow`, `ease-hover-shrink`: Micro-interactions triggered on user hover.
