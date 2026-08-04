# Neon Spiral Select Menu Suite

Resolves intermediate feature tracker ticket #42606. Delivers a highly polished, interactive select dropdown menu featuring hardware-accelerated spiral entry calculations using a zero-JavaScript pure CSS state engine.

## ⚙️ Engineering Specifications
* **JavaScript-Free State Engine**: Employs an invisible checkbox layout pattern (`input[type="checkbox"]` + `:checked`) to handle robust interactive menu reveals safely without script weight.
* **Calculated Spiral Easing**: Implements staggered transitions using custom indices (`--ease-item-index`), computing complex rotation and scale values via hardware-accelerated matrix layering:
  * Open curve sequence delays: `calc(index * 60ms)`
  * Close curve sequence delays: `calc((total - index) * 60ms)`
* **A11y Visual Defenses**: Bundles lightweight aria visibility attributes (`aria-haspopup`, `aria-expanded`) and handles full fallback styling rules for `@media (prefers-reduced-motion)`.
