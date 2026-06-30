# Container Queries (`ease-container-queries-feature`)

This proposal demonstrates and implements the usage of CSS `@container` queries within the EaseMotion CSS framework to create truly modular, responsive components that adapt to their parent container's width, rather than the viewport.

## 📌 Feature Overview

Container queries (`@container`) represent the future of responsive design. They allow UI components (like cards, sidebars, or media objects) to adjust their layout based on the space _available_ to them, not just the entire screen size.

**Design Tokens Documented:**

- `--color-base` / `--color-surface`: Background layers.
- `--color-brand`: Main interactive accent color.
- `--anim-speed`: Handles animation timing, respecting user accessibility preferences (`prefers-reduced-motion: reduce`).

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. Resize your browser window to watch the components instantly toggle between vertical (stacked) and horizontal (side-by-side) layouts depending on the container size available to each individual card.

**Usage:**

1. Define a container class:

```css
.container-wrap {
  container-type: inline-size;
}
```

2. Query the container size instead of the viewport:

```css
@container (min-width: 400px) {
  .component {
    flex-direction: row;
  }
}
```

_Note: As per the contributing guidelines, this proposal is implemented inside `submissions/examples/ease-container-queries-feature/` to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these patterns to the core stylesheet._

## 🔗 Related Issue

Closes Issue #18483
