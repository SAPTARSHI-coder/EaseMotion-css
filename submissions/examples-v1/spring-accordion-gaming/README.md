# Spring Accordion (Gaming UI)

A pure HTML + CSS responsive accordion component inspired by Gaming UI overlays, featuring high-fidelity, spring-action transitions. The component is completely JavaScript-free, using native checkboxes for toggling expand states and modern CSS grid track transitioning to animate height smoothly from `0` to its natural `auto` size.

## Features

- **Grid Row Height Transition**: Transitioning `grid-template-rows` from `0fr` to `1fr` allows a fluid expand animation to the exact natural height of the content without hardcoding max-height parameters.
- **Spring Scale Overshoot**: The inner content transitions on checked focus using a spring cubic-bezier curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`), creating a physical spring bounce scaling effect as it fades in.
- **Dark Sci-Fi Theme**: Structured with glassmorphic cards, glowing neon indicator lights, custom stats tables, and completion progress bars.
- **Independent Toggles**: Checkboxes allow multiple accordion items to be expanded or collapsed simultaneously.
- **Keyboard Accessible**: Arrow-key and Tab keyboard navigation triggers checkbox states natively. Focus outlines are styled clearly using `:focus-visible`.
- **Reduced Motion Support**: Disables spring scale bounces and height transitions when `prefers-reduced-motion: reduce` is active.

---

## Folder Structure

```text
submissions/examples/spring-accordion-gaming/
├── demo.html    # Standalone player profile dashboard featuring stats and progress widgets
├── style.css    # Grid row timings, spring curves, glowing cards, and responsiveness
└── README.md    # Documentation & API guidelines
```

---

## Customization API

Easily adjust spacings, timings, and glow colors by updating these CSS custom properties in your stylesheet:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-accordion-duration` | `0.45s` | Slide expand/collapse transition duration. |
| `--ease-accordion-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring timing function for height and scale overshoot. |
| `--ease-accordion-radius` | `16px` | Card corner border radius. |
| `--ease-accordion-glow` | `0 0 15px rgba(168, 85, ...)` | Glowing drop shadow active when expanded. |
| `--ease-accordion-spacing` | `1rem` | Gap between accordion items. |
| `--ease-accordion-bg-opacity` | `0.06` | Glassmorphic card background opacity. |
| `--ease-accordion-shadow` | `0 10px 35px ...` | Standard item card shadow. |

---

## Technical Details

### Grid Height Transition Trick
Standard CSS height transitions from `0` to `auto` fail. By wrapping content inside a 1-column grid and transitioning the row size, the layout shifts smoothly:

```html
<div class="ease-accordion__content">
  <div class="ease-accordion__content-inner">
    ...
  </div>
</div>
```
```css
.ease-accordion__content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--ease-accordion-duration) var(--ease-accordion-spring);
}

.ease-accordion__checkbox:checked ~ .ease-accordion__content {
  grid-template-rows: 1fr;
}
```

### Spring Scale Bounce
The bouncy feel comes from animating `transform: scale(0.96) translateY(-10px)` to `scale(1) translateY(0)` on the inner child using the spring cubic-bezier curve. The curve's value pushes the scale briefly beyond `1.0` before settling:

```css
.ease-accordion__content-inner {
  transform: scale(0.96) translateY(-10px);
  transition: transform var(--ease-accordion-duration) var(--ease-accordion-spring);
}
.ease-accordion__checkbox:checked ~ .ease-accordion__content .ease-accordion__content-inner {
  transform: scale(1) translateY(0);
}
```
