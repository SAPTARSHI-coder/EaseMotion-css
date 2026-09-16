# Fortune Wheel Spin Component (`ease-fortune-wheel-spin-ss`)

## Abstract

The **Fortune Wheel Spin Component** (`.ease-fortune-wheel`) is a performant, dependency-free CSS and JavaScript component designed for gamified user interfaces. It uses CSS `conic-gradient` for vibrant segment visuals and a custom `cubic-bezier(0.15, 0.85, 0.15, 1)` easing curve for realistic rotational deceleration. Additionally, pointer tick feedback is animated via `@keyframes easePointerBounce` to provide tactical visual cueing upon completion.

## CONTRIBUTING.md Compliance

1. **What does this do?**
   Implements a gamified "Fortune Wheel Spin" component (`.ease-fortune-wheel`) featuring conic-gradient prize segments, a bouncing top pointer, and smooth cubic-bezier deceleration physics.

2. **How is it used?**
   Embed the `.ease-wheel-container` structure into reward modals, gamification dashboards, or daily check-in screens. Use the provided JavaScript controller to calculate random rotation angles and trigger the spin transition.

3. **Why is it useful?**
   Boosts user engagement and gamification mechanics in web applications without requiring external animation plugins or complex canvas wrappers.

## Spin & Deceleration Architecture

- **Conic Gradient Wheel Surface**: Built using `conic-gradient` dividing 360 degrees into 6 equal 60-degree color sectors (`#ec4899`, `#8b5cf6`, `#3b82f6`, `#10b981`, `#f59e0b`, `#ef4444`).
- **Deceleration Curve**: Employs a custom `cubic-bezier(0.15, 0.85, 0.15, 1)` transition timing function lasting 4 seconds to simulate dynamic mechanical friction.
- **Pointer Tactile Click Animation**: The top indicator (`.ease-wheel-pointer`) triggers an animated bounce (`easePointerBounce`) at the end of the spin cycle to signify landing on a prize segment.
- **Accessibility & High Contrast**: Includes explicit ARIA roles (`role="img"`, `aria-label`, `aria-labelledby`) and a `@media (forced-colors: active)` block to support Windows High Contrast Mode.

## Custom CSS Properties

| Token | Default Value | Description |
| :--- | :--- | :--- |
| `--wheel-bg` | `#030712` | Dark ambient background color |
| `--wheel-surface` | `#0f172a` | Container stage background surface |
| `--wheel-border` | `rgba(168, 85, 247, 0.25)` | Outer container border color |
| `--wheel-accent` | `#a855f7` | Primary accent color for spin button |
| `--wheel-accent-light` | `#c084fc` | Secondary light accent color |
| `--wheel-text` | `#f8fafc` | Primary typography color |
| `--wheel-muted` | `#94a3b8` | Muted subtitle text color |
| `--wheel-shadow` | `rgba(168, 85, 247, 0.35)` | Accent button glow shadow |
