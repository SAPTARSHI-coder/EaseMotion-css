# Coin Stack Tilt Component (`.ease-coin-stack`)

## Abstract
The `coin-stack-tilt` component provides a gamified, high-performance CSS animation depicting a stack of metallic gold coins that physically wobble with a subtle, playful toppling tease. Designed for reward screens, loot claims, achievement notifications, and financial gamification interfaces.

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a gamified coin stack component (`.ease-coin-stack`) featuring overlapping metallic gold coins that wobble with a toppling tease using pure CSS transforms and keyframe rotations.

### 2. How is it used?
Embed the `.ease-coin-stack` structure into reward screens, treasure claim dialogs, or gamification dashboards. Use the provided JavaScript trigger or class toggle (`.is-animating`) to restart the wobble animation on demand.

### 3. Why is it useful?
Enhances interactive feedback loops and reward moments in web applications without requiring heavy canvas renderers or JavaScript physics engines.

## Tilt & Wobble Architecture
- **Layering & Stacking**: Coins are layered using negative top margins (`margin-top: -12px`) and 3D transform perspectives to create realistic depth.
- **Keyframe Wobble Dynamics**: Keyframe rotations (`@keyframes easeCoinWobble`) apply alternating angles (`-8deg`, `10deg`, `-5deg`, `3deg`) and skew distortions (`skewX`) to simulate natural dynamic momentum and near-toppling balance teases.
- **Accessibility & High-Contrast**: Includes `forced-colors: active` media query support for accessibility and standard `aria-label` attribute descriptions.

## Custom CSS Properties

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--coin-bg` | `#030712` | Dark background environment tint |
| `--coin-surface` | `#0f172a` | Card container background surface |
| `--coin-border` | `rgba(234, 179, 8, 0.25)` | Border highlight color for stage container |
| `--coin-gold-light` | `#fef08a` | Highlight dynamic color for metallic coin edges |
| `--coin-gold-main` | `#eab308` | Primary gold color tone for coins & buttons |
| `--coin-gold-dark` | `#ca8a04` | Shadow gradient accent for coin metallic depth |
| `--coin-text` | `#f8fafc` | Primary text color |
| `--coin-muted` | `#94a3b8` | Muted subtitle text color |
| `--coin-shadow` | `rgba(234, 179, 8, 0.3)` | Glow & shadow tint for interactive elements |
