# Gaming Hub Shimmer-Sweep Accordion | EaseMotion CSS

A premium, production-ready showcase for the EaseMotion CSS framework. This demo features a highly interactive "Command Center" control panel containing exclusive accordions that trigger a custom "Shimmer-Sweep" reveal effect perfectly suited for AAA gaming platforms or high-end SaaS applications.

## Features

- **Shimmer-Sweep Accordion**: A beautifully synchronized gradient sweep that glides over the content layer the moment an accordion panel is opened, commanding attention.
- **Pure CSS Exclusive Accordions**: Utilizes native HTML5 `<details>` tags combined with the `name` attribute to create mutually exclusive tabs without a single line of JavaScript.
- **Glassmorphism & Cyber Aesthetics**: Implements frosted glass surfaces, sharp cyber typography (`Rajdhani`), deep void backgrounds, and high-contrast neon highlights.
- **EaseMotion Integration**: Demonstrates how EaseMotion utility classes (e.g. `ease-slide-up`, `ease-delay-*`) can perfectly complement custom keyframe behaviors.
- **Accessibility Built-in**: Completely keyboard navigable, semantic markup, and strictly adheres to `prefers-reduced-motion` settings by disabling sweeps and transitions gracefully.

## Folder Structure

```text
gaming-hub-shimmer-sweep-accordion/
├── demo.html    # Layout architecture, accordion structure, and EaseMotion bindings
├── style.css    # Shimmer sweep keyframes, component styling, and cyber theme variables
└── README.md    # Documentation
```

## How to Run

1. Clone or download the repository.
2. Navigate to `submissions/examples/gaming-hub-shimmer-sweep-accordion/`.
3. Open `demo.html` in any modern web browser.

*(Note: `style.css` includes fallback animation definitions so the demo looks and functions perfectly even when viewed standalone without the core library).*

## EaseMotion Classes Featured

This demo leverages EaseMotion classes to orchestrate the initial load sequence of the dashboard:

- `ease-fade-in`: Provides soft entry opacity.
- `ease-slide-up`: Raises the accordion modules from the bottom smoothly.
- `ease-slide-down`: Lowers the top navigation bar into place.
- `ease-slide-right`: Slides the side navigation in from the left.
- `ease-zoom-in`: Adds a scaling depth reveal to the main panel header.
- `ease-delay-*`: Specifically uses cascading delays (`100ms` through `500ms`) to load the UI in a satisfying sequence.

## Custom Keyframes Explained

While EaseMotion handles the layout entry, custom `@keyframes` were authored specifically to achieve the Shimmer-Sweep accordion requirements:
- `sweepEffect`: Animate a high-contrast multi-stop linear gradient strictly horizontally across the newly opened content container.
- `accordionReveal`: Provides a slight Y-axis transform and opacity build specifically for the inner `<details>` content, allowing for smooth native-like opening sequences without JS.

## Responsive Behaviour

- **Desktop (960px+)**: Expansive two-column layout with a persistent sidebar and multi-column internal data grids (e.g., stats).
- **Tablet (640px - 960px)**: Sidebar shifts to a top-aligned navigation bar, and grids condense appropriately.
- **Mobile (< 640px)**: Deep spacing adjustments, single-column internal layouts, and optimized text sizing for readability.

## Why it fits EaseMotion CSS

EaseMotion is designed to build foundational entrance and state animations effortlessly. This showcase proves that developers can utilize EaseMotion to handle the "heavy lifting" of the page load orchestration while mixing in highly specific, custom CSS `@keyframes` (like the Shimmer-Sweep) for unique component interactions—resulting in a fully robust, lightweight, zero-JS application layer.
