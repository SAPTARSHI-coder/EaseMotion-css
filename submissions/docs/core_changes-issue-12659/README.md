# ease-snap-*

## What does this do?

Provides CSS scroll snap container utility classes (`ease-snap-x`, `ease-snap-y`, and companions) that enable smooth, snap-based scrolling experiences — carousels, galleries, full-page sections — with a single class and no JavaScript.

## How is it used?

**Horizontal carousel with start-aligned snap:**

```html
<div class="ease-snap-x ease-snap-start">
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
</div>
```

**Vertical snap with center alignment:**

```html
<div class="ease-snap-y ease-snap-center" style="height: 400px;">
  <section>Section A</section>
  <section>Section B</section>
</div>
```

### Available Classes

| Class | Purpose |
|---|---|
| `.ease-snap-x` | Horizontal scroll snap container |
| `.ease-snap-y` | Vertical scroll snap container |
| `.ease-snap-mandatory` | Strict snapping (always snaps) |
| `.ease-snap-proximity` | Soft snapping (snaps when near) |
| `.ease-snap-start` | Children align to start |
| `.ease-snap-center` | Children align to center |
| `.ease-snap-end` | Children align to end |
| `.ease-snap-px` | Container scroll padding (left + right) |
| `.ease-snap-py` | Container scroll padding (top + bottom) |
| `.ease-snap-mx` | Children scroll margin (left + right) |
| `.ease-snap-my` | Children scroll margin (top + bottom) |
| `.ease-snap-no-bar` | Hides scrollbar for visual gallery mode |

### Strictness

Strictness defaults to `mandatory`. Override with:

```html
<div class="ease-snap-x ease-snap-proximity">...</div>
```

Or set via the CSS custom property directly:

```css
--ease-snap-strictness: proximity;
```

## Why is it useful?

Scroll snap is a standard CSS feature that eliminates the need for JavaScript-based carousel or swipe logic. These utility classes make it accessible with intuitive class names, consistent with EaseMotion CSS's utility-first approach.

## Features

- Horizontal and vertical snap containers
- Mandatory and proximity strictness modes
- Start, center, and end child alignment
- Scroll padding utilities for the container
- Scroll margin utilities for children
- Hidden scrollbar mode for gallery presentations
- `-webkit-overflow-scrolling: touch` for smooth iOS scrolling
- Respects `prefers-reduced-motion` (disables smooth scroll behavior)
