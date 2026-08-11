# Horizontal Roll Tabs (#50296)

## Engineering Overview
A CSS-only interactive tab component featuring a high-fidelity "Rolling" indicator. Engineered to provide immediate visual feedback via elastic motion physics.

## Key Technical Features
- **Elastic Motion:** Utilizes a custom `cubic-bezier(0.68, -0.55, 0.265, 1.55)` transition to create a spring-like 'roll' effect.
- **Hardware Acceleration:** All animations are handled via the `transform` property to maintain 60FPS performance.
- **Accessible Logic:** Uses native HTML `radio` inputs and `label` tags to manage state, ensuring full keyboard and screen-reader accessibility.
- **Modularity:** Easily customize tab width, colors, and animation speed through defined CSS custom properties.

## Usage
Simply define your tabs using the radio group pattern and point the `roll-indicator` to the respective CSS trigger selectors. Perfect for navigation bars, dashboards, or filter views.