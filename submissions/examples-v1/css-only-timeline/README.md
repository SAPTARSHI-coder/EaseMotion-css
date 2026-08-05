# Pure CSS Animated Vertical Timeline

This submission adds a beautiful, highly responsive, pure CSS Vertical Timeline to the EaseMotion component library.

## Features
- **Zero JavaScript:** Built entirely using CSS structure and pseudo-elements.
- **Alternating Layout:** On desktop, items automatically alternate sides (left/right) using `nth-child(even)` and `nth-child(odd)`.
- **Responsive:** On mobile screens (<768px), the timeline automatically collapses into a single-column layout with the connecting line positioned cleanly on the left edge.
- **Animated Junctions:** The central connecting nodes pulse and scale up when the user hovers over an item.
- **Seamless Integrations:** Fully utilizes EaseMotion's `.ease-fade-in` and `.ease-delay-*` utilities to sequentially reveal timeline items on page load.

## Usage
Wrap items in an `.ease-timeline` container. Each block is an `.ease-timeline-item`, and content goes inside an `.ease-timeline-content`.

```html
<div class="ease-timeline">
  
  <div class="ease-timeline-item">
    <div class="ease-timeline-content ease-fade-in">
      <h3>Phase 1</h3>
      <p>Description goes here.</p>
    </div>
  </div>

  <div class="ease-timeline-item">
    <div class="ease-timeline-content ease-fade-in ease-delay-200">
      <h3>Phase 2</h3>
      <p>Alternates to the other side automatically.</p>
    </div>
  </div>

</div>
```
