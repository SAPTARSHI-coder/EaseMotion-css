# Glow Carousel (Health & Fitness UI)

A pure HTML + CSS glow-style carousel optimized for modern Health & Fitness tracking interfaces. This component runs completely without JavaScript, using native `<input type="radio">` tags for state tracking and CSS transforms to center the active card. The active card is highlighted with 3D scaling and a vibrant, color-coded neon glowing drop shadow.

## Features

- **Pure CSS Navigation**: Prev/Next navigation arrows, pagination nav dots, and even clicking on the unselected cards themselves are driven entirely using HTML labels and sibling selectors.
- **3D Depth-of-Field Effect**: The selected card scales up and gains full opacity and glow, while adjacent cards are scaled down and semi-translucent.
- **Vibrant Neon Fitness Theme**: Customized card states represent Cardio (Pink-Red), Activity (Green), Energy (Orange), and Sleep (Cyan) metrics with matching glowing shadows.
- **Keyboard Friendly**: Arrow keys automatically slide the carousel once a radio input receives focus. Pagination dots receive clear focus ring outlines via `:focus-visible`.
- **Reduced Motion Support**: Disables slide transitions and glow animations, displaying active cards instantly when `prefers-reduced-motion: reduce` is active.

---

## Folder Structure

```text
submissions/examples/glow-carousel-fitness/
├── demo.html    # Standalone demo containing mock fitness charts, graphics, and controls
├── style.css    # Layout properties, 3D translation offsets, neon glows, and media queries
└── README.md    # Documentation & API guidelines
```

---

## Customization API

 dimensions, timings, and styling can be updated via these CSS custom properties:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-carousel-duration` | `0.5s` | Slide movement animation duration. |
| `--ease-carousel-easing` | `cubic-bezier(0.25, 1, 0.5, 1)` | Easing curve for slide transitions. |
| `--ease-carousel-glow-intensity` | `30px` | Active card glow shadow spread radius. |
| `--ease-carousel-spacing` | `2rem` | Margin gap between carousel cards. |
| `--ease-carousel-radius` | `24px` | Card corner border radius. |
| `--ease-carousel-bg-opacity` | `0.08` | Translucent glassmorphism background opacity. |

---

## Implementation Details

### Centered Carousel Offsets
The slider track is offset dynamically so that the checked index is centered in the viewport. This is achieved by translating the track based on container widths rather than hardcoded pixels:

```css
#slide-1:checked ~ .ease-carousel .ease-carousel__track {
  transform: translateX(calc(50% - (var(--card-width) / 2)));
}
#slide-2:checked ~ .ease-carousel .ease-carousel__track {
  transform: translateX(calc(50% - (var(--card-width) / 2) - (var(--card-width) + var(--ease-carousel-spacing))));
}
```

### Unselected Card Click-to-Slide Overlay
By default, inactive cards contain a click-to-slide overlay label overlaying the card contents. When clicked, it checks the corresponding radio button, scrolling the card to the center. Once centered, the overlay is hidden via `pointer-events: none`, allowing clicks to pass through to the buttons inside:

```css
/* Enable clicks on adjacent cards for sliding */
.ease-carousel__click-overlay {
  position: absolute;
  inset: 0;
  cursor: pointer;
  z-index: 10;
}
/* Disable when active */
#slide-1:checked ~ .ease-carousel .ease-carousel__item:nth-child(1) .ease-carousel__click-overlay {
  pointer-events: none;
  z-index: -1;
}
```
