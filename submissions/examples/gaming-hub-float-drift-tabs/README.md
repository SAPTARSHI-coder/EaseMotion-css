# Gaming Hub Float-Drift Tabs | EaseMotion CSS

A premium, esports-inspired dashboard showcase demonstrating a highly interactive **Float-Drift Tab Navigation** system using the EaseMotion CSS framework. This interface emphasizes glassmorphism, dynamic glowing accents, and fluid layouts completely powered by native HTML5 and CSS.

## Features

- **Float-Drift Navigation System**: A fully functional, zero-JS tab navigation system. The active tab indicator smoothly glides (`transition: transform`) between selected items while simultaneously projecting a subtle, continuous levitation and glow effect (`animation: floatDrift`).
- **Content Drift Reveal**: When a new tab is selected, its corresponding content panel drifts into focus seamlessly using a combination of `translateY`, `opacity`, and `blur()` filters.
- **Pure CSS State Management**: Relies securely on hidden `<input type="radio">` buttons and the adjacent sibling selector (`~`) to toggle both the floating indicator position and the active content panels.
- **Cyber / Esports Aesthetics**: Utilizes deep space backgrounds (`#05060A`), frosted glass panels (`backdrop-filter`), and sharp neon accents (Cyan `#00e5ff` & Magenta `#f000ff`).
- **Native Accessibility Built-in**: 
  - Hidden radio inputs remain focusable (`.sr-only`).
  - Clear `outline` indicators ensure keyboard users can navigate via the `Tab` and `Arrow` keys natively.
  - Full support for `@media (prefers-reduced-motion: reduce)`.

## Folder Structure

```text
gaming-hub-float-drift-tabs/
├── demo.html    # The pure HTML structural layout with radio-tab mechanics
├── style.css    # Core styling, Drift keyframes, and EaseMotion component fallbacks
└── README.md    # Documentation
```

## How to Run

1. Clone or download the repository.
2. Navigate to `submissions/examples/gaming-hub-float-drift-tabs/`.
3. Open `demo.html` in any modern web browser.

*(Note: `style.css` includes fallback animation definitions so the demo looks and functions perfectly even when viewed standalone without the core library).*

## EaseMotion Classes Featured

This dashboard makes heavy use of EaseMotion's foundational layout utilities to orchestrate a satisfying page load sequence:

- `ease-fade-in`: Provides smooth opacity transitions for all main structural elements.
- `ease-slide-up`: Raises the main dashboard and tab components from the bottom elegantly.
- `ease-slide-down`: Lowers the top navigation bar into place.
- `ease-delay-*`: Specifically cascades delays (`100ms`, `200ms`, `400ms`, `600ms`) to guide the user's eye from the header, to the tabs, and finally to the content area.

## Responsive Behaviour

- **Desktop (960px+)**: A sprawling, horizontal tab bar ensuring maximum readability, with multi-column grids for inventory and leaderboards.
- **Tablet (640px - 960px)**: The dashboard tightens its padding and shifts the main "VS" hero layout into a vertical stack to preserve scale.
- **Mobile (< 640px)**: The horizontal tab bar dynamically restructures into a **vertical stack**. The CSS `transform: translateX()` logic intelligently shifts to `transform: translateY()` via media queries so the Float-Drift indicator continues to function perfectly up and down the list.

## Why it fits EaseMotion CSS

This implementation exemplifies advanced CSS engineering. By pairing EaseMotion's powerful page-load orchestration with a bespoke, zero-JS Float-Drift tab component, developers can deliver AAA-quality interactive experiences while maintaining an incredibly lightweight and accessible DOM.
