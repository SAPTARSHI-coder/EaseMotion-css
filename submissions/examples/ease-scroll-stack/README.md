# Ease Scroll Stack: Pure CSS 3D Card Deck

A premium, scroll-driven interactive card deck built entirely with modern CSS utilizing `view-timeline`. As the user scrolls, the cards stack, shift, and compress into a 3D perspective deck.

## Overview

This example demonstrates how to implement a high-fidelity rolling card stack with realistic 3D depth and glassmorphism. It uses pure HTML and CSS, with zero JavaScript or external libraries. The scroll interaction relies on CSS scroll-driven animations (`view-timeline-name` and `animation-timeline`), allowing a smooth, GPU-accelerated transition mapped directly to scroll progress.

## Features

- **CSS View Timeline**: Dynamic scroll progress tracking with `animation-timeline: view()` bound to scrollport positions.
- **Position Sticky Card Stacking**: Custom layout stack using `position: sticky` and layered offset offsets.
- **3D Perspective & Depth**: Leverages `perspective` and `translateZ` to push background cards into the Z-axis when active cards scroll on top of them.
- **5 High-Fidelity Cards**: Stacks features for a modern SaaS platform (Neural Engine, Quantum CDN, HyperDB, Shield Crypt, Telemetry Core), complete with high-fidelity inline SVG icons and mock dashboard layouts.
- **Glassmorphism Design System**: Clean frosted glass aesthetics using `backdrop-filter: blur()`, rich box-shadows, and glowing gradient borders.
- **Keyboard Accessibility**: Supports skip links, focus states for interactive items, tab accessibility on cards, and semantic structure.
- **Prefers-Reduced-Motion**: Seamless fallback that disables 3D translations and transitions in favor of simple opacity transitions.
- **Fully Responsive**: Adapts fluidly across widescreen monitors, laptops, tablets, and mobile devices.

## Folder Structure

```text
submissions/examples/ease-scroll-stack/
├── demo.html     # Semantic markup and mock UIs
├── style.css     # CSS View-Timeline animations and design system
└── README.md     # Setup and usage documentation
```

## Installation

Since this is a pure HTML and CSS demonstration, no build tools or package managers are required.

1. Clone or download the repository:
   ```bash
   git clone https://github.com/Bheemeswari497/EaseMotion-css.git
   ```
2. Navigate to the submission folder:
   ```bash
   cd submissions/examples/ease-scroll-stack/
   ```
3. Open `demo.html` directly in any modern web browser.

## Usage

To use this stacking deck in your own application:

1. Copy the CSS class definitions from `style.css`.
2. Wrap your scroll elements inside a `.stack-perspective` parent and define individual `.card-wrapper` elements.
3. Apply `position: sticky` to your `.stack-card` elements and specify the dynamic offsets using `--index` variables:

```html
<div class="stack-perspective">
  <!-- Wrapper acts as the scrollport trigger -->
  <div class="card-wrapper" style="--index: 0;">
    <article class="stack-card">
      <!-- Card content -->
    </article>
  </div>
</div>
```

## CSS Custom Properties

Configure the stack using the following variables defined in `:root` and card classes:

| Property | Description | Default Value |
| :--- | :--- | :--- |
| `--bg-dark` | Global deep dark background | `#030712` |
| `--bg-card` | Glassmorphic card fill | `rgba(255, 255, 255, 0.03)` |
| `--border-color` | Default card boundary color | `rgba(255, 255, 255, 0.08)` |
| `--index` | 0-indexed number determining stacking offsets | *Instance specific* |

## Accessibility

- **Semantic HTML**: Built using landmarks (`<main>`, `<nav>`, `<header>`, `<footer>`) and `<article>` tags for reader parsing.
- **Keyboard Friendly**: Cards include `tabindex="0"` and interactive anchor buttons contain clear target paths. Focus visible highlights are styled specifically to avoid defaults.
- **Aria Attributes**: Decorative graphics, SVG icons, and mock charts use `aria-hidden="true"` to prevent screen reader clutter.
- **Reduced Motion Support**: Incorporates a `@media (prefers-reduced-motion: reduce)` block that strips out high-frequency perspective/3D translations to protect users with vestibular conditions.

## Browser Support

Scroll-driven CSS animations are supported natively in:
- Chrome 115+
- Edge 115+
- Opera 101+
- Safari 17.5+ (partially with experimental flags, falls back gracefully)
- Firefox (behind `layout.css.scroll-driven-animations.enabled` flag, falls back gracefully)
