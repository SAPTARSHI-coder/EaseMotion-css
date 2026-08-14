# SCSS Subgrid Layout Helper v2

A robust SCSS mixin designed to seamlessly integrate CSS Subgrid into your layouts. It provides an elegant fallback structure for browsers that do not yet support the `subgrid` value, ensuring your layouts remain unbroken while progressively enhancing for modern browsers.

## 🎯 Features
- **Progressive Enhancement:** Utilizes CSS `@supports` queries to serve native subgrid to compatible browsers while providing standard grid fallbacks to older versions.
- **Axis Control:** Pass arguments to apply subgrid to `columns`, `rows`, or `both`.
- **Customizable Fallbacks:** Override default gap sizing and column distributions for the fallback layout directly through mixin parameters.
- **Modular:** Completely isolated in `_mixins.scss` for easy integration into the core EaseMotion SCSS architecture.

## 📁 Files Included
```text
_mixins.scss (The core mixin logic)
style.scss (Usage example)
style.css (Compiled CSS for the demo)
demo.html (Visual test case)
README.md