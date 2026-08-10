# FAQ Section — EaseMotion CSS

An advanced, interactive FAQ accordion component featuring a hybrid design architecture, smooth fractional animations, and a native light/dark theme switching engine.

## Preview
Open `index.html` directly in any modern web browser to view the implementation in action.

## Features
- **Fluid Height Transitions:** Built with a performant Web-Animation API (WAAPI) engine that intercepts standard HTML5 `<details>` snap states, enabling buttery-smooth bidirectional expanding and collapsing.
- **Native Theme Swapping:** Features built-in Light and Dark mode configurations controlled dynamically via modular CSS Custom Properties (`--faq-*`) and a `data-theme` attribute selector.
- **Premium Card UI Archetype:** Replaces traditional row dividers with isolated SaaS-style card modules that elevate visual hierarchy with focus frames and deep hover interactions.
- **Animated Vector Icons:** Replaces text-based operators (`+` / `−`) with clean inline SVG arrow vectors that execute a calibrated 180-degree rotation.
- **Zero Framework Bloat:** High-fidelity animations powered exclusively by raw web layout cycles without heavy execution libraries.

## Usage

1. Save the upgraded structure as `index.html` and the accompanying stylesheet as `style.css` in the same working folder.
2. Link both files and reference the primary framework stylesheet inside your `<head>` block:
```html
<link rel="stylesheet" href="[https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.min.css](https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.min.css)"/>
<link rel="stylesheet" href="style.css"/>