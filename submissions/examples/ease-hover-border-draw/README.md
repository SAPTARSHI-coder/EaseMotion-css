# Ease Hover Border Draw

A pure CSS interaction where a solid border progressively draws itself around an element's perimeter when hovered.

## What it does

The `ease-hover-border-draw` utility creates a sequential, animated border effect. Using `::before` and `::after` pseudo-elements, it traces the perimeter of the container (Top → Right → Bottom → Left). When the user's cursor leaves the element, the animation smoothly reverses, erasing the border in the opposite direction without any visual glitches.

## How to use it

Apply the class to any block or inline-block element (like a button or a card).

```html
<button class="ease-hover-border-draw">Hover Me</button>
```

You can customize the color and the total animation duration using CSS variables:

```css
:root {
  --ease-border-color: #6c63ff; /* Default color */
  --ease-border-speed: 0.4s; /* Total time for 2 sides (0.8s for full perimeter) */
}
```

## Why it fits EaseMotion CSS

- **Zero Dependencies:** Fully CSS driven using intelligent `transition-delay` sequencing, requiring no JavaScript event listeners.
- **Responsive:** It relies on percentage-based widths and heights (`100%`), meaning it perfectly traces the element regardless of its dimensions or responsive resizing.
- **Polished Interaction:** The careful calculation of the "rewind" state (when the mouse leaves) ensures the interaction feels premium and unbroken, tracing its exact steps backward rather than resetting harshly.
