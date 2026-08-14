# Quantum Teleportation & Grover's Search (rithm-17)

A visual representation of quantum teleportation and Grover's search algorithm as an animated CSS schematic, pure CSS.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — styles (pure CSS where possible; minimal vanilla JS only where interaction requires it)
- `README.md` — this guide


## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-qg17" role="img" aria-label="Quantum teleportation and Grover search schematic">
  <div class="ease-qg17__node ease-qg17__node--a">A</div>
  <div class="ease-qg17__channel" aria-hidden="true"></div>
  <div class="ease-qg17__node ease-qg17__node--b">B</div>
  <div class="ease-qg17__oracle" aria-hidden="true">|w⟩</div>
</div>
```


## Accessibility
- Decorative animation elements marked `aria-hidden="true"`.
- Interactive controls use native elements with `:focus-visible` outlines.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #74128
