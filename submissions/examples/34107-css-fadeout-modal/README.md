# Modern SaaS Fade-Out Modal (Pure CSS)

A lightning-fast, production-ready, zero-dependency modal transition styled intentionally for modern SaaS interfaces.

## Features
- **Zero JavaScript Overhead:** Runs entirely on the GPU utilizing native CSS transition layer bindings.
- **Highly Configurable Design Tokens:** Exposes clean CSS variables directly on `:root`.
- **Keyboard & Screen Reader Accessible:** Adheres to semantic attributes without interrupting normal tab indexing flows.

## Configuration Tokens
Override these properties inside your project context to tailor runtime characteristics:
- `--modal-duration`: Sets entry/exit velocity transitions.
- `--modal-easing`: Dictates curves (Default: `cubic-bezier(0.16, 1, 0.3, 1)`).
- `--modal-scale-start`: Adjusts scale boundaries during component transitions.